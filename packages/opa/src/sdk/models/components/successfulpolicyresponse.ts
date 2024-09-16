/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  Provenance,
  Provenance$inboundSchema,
  Provenance$Outbound,
  Provenance$outboundSchema,
} from "./provenance.js";
import {
  Result,
  Result$inboundSchema,
  Result$Outbound,
  Result$outboundSchema,
} from "./result.js";

export type SuccessfulPolicyResponse = {
  /**
   * The base or virtual document referred to by the URL path. If the path is undefined, this key will be omitted.
   */
  result?: Result | undefined;
  /**
   * If query metrics are enabled, this field contains query performance metrics collected during the parse, compile, and evaluation steps.
   */
  metrics?: { [k: string]: any } | undefined;
  /**
   * If decision logging is enabled, this field contains a string that uniquely identifies the decision. The identifier will be included in the decision log event for this decision. Callers can use the identifier for correlation purposes.
   */
  decisionId?: string | undefined;
  /**
   * Provenance information can be requested on individual API calls and are returned inline with the API response. To obtain provenance information on an API call, specify the `provenance=true` query parameter when executing the API call.
   */
  provenance?: Provenance | undefined;
};

/** @internal */
export const SuccessfulPolicyResponse$inboundSchema: z.ZodType<
  SuccessfulPolicyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  result: Result$inboundSchema.optional(),
  metrics: z.record(z.any()).optional(),
  decision_id: z.string().optional(),
  provenance: Provenance$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "decision_id": "decisionId",
  });
});

/** @internal */
export type SuccessfulPolicyResponse$Outbound = {
  result?: Result$Outbound | undefined;
  metrics?: { [k: string]: any } | undefined;
  decision_id?: string | undefined;
  provenance?: Provenance$Outbound | undefined;
};

/** @internal */
export const SuccessfulPolicyResponse$outboundSchema: z.ZodType<
  SuccessfulPolicyResponse$Outbound,
  z.ZodTypeDef,
  SuccessfulPolicyResponse
> = z.object({
  result: Result$outboundSchema.optional(),
  metrics: z.record(z.any()).optional(),
  decisionId: z.string().optional(),
  provenance: Provenance$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    decisionId: "decision_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SuccessfulPolicyResponse$ {
  /** @deprecated use `SuccessfulPolicyResponse$inboundSchema` instead. */
  export const inboundSchema = SuccessfulPolicyResponse$inboundSchema;
  /** @deprecated use `SuccessfulPolicyResponse$outboundSchema` instead. */
  export const outboundSchema = SuccessfulPolicyResponse$outboundSchema;
  /** @deprecated use `SuccessfulPolicyResponse$Outbound` instead. */
  export type Outbound = SuccessfulPolicyResponse$Outbound;
}
