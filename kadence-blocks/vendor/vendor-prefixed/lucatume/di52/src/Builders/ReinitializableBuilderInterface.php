<?php
/**
 * The API Kadence_Blocks_provided by a Builder that can be re-initialized.
 *
 * @package KadenceWP\KadenceBlocks\lucatume\DI52\Builders
 *
 * @license GPL-3.0
 * Modified using {@see https://github.com/BrianHenryIE/strauss}.
 */

namespace KadenceWP\KadenceBlocks\lucatume\DI52\Builders;

/**
 * Interface ReinitializableBuilderInterface
 *
 * @package KadenceWP\KadenceBlocks\lucatume\DI52\Builders
 */
interface ReinitializableBuilderInterface
{
    /**
     * Reinitialize the builder setting the after build methods and build args.
     *
     * @param array<string>|null $afterBuildMethods A set of methods to call on the object after it's built.
     * @param mixed              ...$buildArgs      A set of build arguments that will be passed to the constructor.
     *
     * @return void This method does not return any value.
     */
    public function reinit(?array $afterBuildMethods = null, ...$buildArgs);
}
