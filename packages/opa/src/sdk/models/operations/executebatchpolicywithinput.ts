/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as components from "../components/index.js";

/**
 * The batch of inputs
 */
export type ExecuteBatchPolicyWithInputRequestBody = {
  inputs: { [k: string]: components.Input };
};

export type ExecuteBatchPolicyWithInputRequest = {
  /**
   * The path separator is used to access values inside object and array documents. If the path indexes into an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.
   */
  path?: string | undefined;
  /**
   * Indicates that the request body is gzip encoded
   */
  contentEncoding?: components.GzipContentEncoding | undefined;
  /**
   * Indicates the server should respond with a gzip encoded body. The server will send the compressed response only if its length is above `server.encoding.gzip.min_length` value. See the configuration section
   */
  acceptEncoding?: components.GzipAcceptEncoding | undefined;
  /**
   * If parameter is `true`, response will formatted for humans.
   */
  pretty?: boolean | undefined;
  /**
   * If parameter is true, response will include build/version info in addition to the result.
   */
  provenance?: boolean | undefined;
  /**
   * Return query explanation in addition to result.
   */
  explain?: components.Explain | undefined;
  /**
   * Return query performance metrics in addition to result.
   */
  metrics?: boolean | undefined;
  /**
   * Instrument query evaluation and return a superset of performance metrics in addition to result.
   */
  instrument?: boolean | undefined;
  /**
   * Treat built-in function call errors as fatal and return an error immediately.
   */
  strictBuiltinErrors?: boolean | undefined;
  /**
   * The batch of inputs
   */
  requestBody: ExecuteBatchPolicyWithInputRequestBody;
};

export type ExecuteBatchPolicyWithInputResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * All batched policy executions succeeded.
   *
   * @remarks
   * The server also returns 200 if the path refers to an undefined document. In this case, responses will be empty.
   */
  batchSuccessfulPolicyEvaluation?:
    | components.BatchSuccessfulPolicyEvaluation
    | undefined;
  /**
   * Mixed success and failures.
   */
  batchMixedResults?: components.BatchMixedResults | undefined;
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const ExecuteBatchPolicyWithInputRequestBody$inboundSchema: z.ZodType<
  ExecuteBatchPolicyWithInputRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  inputs: z.record(components.Input$inboundSchema),
});

/** @internal */
export type ExecuteBatchPolicyWithInputRequestBody$Outbound = {
  inputs: { [k: string]: components.Input$Outbound };
};

/** @internal */
export const ExecuteBatchPolicyWithInputRequestBody$outboundSchema: z.ZodType<
  ExecuteBatchPolicyWithInputRequestBody$Outbound,
  z.ZodTypeDef,
  ExecuteBatchPolicyWithInputRequestBody
> = z.object({
  inputs: z.record(components.Input$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecuteBatchPolicyWithInputRequestBody$ {
  /** @deprecated use `ExecuteBatchPolicyWithInputRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    ExecuteBatchPolicyWithInputRequestBody$inboundSchema;
  /** @deprecated use `ExecuteBatchPolicyWithInputRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    ExecuteBatchPolicyWithInputRequestBody$outboundSchema;
  /** @deprecated use `ExecuteBatchPolicyWithInputRequestBody$Outbound` instead. */
  export type Outbound = ExecuteBatchPolicyWithInputRequestBody$Outbound;
}

/** @internal */
export const ExecuteBatchPolicyWithInputRequest$inboundSchema: z.ZodType<
  ExecuteBatchPolicyWithInputRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  path: z.string().default(""),
  "Content-Encoding": components.GzipContentEncoding$inboundSchema.optional(),
  "Accept-Encoding": components.GzipAcceptEncoding$inboundSchema.optional(),
  pretty: z.boolean().optional(),
  provenance: z.boolean().optional(),
  explain: components.Explain$inboundSchema.optional(),
  metrics: z.boolean().optional(),
  instrument: z.boolean().optional(),
  "strict-builtin-errors": z.boolean().optional(),
  RequestBody: z.lazy(() =>
    ExecuteBatchPolicyWithInputRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "Content-Encoding": "contentEncoding",
    "Accept-Encoding": "acceptEncoding",
    "strict-builtin-errors": "strictBuiltinErrors",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type ExecuteBatchPolicyWithInputRequest$Outbound = {
  path: string;
  "Content-Encoding"?: string | undefined;
  "Accept-Encoding"?: string | undefined;
  pretty?: boolean | undefined;
  provenance?: boolean | undefined;
  explain?: string | undefined;
  metrics?: boolean | undefined;
  instrument?: boolean | undefined;
  "strict-builtin-errors"?: boolean | undefined;
  RequestBody: ExecuteBatchPolicyWithInputRequestBody$Outbound;
};

/** @internal */
export const ExecuteBatchPolicyWithInputRequest$outboundSchema: z.ZodType<
  ExecuteBatchPolicyWithInputRequest$Outbound,
  z.ZodTypeDef,
  ExecuteBatchPolicyWithInputRequest
> = z.object({
  path: z.string().default(""),
  contentEncoding: components.GzipContentEncoding$outboundSchema.optional(),
  acceptEncoding: components.GzipAcceptEncoding$outboundSchema.optional(),
  pretty: z.boolean().optional(),
  provenance: z.boolean().optional(),
  explain: components.Explain$outboundSchema.optional(),
  metrics: z.boolean().optional(),
  instrument: z.boolean().optional(),
  strictBuiltinErrors: z.boolean().optional(),
  requestBody: z.lazy(() =>
    ExecuteBatchPolicyWithInputRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    contentEncoding: "Content-Encoding",
    acceptEncoding: "Accept-Encoding",
    strictBuiltinErrors: "strict-builtin-errors",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecuteBatchPolicyWithInputRequest$ {
  /** @deprecated use `ExecuteBatchPolicyWithInputRequest$inboundSchema` instead. */
  export const inboundSchema = ExecuteBatchPolicyWithInputRequest$inboundSchema;
  /** @deprecated use `ExecuteBatchPolicyWithInputRequest$outboundSchema` instead. */
  export const outboundSchema =
    ExecuteBatchPolicyWithInputRequest$outboundSchema;
  /** @deprecated use `ExecuteBatchPolicyWithInputRequest$Outbound` instead. */
  export type Outbound = ExecuteBatchPolicyWithInputRequest$Outbound;
}

/** @internal */
export const ExecuteBatchPolicyWithInputResponse$inboundSchema: z.ZodType<
  ExecuteBatchPolicyWithInputResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  BatchSuccessfulPolicyEvaluation: components
    .BatchSuccessfulPolicyEvaluation$inboundSchema.optional(),
  BatchMixedResults: components.BatchMixedResults$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "BatchSuccessfulPolicyEvaluation": "batchSuccessfulPolicyEvaluation",
    "BatchMixedResults": "batchMixedResults",
    "Headers": "headers",
  });
});

/** @internal */
export type ExecuteBatchPolicyWithInputResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  BatchSuccessfulPolicyEvaluation?:
    | components.BatchSuccessfulPolicyEvaluation$Outbound
    | undefined;
  BatchMixedResults?: components.BatchMixedResults$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const ExecuteBatchPolicyWithInputResponse$outboundSchema: z.ZodType<
  ExecuteBatchPolicyWithInputResponse$Outbound,
  z.ZodTypeDef,
  ExecuteBatchPolicyWithInputResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  batchSuccessfulPolicyEvaluation: components
    .BatchSuccessfulPolicyEvaluation$outboundSchema.optional(),
  batchMixedResults: components.BatchMixedResults$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    batchSuccessfulPolicyEvaluation: "BatchSuccessfulPolicyEvaluation",
    batchMixedResults: "BatchMixedResults",
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecuteBatchPolicyWithInputResponse$ {
  /** @deprecated use `ExecuteBatchPolicyWithInputResponse$inboundSchema` instead. */
  export const inboundSchema =
    ExecuteBatchPolicyWithInputResponse$inboundSchema;
  /** @deprecated use `ExecuteBatchPolicyWithInputResponse$outboundSchema` instead. */
  export const outboundSchema =
    ExecuteBatchPolicyWithInputResponse$outboundSchema;
  /** @deprecated use `ExecuteBatchPolicyWithInputResponse$Outbound` instead. */
  export type Outbound = ExecuteBatchPolicyWithInputResponse$Outbound;
}
