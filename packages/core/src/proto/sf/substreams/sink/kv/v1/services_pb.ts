// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file sf/substreams/sink/kv/v1/services.proto (package sf.substreams.sink.kv.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message sf.substreams.sink.kv.v1.Config
 */
export class Config extends Message<Config> {
  /**
   * @generated from field: int64 start_block = 1;
   */
  startBlock = protoInt64.zero;

  /**
   * @generated from field: string input_module = 2;
   */
  inputModule = "";

  constructor(data?: PartialMessage<Config>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.Config";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "start_block", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "input_module", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config {
    return new Config().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config {
    return new Config().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config {
    return new Config().fromJsonString(jsonString, options);
  }

  static equals(a: Config | PlainMessage<Config> | undefined, b: Config | PlainMessage<Config> | undefined): boolean {
    return proto3.util.equals(Config, a, b);
  }
}

/**
 * This defines a KV Sink to be queried with a generic key access interface (Get, GetMany, Scan, Prefix calls).
 *
 * @generated from message sf.substreams.sink.kv.v1.GenericService
 */
export class GenericService extends Message<GenericService> {
  /**
   * @generated from field: sf.substreams.sink.kv.v1.Config sink_config = 1;
   */
  sinkConfig?: Config;

  constructor(data?: PartialMessage<GenericService>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.GenericService";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sink_config", kind: "message", T: Config },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenericService {
    return new GenericService().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenericService {
    return new GenericService().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenericService {
    return new GenericService().fromJsonString(jsonString, options);
  }

  static equals(a: GenericService | PlainMessage<GenericService> | undefined, b: GenericService | PlainMessage<GenericService> | undefined): boolean {
    return proto3.util.equals(GenericService, a, b);
  }
}

/**
 * This defines configuration to run a WASM query service on top of the KV store being sync'd.
 *
 * @generated from message sf.substreams.sink.kv.v1.WASMQueryService
 */
export class WASMQueryService extends Message<WASMQueryService> {
  /**
   * @generated from field: sf.substreams.sink.kv.v1.Config sink_config = 1;
   */
  sinkConfig?: Config;

  /**
   * wasm exports: "kv_get_batch", "kv_get", "kv_scan", "kv_prefix"
   *
   * @generated from field: bytes wasm_query_module = 5;
   */
  wasmQueryModule = new Uint8Array(0);

  /**
   * Fully qualified Protobuf Service definition name
   *
   * sf.mycustom.v1.MyService
   *
   * @generated from field: string grpc_service = 2;
   */
  grpcService = "";

  constructor(data?: PartialMessage<WASMQueryService>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.WASMQueryService";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sink_config", kind: "message", T: Config },
    { no: 5, name: "wasm_query_module", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "grpc_service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WASMQueryService {
    return new WASMQueryService().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WASMQueryService {
    return new WASMQueryService().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WASMQueryService {
    return new WASMQueryService().fromJsonString(jsonString, options);
  }

  static equals(a: WASMQueryService | PlainMessage<WASMQueryService> | undefined, b: WASMQueryService | PlainMessage<WASMQueryService> | undefined): boolean {
    return proto3.util.equals(WASMQueryService, a, b);
  }
}

