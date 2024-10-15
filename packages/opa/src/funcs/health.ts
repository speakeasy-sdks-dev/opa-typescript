/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { OpaApiClientCore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import * as errors from "../sdk/models/errors/index.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Verify the server is operational
 *
 * @remarks
 * The health API endpoint executes a simple built-in policy query to verify that the server is operational. Optionally it can account for bundle activation as well (useful for “ready” checks at startup).
 */
export async function health(
  client: OpaApiClientCore,
  bundles?: boolean | undefined,
  plugins?: boolean | undefined,
  excludePlugin?: Array<string> | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    operations.HealthResponse,
    | errors.UnhealthyServer
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.HealthRequest = {
    bundles: bundles,
    plugins: plugins,
    excludePlugin: excludePlugin,
  };

  const parsed = safeParse(
    input,
    (value) => operations.HealthRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/health")();

  const query = encodeFormQuery({
    "bundles": payload.bundles,
    "exclude-plugin": payload["exclude-plugin"],
    "plugins": payload.plugins,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.bearerAuth);
  const securityInput = secConfig == null ? {} : { bearerAuth: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);
  const context = {
    operationID: "health",
    oAuth2Scopes: [],
    securitySource: secConfig,
    resolvedSecurity: requestSecurity,
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "500", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.HealthResponse,
    | errors.UnhealthyServer
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.HealthResponse$inboundSchema, {
      key: "HealthyServer",
    }),
    M.jsonErr(500, errors.UnhealthyServer$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
