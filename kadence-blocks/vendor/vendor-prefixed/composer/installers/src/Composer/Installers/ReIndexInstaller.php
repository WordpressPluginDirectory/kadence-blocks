<?php
/**
 * @license MIT
 *
 * Modified by kadencewp on 23-February-2024 using {@see https://github.com/BrianHenryIE/strauss}.
 */

namespace KadenceWP\KadenceBlocks\Composer\Installers;

class ReIndexInstaller extends BaseInstaller
{
    /** @var array<string, string> */
    protected $locations = array(
        'theme'     => 'themes/{$name}/',
        'plugin'    => 'plugins/{$name}/'
    );
}
