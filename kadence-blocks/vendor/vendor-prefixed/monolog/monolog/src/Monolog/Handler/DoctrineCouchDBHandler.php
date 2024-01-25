<?php
/**
 * @license MIT
 *
 * Modified by kadencewp on 23-January-2024 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */ declare(strict_types=1);

/*
 * This file is part of the Monolog package.
 *
 * (c) Jordi Boggiano <j.boggiano@seld.be>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace KadenceWP\KadenceBlocks\Monolog\Handler;

use KadenceWP\KadenceBlocks\Monolog\Logger;
use KadenceWP\KadenceBlocks\Monolog\Formatter\NormalizerFormatter;
use KadenceWP\KadenceBlocks\Monolog\Formatter\FormatterInterface;
use Doctrine\CouchDB\CouchDBClient;

/**
 * CouchDB handler for Doctrine CouchDB ODM
 *
 * @author Markus Bachmann <markus.bachmann@bachi.biz>
 */
class DoctrineCouchDBHandler extends AbstractProcessingHandler
{
    /** @var CouchDBClient */
    private $client;

    public function __construct(CouchDBClient $client, $level = Logger::DEBUG, bool $bubble = true)
    {
        $this->client = $client;
        parent::__construct($level, $bubble);
    }

    /**
     * {@inheritDoc}
     */
    protected function write(array $record): void
    {
        $this->client->postDocument($record['formatted']);
    }

    protected function getDefaultFormatter(): FormatterInterface
    {
        return new NormalizerFormatter;
    }
}
