<?php
/**
 * @license GPL-2.0-or-later
 *
 * Modified by kadencewp on 10-January-2024 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace KadenceWP\KadenceBlocks\StellarWP\Uplink\Exceptions;

class ResourceAlreadyRegisteredException extends \Exception {
	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 *
	 * @param string $slug Resource slug.
	 */
	public function __construct( $slug ) {
		parent::__construct( sprintf( __( 'The resource "%s" is already registered.', '%TEXTDOMAIN%' ), $slug ) );
	}
}
