<?php
/**
 * Class Kadence_Blocks_Duplicate_Post
 *
 * @package Kadence Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Kadence_Blocks_Duplicate_Post.
 */
class Kadence_Blocks_Duplicate_Post {
	/**
	 * Slug.
	 *
	 * @var string
	 */
	private $slug = '';
	/**
	 * Constructor.
	 */
	public function __construct( $slug = '' ) {
		if ( ! empty( $slug ) ) {
			$this->slug = $slug;
			add_action( "admin_action_kadence_duplicate_{$slug}", [ $this, 'duplicate_action' ] );
			add_filter( 'post_row_actions', [ $this, 'dupe_link' ], 10, 2 );
		}
	}

	/**
	 * Show the "Duplicate" link in admin post list.
	 *
	 * @param array   $actions Array of actions.
	 * @param WP_Post $post Post object.
	 * @return array
	 */
	public function dupe_link( $actions, $post ) {

		if ( ! is_object( $post ) ) {
			return;
		}
		if ( ! isset( $post->post_type ) ) {
			return $actions;
		}
		if ( $this->slug !== $post->post_type ) {
			return $actions;
		}
		if ( ! current_user_can( apply_filters( 'kadence_blocks_duplicate_post_capability', 'edit_kadence_forms' ) ) ) {
			return;
		}

		$actions['duplicate'] = '<a href="' . wp_nonce_url( admin_url( 'edit.php?post_type=' . $this->slug . '&action=kadence_duplicate_' . $this->slug . '&amp;post=' . $post->ID ), 'kadence_duplicate_post_' . $post->ID ) . '" aria-label="' . esc_attr__( 'Make a duplicate from this.', 'kadence-blocks' )
			. '" rel="permalink">' . esc_html__( 'Duplicate', 'kadence-blocks' ) . '</a>';

		return $actions;
	}

	/**
	 * Duplicate a post action.
	 */
	public function duplicate_action() {
		if ( empty( $_REQUEST['post'] ) ) {
			wp_die( esc_html__( 'No post to duplicate has been supplied!', 'kadence-blocks' ) );
		}

		$post_id = isset( $_REQUEST['post'] ) ? absint( $_REQUEST['post'] ) : '';
		check_admin_referer( 'kadence_duplicate_post_' . $post_id );

		$clone_post = get_post( $post_id );

		if ( false === $clone_post ) {
			/* translators: %s: product id */
			wp_die( sprintf( esc_html__( 'Post creation failed, could not find original post: %s', 'kadence-blocks' ), esc_html( $post_id ) ) );
		}

		$duplicate_id = $this->duplicate( $clone_post );

		// Redirect to the edit screen for the new draft page.
		wp_redirect( admin_url( 'post.php?action=edit&post=' . $duplicate_id ) );
		exit;
	}

	/**
	 * Function to create the duplicate of the product.
	 *
	 * @param POST $post The post to duplicate.
	 * @return POST The duplicate.
	 */
	public function duplicate( $post ) {

		$post_content = $this->recursive_duplicate( $post );

		$new_post_status = 'draft';
		// translators: %s: post title.
		$title              = sprintf( esc_html__( '%s (Copy)', 'kadence-blocks' ), $post->post_title );
		$new_post_author    = wp_get_current_user();
		$new_post_author_id = $new_post_author->ID;
		$new_post           = [
			'menu_order'            => $post->menu_order,
			'comment_status'        => $post->comment_status,
			'ping_status'           => $post->ping_status,
			'post_author'           => $new_post_author_id,
			'post_content'          => $post_content,
			'post_content_filtered' => $post->post_content_filtered,
			'post_excerpt'          => $post->post_excerpt,
			'post_mime_type'        => $post->post_mime_type,
			'post_parent'           => $post->post_parent,
			'post_password'         => $post->post_password,
			'post_status'           => $new_post_status,
			'post_title'            => $title,
			'post_type'             => $post->post_type,
			'post_name'             => $post->post_name,
		];

		$new_post_id = wp_insert_post( wp_slash( $new_post ), true );

		// You can hook this action to dupe that data.
		if ( $new_post_id !== 0 && ! is_wp_error( $new_post_id ) ) {
			$this->duplicate_meta_info( $new_post_id, $post );
			do_action( 'kadence_blocks_duplicate_post', $new_post_id, $post );
		}

		return $new_post_id;
	}

	/**
	 * Recursively duplicate a post and any nested kadence_query_card posts.
	 *
	 * @param WP_Post $post The post to duplicate.
	 * @return array Array of old and new post IDs.
	 */
	public function recursive_duplicate( $post ) {
		$id_mapping                  = [];
		$updated_content             = $post->post_content;
		$post_types_to_search        = [ 'kadence_query' ];
		$block_to_find_for_post_type = [
			'kadence_query' => 'kadence/query-card',
		];
		
		if ( in_array( $post->post_type, $post_types_to_search, true ) ) {
			$post_content             = $post->post_content;
			$child_block_to_duplicate = $block_to_find_for_post_type[ $post->post_type ];
			
			// Parse blocks from the content.
			$blocks = parse_blocks( $post_content );
			
			// Function to recursively search for kadence_query_card blocks.
			$find_children_to_duplicate = function ( $blocks ) use ( &$find_children_to_duplicate, $child_block_to_duplicate ) {
				$card_posts = [];
				
				foreach ( $blocks as $block ) {
					// Check if this is a kadence_query_card block.
					if ( isset( $block['blockName'] ) && $block['blockName'] === $child_block_to_duplicate ) {
						if ( isset( $block['attrs']['id'] ) ) {
							$card_posts[] = $block['attrs']['id'];
						}
					}
					
					// Recursively check inner blocks.
					if ( ! empty( $block['innerBlocks'] ) ) {
						$card_posts = array_merge( $card_posts, $find_children_to_duplicate( $block['innerBlocks'] ) );
					}
				}
				
				return $card_posts;
			};
			
			// Find all card post IDs.
			$child_post_ids = $find_children_to_duplicate( $blocks );
			
			// Duplicate each card post.
			foreach ( $child_post_ids as $child_post_id ) {
				$child_post = get_post( $child_post_id );
				if ( $child_post ) {
					$duplicated_post_id = $this->duplicate( $child_post );
					if ( $duplicated_post_id && ! is_wp_error( $duplicated_post_id ) ) {
						$id_mapping[ $child_post_id ] = $duplicated_post_id;
					}
				}
			}
			
			// Update the post content with new IDs.
			if ( ! empty( $id_mapping ) ) {
				$updated_content = $this->update_post_ids_in_content( $post_content, $id_mapping, $child_block_to_duplicate );
			}
		}
		
		return $updated_content;
	}

	/**
	 * Update post IDs in the content with their new duplicated IDs.
	 *
	 * @param string $content The post content to update.
	 * @param array  $id_mapping Array of old ID => new ID mappings.
	 * @return string Updated content.
	 */
	private function update_post_ids_in_content( $content, $id_mapping, $block_name ) {
		$blocks = parse_blocks( $content );
		
		$update_block_ids = function ( $blocks ) use ( &$update_block_ids, $id_mapping, $block_name ) {
			foreach ( $blocks as &$block ) {
				if ( isset( $block['blockName'] ) && $block['blockName'] === $block_name ) {
					if ( isset( $block['attrs']['id'] ) && isset( $id_mapping[ $block['attrs']['id'] ] ) ) {
						$block['attrs']['id'] = $id_mapping[ $block['attrs']['id'] ];
					}
				}
				
				if ( ! empty( $block['innerBlocks'] ) ) {
					$block['innerBlocks'] = $update_block_ids( $block['innerBlocks'] );
				}
			}
			return $blocks;
		};
		
		$updated_blocks = $update_block_ids( $blocks );
		return serialize_blocks( $updated_blocks );
	}

	/**
	 * Copies the meta information of a post to another post
	 *
	 * @param int     $new_id The new post ID.
	 * @param WP_Post $post   The original post object.
	 */
	public function duplicate_meta_info( $new_id, $post ) {
		$post_meta_keys = get_post_custom_keys( $post->ID );
		if ( empty( $post_meta_keys ) ) {
			return;
		}
		$meta_blacklist   = [];
		$meta_blacklist[] = '_edit_lock'; // Edit lock.
		$meta_blacklist[] = '_edit_last'; // Edit lock.
		/**
		 * Filters the meta fields exclude list when copying a post.
		 *
		 * @param array $meta_blacklist The meta fields exclude list from the options.
		 *
		 * @return array
		 */
		$meta_blacklist = apply_filters( 'kadence_blocks_duplicate_post_exclude_list', $meta_blacklist );

		$meta_keys = array_diff( $post_meta_keys, $meta_blacklist );

		/**
		 * Filters the list of meta fields names when copying a post.
		 *
		 * @param array $meta_keys The list of meta fields name, with the ones in the exclude list already removed.
		 *
		 * @return array
		 */
		$meta_keys = apply_filters( 'kadence_blocks_duplicate_meta_keys', $meta_keys );

		foreach ( $meta_keys as $meta_key ) {
			$meta_values = get_post_custom_values( $meta_key, $post->ID );
			foreach ( $meta_values as $meta_value ) {
				$meta_value = maybe_unserialize( $meta_value );
				add_post_meta( $new_id, $meta_key, wp_slash( $meta_value ) );
			}
		}
	}
}
