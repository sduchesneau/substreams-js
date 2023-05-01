// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file fubhy/substreams/proxy/v1/proxy.proto (package fubhy.substreams.proxy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ForkStep } from "../../../../sf/substreams/v1/substreams_pb.js";
import { Package } from "../../../../sf/substreams/v1/package_pb.js";

/**
 * @generated from message fubhy.substreams.proxy.v1.ProxyRequest
 */
export class ProxyRequest extends Message<ProxyRequest> {
  /**
   * @generated from field: int64 start_block_num = 1;
   */
  startBlockNum = protoInt64.zero;

  /**
   * @generated from field: string start_cursor = 2;
   */
  startCursor = "";

  /**
   * @generated from field: uint64 stop_block_num = 3;
   */
  stopBlockNum = protoInt64.zero;

  /**
   * @generated from field: repeated sf.substreams.v1.ForkStep fork_steps = 4;
   */
  forkSteps: ForkStep[] = [];

  /**
   * @generated from field: string irreversibility_condition = 5;
   */
  irreversibilityCondition = "";

  /**
   * @generated from field: sf.substreams.v1.Package package = 6;
   */
  package?: Package;

  /**
   * @generated from field: repeated string output_modules = 7;
   */
  outputModules: string[] = [];

  /**
   * @generated from field: repeated string debug_initial_store_snapshot_for_modules = 8;
   */
  debugInitialStoreSnapshotForModules: string[] = [];

  /**
   * @generated from field: bool production_mode = 9;
   */
  productionMode = false;

  /**
   * @generated from field: string output_module = 10;
   */
  outputModule = "";

  constructor(data?: PartialMessage<ProxyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fubhy.substreams.proxy.v1.ProxyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "start_block_num", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "start_cursor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "stop_block_num", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "fork_steps", kind: "enum", T: proto3.getEnumType(ForkStep), repeated: true },
    { no: 5, name: "irreversibility_condition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "package", kind: "message", T: Package },
    { no: 7, name: "output_modules", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "debug_initial_store_snapshot_for_modules", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "production_mode", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "output_module", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProxyRequest {
    return new ProxyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProxyRequest {
    return new ProxyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProxyRequest {
    return new ProxyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProxyRequest | PlainMessage<ProxyRequest> | undefined, b: ProxyRequest | PlainMessage<ProxyRequest> | undefined): boolean {
    return proto3.util.equals(ProxyRequest, a, b);
  }
}
