<?php
/**
 * @license GPL-2.0-only
 *
 * Modified by kadencewp on 09-January-2024 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */ declare(strict_types=1);

namespace KadenceWP\KadenceBlocks\StellarWP\ProphecyMonorepo\ImageDownloader\Sanitization\Contracts;

interface Sanitizer
{
	/**
	 * Sanitize a file name.
	 */
	public function __invoke(string $filename): string;
}
