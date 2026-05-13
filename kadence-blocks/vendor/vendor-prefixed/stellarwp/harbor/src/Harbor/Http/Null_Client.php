<?php declare( strict_types=1 );

namespace KadenceWP\KadenceBlocks\LiquidWeb\Harbor\Http;

use KadenceWP\KadenceBlocks\Psr\Http\Client\ClientInterface;
use KadenceWP\KadenceBlocks\Psr\Http\Message\RequestInterface;
use KadenceWP\KadenceBlocks\Psr\Http\Message\ResponseInterface;
use KadenceWP\KadenceBlocks\Nyholm\Psr7\Response;
use KadenceWP\KadenceBlocks\LiquidWeb\Harbor\Portal\Error_Code;

/**
 * Null client implementation of the PSR-18 HTTP client.
 *
 * @since 1.1.0
 */
final class Null_Client implements ClientInterface {
	/**
	 * Sends a PSR-7 request and returns a PSR-7 response.
	 *
	 * @since 1.1.0
	 *
	 * @param RequestInterface $request The request to send.
	 *
	 * @return ResponseInterface The response.
	 */
	public function sendRequest( RequestInterface $request ): ResponseInterface {
		return new Response(
			500,
			[],
			'',
			'1.1',
			Error_Code::API_COMMUNICATIONS_NOT_PERMITTED
		);
	}
}
