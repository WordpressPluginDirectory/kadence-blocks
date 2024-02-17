<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * Modified by kadencewp on 13-February-2024 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace KadenceWP\KadenceBlocks\Symfony\Component\HttpClient\Chunk;

/**
 * @author Nicolas Grekas <p@tchwork.com>
 *
 * @internal
 */
class InformationalChunk extends DataChunk
{
    private $status;

    public function __construct(int $statusCode, array $headers)
    {
        $this->status = [$statusCode, $headers];
    }

    /**
     * {@inheritdoc}
     */
    public function getInformationalStatus(): ?array
    {
        return $this->status;
    }
}
