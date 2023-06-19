// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file sf/substreams/sink/kv/v1/read.proto (package sf.substreams.sink.kv.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message sf.substreams.sink.kv.v1.GetRequest
 */
export class GetRequest extends Message<GetRequest> {
  /**
   * Key to fetch
   *
   * @generated from field: string key = 1;
   */
  key = "";

  constructor(data?: PartialMessage<GetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.GetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest {
    return new GetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean {
    return proto3.util.equals(GetRequest, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.kv.v1.GetManyRequest
 */
export class GetManyRequest extends Message<GetManyRequest> {
  /**
   * Keys to fetch
   *
   * @generated from field: repeated string keys = 1;
   */
  keys: string[] = [];

  constructor(data?: PartialMessage<GetManyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.GetManyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "keys", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetManyRequest {
    return new GetManyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetManyRequest {
    return new GetManyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetManyRequest {
    return new GetManyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetManyRequest | PlainMessage<GetManyRequest> | undefined, b: GetManyRequest | PlainMessage<GetManyRequest> | undefined): boolean {
    return proto3.util.equals(GetManyRequest, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.kv.v1.GetByPrefixRequest
 */
export class GetByPrefixRequest extends Message<GetByPrefixRequest> {
  /**
   * server may impose a hard limit, trying to go above it would return grpc_error: INVALID_ARGUMENT
   *
   * @generated from field: uint64 limit = 1;
   */
  limit = protoInt64.zero;

  /**
   * requested prefix
   *
   * @generated from field: string prefix = 2;
   */
  prefix = "";

  constructor(data?: PartialMessage<GetByPrefixRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.GetByPrefixRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetByPrefixRequest {
    return new GetByPrefixRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetByPrefixRequest {
    return new GetByPrefixRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetByPrefixRequest {
    return new GetByPrefixRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetByPrefixRequest | PlainMessage<GetByPrefixRequest> | undefined, b: GetByPrefixRequest | PlainMessage<GetByPrefixRequest> | undefined): boolean {
    return proto3.util.equals(GetByPrefixRequest, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.kv.v1.ScanRequest
 */
export class ScanRequest extends Message<ScanRequest> {
  /**
   * server may impose a hard limit, trying to go above it would return grpc_error: INVALID_ARGUMENT
   *
   * @generated from field: uint64 limit = 1;
   */
  limit = protoInt64.zero;

  /**
   * scanning will start at this point, lexicographically
   *
   * @generated from field: string begin = 2;
   */
  begin = "";

  /**
   * If set, scanning will stop when it reaches this point or above, excluding this exact key
   *
   * @generated from field: optional string exclusive_end = 3;
   */
  exclusiveEnd?: string;

  constructor(data?: PartialMessage<ScanRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.ScanRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "begin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "exclusive_end", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScanRequest {
    return new ScanRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScanRequest {
    return new ScanRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScanRequest {
    return new ScanRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ScanRequest | PlainMessage<ScanRequest> | undefined, b: ScanRequest | PlainMessage<ScanRequest> | undefined): boolean {
    return proto3.util.equals(ScanRequest, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.kv.v1.GetResponse
 */
export class GetResponse extends Message<GetResponse> {
  /**
   * Value that was found for the requested key
   *
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<GetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.GetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetResponse {
    return new GetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetResponse | PlainMessage<GetResponse> | undefined, b: GetResponse | PlainMessage<GetResponse> | undefined): boolean {
    return proto3.util.equals(GetResponse, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.kv.v1.GetManyResponse
 */
export class GetManyResponse extends Message<GetManyResponse> {
  /**
   * Values that were found for the requested keys
   *
   * @generated from field: repeated bytes values = 1;
   */
  values: Uint8Array[] = [];

  constructor(data?: PartialMessage<GetManyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.GetManyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "values", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetManyResponse {
    return new GetManyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetManyResponse {
    return new GetManyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetManyResponse {
    return new GetManyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetManyResponse | PlainMessage<GetManyResponse> | undefined, b: GetManyResponse | PlainMessage<GetManyResponse> | undefined): boolean {
    return proto3.util.equals(GetManyResponse, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.kv.v1.GetByPrefixResponse
 */
export class GetByPrefixResponse extends Message<GetByPrefixResponse> {
  /**
   * KV are the key/value pairs that were found with the given prefix
   *
   * @generated from field: repeated sf.substreams.sink.kv.v1.KV key_values = 1;
   */
  keyValues: KV[] = [];

  /**
   * limit_reached is true if there is at least ONE MORE result than the requested limit
   *
   * @generated from field: bool limit_reached = 2;
   */
  limitReached = false;

  constructor(data?: PartialMessage<GetByPrefixResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.GetByPrefixResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key_values", kind: "message", T: KV, repeated: true },
    { no: 2, name: "limit_reached", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetByPrefixResponse {
    return new GetByPrefixResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetByPrefixResponse {
    return new GetByPrefixResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetByPrefixResponse {
    return new GetByPrefixResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetByPrefixResponse | PlainMessage<GetByPrefixResponse> | undefined, b: GetByPrefixResponse | PlainMessage<GetByPrefixResponse> | undefined): boolean {
    return proto3.util.equals(GetByPrefixResponse, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.kv.v1.ScanResponse
 */
export class ScanResponse extends Message<ScanResponse> {
  /**
   * KV are the key/value pairs that were found during scan
   *
   * @generated from field: repeated sf.substreams.sink.kv.v1.KV key_values = 1;
   */
  keyValues: KV[] = [];

  /**
   * limit_reached is true if there is at least ONE MORE result than the requested limit
   *
   * @generated from field: bool limit_reached = 2;
   */
  limitReached = false;

  constructor(data?: PartialMessage<ScanResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.ScanResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key_values", kind: "message", T: KV, repeated: true },
    { no: 2, name: "limit_reached", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScanResponse {
    return new ScanResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScanResponse {
    return new ScanResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScanResponse {
    return new ScanResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ScanResponse | PlainMessage<ScanResponse> | undefined, b: ScanResponse | PlainMessage<ScanResponse> | undefined): boolean {
    return proto3.util.equals(ScanResponse, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.kv.v1.KV
 */
export class KV extends Message<KV> {
  /**
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * @generated from field: bytes value = 2;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<KV>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.KV";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KV {
    return new KV().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KV {
    return new KV().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KV {
    return new KV().fromJsonString(jsonString, options);
  }

  static equals(a: KV | PlainMessage<KV> | undefined, b: KV | PlainMessage<KV> | undefined): boolean {
    return proto3.util.equals(KV, a, b);
  }
}

