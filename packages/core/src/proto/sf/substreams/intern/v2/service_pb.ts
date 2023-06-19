// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file sf/substreams/intern/v2/service.proto (package sf.substreams.internal.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Modules } from "../../v1/modules_pb.js";

/**
 * @generated from message sf.substreams.internal.v2.ProcessRangeRequest
 */
export class ProcessRangeRequest extends Message<ProcessRangeRequest> {
  /**
   * @generated from field: uint64 start_block_num = 1;
   */
  startBlockNum = protoInt64.zero;

  /**
   * @generated from field: uint64 stop_block_num = 2;
   */
  stopBlockNum = protoInt64.zero;

  /**
   * @generated from field: string output_module = 3;
   */
  outputModule = "";

  /**
   * @generated from field: sf.substreams.v1.Modules modules = 4;
   */
  modules?: Modules;

  constructor(data?: PartialMessage<ProcessRangeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.internal.v2.ProcessRangeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "start_block_num", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "stop_block_num", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "output_module", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "modules", kind: "message", T: Modules },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProcessRangeRequest {
    return new ProcessRangeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProcessRangeRequest {
    return new ProcessRangeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProcessRangeRequest {
    return new ProcessRangeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProcessRangeRequest | PlainMessage<ProcessRangeRequest> | undefined, b: ProcessRangeRequest | PlainMessage<ProcessRangeRequest> | undefined): boolean {
    return proto3.util.equals(ProcessRangeRequest, a, b);
  }
}

/**
 * @generated from message sf.substreams.internal.v2.ProcessRangeResponse
 */
export class ProcessRangeResponse extends Message<ProcessRangeResponse> {
  /**
   * @generated from field: string module_name = 1;
   */
  moduleName = "";

  /**
   * @generated from oneof sf.substreams.internal.v2.ProcessRangeResponse.type
   */
  type: {
    /**
     * @generated from field: sf.substreams.internal.v2.BlockRange processed_range = 2;
     */
    value: BlockRange;
    case: "processedRange";
  } | {
    /**
     * @generated from field: sf.substreams.internal.v2.ProcessedBytes processed_bytes = 3;
     */
    value: ProcessedBytes;
    case: "processedBytes";
  } | {
    /**
     * @generated from field: sf.substreams.internal.v2.Failed failed = 4;
     */
    value: Failed;
    case: "failed";
  } | {
    /**
     * @generated from field: sf.substreams.internal.v2.Completed completed = 5;
     */
    value: Completed;
    case: "completed";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ProcessRangeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.internal.v2.ProcessRangeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "module_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "processed_range", kind: "message", T: BlockRange, oneof: "type" },
    { no: 3, name: "processed_bytes", kind: "message", T: ProcessedBytes, oneof: "type" },
    { no: 4, name: "failed", kind: "message", T: Failed, oneof: "type" },
    { no: 5, name: "completed", kind: "message", T: Completed, oneof: "type" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProcessRangeResponse {
    return new ProcessRangeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProcessRangeResponse {
    return new ProcessRangeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProcessRangeResponse {
    return new ProcessRangeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProcessRangeResponse | PlainMessage<ProcessRangeResponse> | undefined, b: ProcessRangeResponse | PlainMessage<ProcessRangeResponse> | undefined): boolean {
    return proto3.util.equals(ProcessRangeResponse, a, b);
  }
}

/**
 * @generated from message sf.substreams.internal.v2.Completed
 */
export class Completed extends Message<Completed> {
  /**
   * @generated from field: repeated sf.substreams.internal.v2.BlockRange all_processed_ranges = 1;
   */
  allProcessedRanges: BlockRange[] = [];

  constructor(data?: PartialMessage<Completed>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.internal.v2.Completed";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "all_processed_ranges", kind: "message", T: BlockRange, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Completed {
    return new Completed().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Completed {
    return new Completed().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Completed {
    return new Completed().fromJsonString(jsonString, options);
  }

  static equals(a: Completed | PlainMessage<Completed> | undefined, b: Completed | PlainMessage<Completed> | undefined): boolean {
    return proto3.util.equals(Completed, a, b);
  }
}

/**
 * @generated from message sf.substreams.internal.v2.ProcessedBytes
 */
export class ProcessedBytes extends Message<ProcessedBytes> {
  /**
   * @generated from field: uint64 total_bytes_read = 1;
   */
  totalBytesRead = protoInt64.zero;

  /**
   * @generated from field: uint64 total_bytes_written = 2;
   */
  totalBytesWritten = protoInt64.zero;

  /**
   * @generated from field: uint64 bytes_read_delta = 3;
   */
  bytesReadDelta = protoInt64.zero;

  /**
   * @generated from field: uint64 bytes_written_delta = 4;
   */
  bytesWrittenDelta = protoInt64.zero;

  /**
   * @generated from field: uint64 nano_seconds_delta = 5;
   */
  nanoSecondsDelta = protoInt64.zero;

  constructor(data?: PartialMessage<ProcessedBytes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.internal.v2.ProcessedBytes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_bytes_read", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "total_bytes_written", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "bytes_read_delta", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "bytes_written_delta", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "nano_seconds_delta", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProcessedBytes {
    return new ProcessedBytes().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProcessedBytes {
    return new ProcessedBytes().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProcessedBytes {
    return new ProcessedBytes().fromJsonString(jsonString, options);
  }

  static equals(a: ProcessedBytes | PlainMessage<ProcessedBytes> | undefined, b: ProcessedBytes | PlainMessage<ProcessedBytes> | undefined): boolean {
    return proto3.util.equals(ProcessedBytes, a, b);
  }
}

/**
 * @generated from message sf.substreams.internal.v2.Failed
 */
export class Failed extends Message<Failed> {
  /**
   * @generated from field: string reason = 1;
   */
  reason = "";

  /**
   * @generated from field: repeated string logs = 2;
   */
  logs: string[] = [];

  /**
   * FailureLogsTruncated is a flag that tells you if you received all the logs or if they
   * were truncated because you logged too much (fixed limit currently is set to 128 KiB).
   *
   * @generated from field: bool logs_truncated = 3;
   */
  logsTruncated = false;

  constructor(data?: PartialMessage<Failed>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.internal.v2.Failed";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "logs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "logs_truncated", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Failed {
    return new Failed().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Failed {
    return new Failed().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Failed {
    return new Failed().fromJsonString(jsonString, options);
  }

  static equals(a: Failed | PlainMessage<Failed> | undefined, b: Failed | PlainMessage<Failed> | undefined): boolean {
    return proto3.util.equals(Failed, a, b);
  }
}

/**
 * @generated from message sf.substreams.internal.v2.BlockRange
 */
export class BlockRange extends Message<BlockRange> {
  /**
   * @generated from field: uint64 start_block = 2;
   */
  startBlock = protoInt64.zero;

  /**
   * @generated from field: uint64 end_block = 3;
   */
  endBlock = protoInt64.zero;

  constructor(data?: PartialMessage<BlockRange>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.internal.v2.BlockRange";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "start_block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "end_block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockRange {
    return new BlockRange().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockRange {
    return new BlockRange().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockRange {
    return new BlockRange().fromJsonString(jsonString, options);
  }

  static equals(a: BlockRange | PlainMessage<BlockRange> | undefined, b: BlockRange | PlainMessage<BlockRange> | undefined): boolean {
    return proto3.util.equals(BlockRange, a, b);
  }
}

