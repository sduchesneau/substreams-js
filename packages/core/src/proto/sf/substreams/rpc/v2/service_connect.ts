// @generated by protoc-gen-connect-es v0.9.1 with parameter "target=ts"
// @generated from file sf/substreams/rpc/v2/service.proto (package sf.substreams.rpc.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Request, Response } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service sf.substreams.rpc.v2.Stream
 */
export const Stream = {
  typeName: "sf.substreams.rpc.v2.Stream",
  methods: {
    /**
     * @generated from rpc sf.substreams.rpc.v2.Stream.Blocks
     */
    blocks: {
      name: "Blocks",
      I: Request,
      O: Response,
      kind: MethodKind.ServerStreaming,
    },
  }
} as const;

