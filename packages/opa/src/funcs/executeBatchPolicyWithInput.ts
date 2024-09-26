/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { OpaApiClientCore } from "../core.js";
import { encodeFormQuery, encodeJSON, encodeSimple } from "../lib/encodings.js";
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
 * Execute a policy given a batch of inputs
 */
export async function executeBatchPolicyWithInput(
  client: OpaApiClientCore,
  request: operations.ExecuteBatchPolicyWithInputRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.ExecuteBatchPolicyWithInputResponse,
    | errors.ClientError1
    | errors.BatchServerError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input = request;

  const parsed = safeParse(
    input,
    (value) =>
      operations.ExecuteBatchPolicyWithInputRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    path: encodeSimple("path", payload.path, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v1/batch/data/{path}")(pathParams);

  const query = encodeFormQuery({
    "explain": payload.explain,
    "instrument": payload.instrument,
    "metrics": payload.metrics,
    "pretty": payload.pretty,
    "provenance": payload.provenance,
    "strict-builtin-errors": payload["strict-builtin-errors"],
  });

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Encoding": encodeSimple(
      "Accept-Encoding",
      payload["Accept-Encoding"],
      { explode: false, charEncoding: "none" },
    ),
    "Content-Encoding": encodeSimple(
      "Content-Encoding",
      payload["Content-Encoding"],
      { explode: false, charEncoding: "none" },
    ),
  });

  const secConfig = await extractSecurity(client._options.bearerAuth);
  const securityInput = secConfig == null ? {} : { bearerAuth: secConfig };
  const context = {
    operationID: "executeBatchPolicyWithInput",
    oAuth2Scopes: [],
    securitySource: client._options.bearerAuth,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
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
    errorCodes: ["400", "4XX", "500", "5XX"],
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
    operations.ExecuteBatchPolicyWithInputResponse,
    | errors.ClientError1
    | errors.BatchServerError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.ExecuteBatchPolicyWithInputResponse$inboundSchema, {
      hdrs: true,
      key: "BatchSuccessfulPolicyEvaluation",
    }),
    M.json(207, operations.ExecuteBatchPolicyWithInputResponse$inboundSchema, {
      hdrs: true,
      key: "BatchMixedResults",
    }),
    M.jsonErr(400, errors.ClientError1$inboundSchema),
    M.jsonErr(500, errors.BatchServerError$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
