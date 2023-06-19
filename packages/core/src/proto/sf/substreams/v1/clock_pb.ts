// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file sf/substreams/v1/clock.proto (package sf.substreams.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * Clock is a pointer to a block with added timestamp
 *
 * @generated from message sf.substreams.v1.Clock
 */
export class Clock extends Message<Clock> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: uint64 number = 2;
   */
  number = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<Clock>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.v1.Clock";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Clock {
    return new Clock().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Clock {
    return new Clock().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Clock {
    return new Clock().fromJsonString(jsonString, options);
  }

  static equals(a: Clock | PlainMessage<Clock> | undefined, b: Clock | PlainMessage<Clock> | undefined): boolean {
    return proto3.util.equals(Clock, a, b);
  }
}

/**
 * BlockRef is a pointer to a block to which we don't know the timestamp
 *
 * @generated from message sf.substreams.v1.BlockRef
 */
export class BlockRef extends Message<BlockRef> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: uint64 number = 2;
   */
  number = protoInt64.zero;

  constructor(data?: PartialMessage<BlockRef>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.v1.BlockRef";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockRef {
    return new BlockRef().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockRef {
    return new BlockRef().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockRef {
    return new BlockRef().fromJsonString(jsonString, options);
  }

  static equals(a: BlockRef | PlainMessage<BlockRef> | undefined, b: BlockRef | PlainMessage<BlockRef> | undefined): boolean {
    return proto3.util.equals(BlockRef, a, b);
  }
}

