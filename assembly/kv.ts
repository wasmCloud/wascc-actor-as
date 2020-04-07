import { register, hostCall } from "wapc-guest-as";
import { Decoder, Encoder, Sizer, Value } from "as-msgpack";

//// Scalars

//// Enumerations

//// Args

class AtomicAddArgs {
  key: string;
  value: i32;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else if (field == "value") {
        this.value = decoder.readInt32();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(2);
    sizer.writeString("key");
    sizer.writeString(this.key);
    sizer.writeString("value");
    sizer.writeInt32(this.value);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(2);
    encoder.writeString("key");
    encoder.writeString(this.key);
    encoder.writeString("value");
    encoder.writeInt32(this.value);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class DeleteArgs {
  key: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("key");
    sizer.writeString(this.key);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("key");
    encoder.writeString(this.key);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class ExistsArgs {
  key: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("key");
    sizer.writeString(this.key);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("key");
    encoder.writeString(this.key);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class GetArgs {
  key: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("key");
    sizer.writeString(this.key);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("key");
    encoder.writeString(this.key);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class ListClearArgs {
  key: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("key");
    sizer.writeString(this.key);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("key");
    encoder.writeString(this.key);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class ListDeleteItemArgs {
  key: string;
  item: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else if (field == "item") {
        this.item = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(2);
    sizer.writeString("key");
    sizer.writeString(this.key);
    sizer.writeString("item");
    sizer.writeString(this.item);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(2);
    encoder.writeString("key");
    encoder.writeString(this.key);
    encoder.writeString("item");
    encoder.writeString(this.item);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class ListPushArgs {
  key: string;
  item: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else if (field == "item") {
        this.item = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(2);
    sizer.writeString("key");
    sizer.writeString(this.key);
    sizer.writeString("item");
    sizer.writeString(this.item);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(2);
    encoder.writeString("key");
    encoder.writeString(this.key);
    encoder.writeString("item");
    encoder.writeString(this.item);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class ListRangeArgs {
  key: string;
  start: i32;
  stop: i32;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else if (field == "start") {
        this.start = decoder.readInt32();
      } else if (field == "stop") {
        this.stop = decoder.readInt32();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("key");
    sizer.writeString(this.key);
    sizer.writeString("start");
    sizer.writeInt32(this.start);
    sizer.writeString("stop");
    sizer.writeInt32(this.stop);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("key");
    encoder.writeString(this.key);
    encoder.writeString("start");
    encoder.writeInt32(this.start);
    encoder.writeString("stop");
    encoder.writeInt32(this.stop);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class SetArgs {
  key: string;
  value: string;
  expires: i32;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else if (field == "value") {
        this.value = decoder.readString();
      } else if (field == "expires") {
        this.expires = decoder.readInt32();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("key");
    sizer.writeString(this.key);
    sizer.writeString("value");
    sizer.writeString(this.value);
    sizer.writeString("expires");
    sizer.writeInt32(this.expires);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("key");
    encoder.writeString(this.key);
    encoder.writeString("value");
    encoder.writeString(this.value);
    encoder.writeString("expires");
    encoder.writeInt32(this.expires);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class SetAddArgs {
  key: string;
  item: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else if (field == "item") {
        this.item = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(2);
    sizer.writeString("key");
    sizer.writeString(this.key);
    sizer.writeString("item");
    sizer.writeString(this.item);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(2);
    encoder.writeString("key");
    encoder.writeString(this.key);
    encoder.writeString("item");
    encoder.writeString(this.item);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class SetIntersectionArgs {
  keys: Array<string>;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "keys") {
        this.keys = decoder.readArray((decoder: Decoder): string => {
          return decoder.readString();
        });
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("keys");
    sizer.writeArray(this.keys, (sizer: Sizer, item: string): void => {
      sizer.writeString(item);
    });
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("keys");
    encoder.writeArray(this.keys, (encoder: Encoder, item: string): void => {
      encoder.writeString(item);
    });
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class SetQueryArgs {
  key: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("key");
    sizer.writeString(this.key);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("key");
    encoder.writeString(this.key);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class SetRemoveArgs {
  key: string;
  item: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else if (field == "item") {
        this.item = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(2);
    sizer.writeString("key");
    sizer.writeString(this.key);
    sizer.writeString("item");
    sizer.writeString(this.item);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(2);
    encoder.writeString("key");
    encoder.writeString(this.key);
    encoder.writeString("item");
    encoder.writeString(this.item);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

class SetUnionArgs {
  keys: Array<string>;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "keys") {
        this.keys = decoder.readArray((decoder: Decoder): string => {
          return decoder.readString();
        });
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("keys");
    sizer.writeArray(this.keys, (sizer: Sizer, item: string): void => {
      sizer.writeString(item);
    });
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("keys");
    encoder.writeArray(this.keys, (encoder: Encoder, item: string): void => {
      encoder.writeString(item);
    });
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

export class Host {
  binding: string;

  constructor(binding: string) {
    this.binding = binding;
  }

  atomicAdd(key: string, value: i32): AddResponse {
    const inputArgs = new AtomicAddArgs();
    inputArgs.key = key;
    inputArgs.value = value;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "Add",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return AddResponse.decode(decoder);
  }

  delete(key: string): DelResponse {
    const inputArgs = new DeleteArgs();
    inputArgs.key = key;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "Del",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return DelResponse.decode(decoder);
  }

  exists(key: string): GetResponse {
    const inputArgs = new ExistsArgs();
    inputArgs.key = key;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "KeyExists",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return GetResponse.decode(decoder);
  }

  get(key: string): GetResponse {
    const inputArgs = new GetArgs();
    inputArgs.key = key;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "Get",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return GetResponse.decode(decoder);
  }

  listClear(key: string): DelResponse {
    const inputArgs = new ListClearArgs();
    inputArgs.key = key;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "Clear",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return DelResponse.decode(decoder);
  }

  listDeleteItem(key: string, item: string): ListResponse {
    const inputArgs = new ListDeleteItemArgs();
    inputArgs.key = key;
    inputArgs.item = item;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "ListItemDelete",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return ListResponse.decode(decoder);
  }

  listPush(key: string, item: string): ListResponse {
    const inputArgs = new ListPushArgs();
    inputArgs.key = key;
    inputArgs.item = item;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "Push",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return ListResponse.decode(decoder);
  }

  listRange(key: string, start: i32, stop: i32): ListRangeResponse {
    const inputArgs = new ListRangeArgs();
    inputArgs.key = key;
    inputArgs.start = start;
    inputArgs.stop = stop;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "Range",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return ListRangeResponse.decode(decoder);
  }

  set(key: string, value: string, expires: i32): SetResponse {
    const inputArgs = new SetArgs();
    inputArgs.key = key;
    inputArgs.value = value;
    inputArgs.expires = expires;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "Set",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return SetResponse.decode(decoder);
  }

  setAdd(key: string, item: string): SetOperationResponse {
    const inputArgs = new SetAddArgs();
    inputArgs.key = key;
    inputArgs.item = item;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "SetAdd",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return SetOperationResponse.decode(decoder);
  }

  setIntersection(keys: Array<string>): SetQueryResponse {
    const inputArgs = new SetIntersectionArgs();
    inputArgs.keys = keys;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "SetIntersection",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return SetQueryResponse.decode(decoder);
  }

  setQuery(key: string): SetQueryResponse {
    const inputArgs = new SetQueryArgs();
    inputArgs.key = key;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "SetQuery",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return SetQueryResponse.decode(decoder);
  }

  setRemove(key: string, item: string): SetOperationResponse {
    const inputArgs = new SetRemoveArgs();
    inputArgs.key = key;
    inputArgs.item = item;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "SetRemove",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return SetOperationResponse.decode(decoder);
  }

  setUnion(keys: Array<string>): SetQueryResponse {
    const inputArgs = new SetUnionArgs();
    inputArgs.keys = keys;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "SetUnion",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return SetQueryResponse.decode(decoder);
  }
}

export class Handlers {
  static atomicAdd(handler: (key: string, value: i32) => AddResponse): void {
    atomicAddHandler = handler;
    register("Add", atomicAddWrapper);
  }

  static delete(handler: (key: string) => DelResponse): void {
    deleteHandler = handler;
    register("Del", deleteWrapper);
  }

  static exists(handler: (key: string) => GetResponse): void {
    existsHandler = handler;
    register("KeyExists", existsWrapper);
  }

  static get(handler: (key: string) => GetResponse): void {
    getHandler = handler;
    register("Get", getWrapper);
  }

  static listClear(handler: (key: string) => DelResponse): void {
    listClearHandler = handler;
    register("Clear", listClearWrapper);
  }

  static listDeleteItem(
    handler: (key: string, item: string) => ListResponse
  ): void {
    listDeleteItemHandler = handler;
    register("ListItemDelete", listDeleteItemWrapper);
  }

  static listPush(handler: (key: string, item: string) => ListResponse): void {
    listPushHandler = handler;
    register("Push", listPushWrapper);
  }

  static listRange(
    handler: (key: string, start: i32, stop: i32) => ListRangeResponse
  ): void {
    listRangeHandler = handler;
    register("Range", listRangeWrapper);
  }

  static set(
    handler: (key: string, value: string, expires: i32) => SetResponse
  ): void {
    setHandler = handler;
    register("Set", setWrapper);
  }

  static setAdd(
    handler: (key: string, item: string) => SetOperationResponse
  ): void {
    setAddHandler = handler;
    register("SetAdd", setAddWrapper);
  }

  static setIntersection(
    handler: (keys: Array<string>) => SetQueryResponse
  ): void {
    setIntersectionHandler = handler;
    register("SetIntersection", setIntersectionWrapper);
  }

  static setQuery(handler: (key: string) => SetQueryResponse): void {
    setQueryHandler = handler;
    register("SetQuery", setQueryWrapper);
  }

  static setRemove(
    handler: (key: string, item: string) => SetOperationResponse
  ): void {
    setRemoveHandler = handler;
    register("SetRemove", setRemoveWrapper);
  }

  static setUnion(handler: (keys: Array<string>) => SetQueryResponse): void {
    setUnionHandler = handler;
    register("SetUnion", setUnionWrapper);
  }
}

//// Interface

var atomicAddHandler: (key: string, value: i32) => AddResponse;
function atomicAddWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new AtomicAddArgs();
  inputArgs.decode(decoder);
  const response = atomicAddHandler(inputArgs.key, inputArgs.value);
  return response.toBuffer();
}
var deleteHandler: (key: string) => DelResponse;
function deleteWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new DeleteArgs();
  inputArgs.decode(decoder);
  const response = deleteHandler(inputArgs.key);
  return response.toBuffer();
}
var existsHandler: (key: string) => GetResponse;
function existsWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new ExistsArgs();
  inputArgs.decode(decoder);
  const response = existsHandler(inputArgs.key);
  return response.toBuffer();
}
var getHandler: (key: string) => GetResponse;
function getWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new GetArgs();
  inputArgs.decode(decoder);
  const response = getHandler(inputArgs.key);
  return response.toBuffer();
}
var listClearHandler: (key: string) => DelResponse;
function listClearWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new ListClearArgs();
  inputArgs.decode(decoder);
  const response = listClearHandler(inputArgs.key);
  return response.toBuffer();
}
var listDeleteItemHandler: (key: string, item: string) => ListResponse;
function listDeleteItemWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new ListDeleteItemArgs();
  inputArgs.decode(decoder);
  const response = listDeleteItemHandler(inputArgs.key, inputArgs.item);
  return response.toBuffer();
}
var listPushHandler: (key: string, item: string) => ListResponse;
function listPushWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new ListPushArgs();
  inputArgs.decode(decoder);
  const response = listPushHandler(inputArgs.key, inputArgs.item);
  return response.toBuffer();
}
var listRangeHandler: (key: string, start: i32, stop: i32) => ListRangeResponse;
function listRangeWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new ListRangeArgs();
  inputArgs.decode(decoder);
  const response = listRangeHandler(
    inputArgs.key,
    inputArgs.start,
    inputArgs.stop
  );
  return response.toBuffer();
}
var setHandler: (key: string, value: string, expires: i32) => SetResponse;
function setWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new SetArgs();
  inputArgs.decode(decoder);
  const response = setHandler(
    inputArgs.key,
    inputArgs.value,
    inputArgs.expires
  );
  return response.toBuffer();
}
var setAddHandler: (key: string, item: string) => SetOperationResponse;
function setAddWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new SetAddArgs();
  inputArgs.decode(decoder);
  const response = setAddHandler(inputArgs.key, inputArgs.item);
  return response.toBuffer();
}
var setIntersectionHandler: (keys: Array<string>) => SetQueryResponse;
function setIntersectionWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new SetIntersectionArgs();
  inputArgs.decode(decoder);
  const response = setIntersectionHandler(inputArgs.keys);
  return response.toBuffer();
}
var setQueryHandler: (key: string) => SetQueryResponse;
function setQueryWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new SetQueryArgs();
  inputArgs.decode(decoder);
  const response = setQueryHandler(inputArgs.key);
  return response.toBuffer();
}
var setRemoveHandler: (key: string, item: string) => SetOperationResponse;
function setRemoveWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new SetRemoveArgs();
  inputArgs.decode(decoder);
  const response = setRemoveHandler(inputArgs.key, inputArgs.item);
  return response.toBuffer();
}
var setUnionHandler: (keys: Array<string>) => SetQueryResponse;
function setUnionWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new SetUnionArgs();
  inputArgs.decode(decoder);
  const response = setUnionHandler(inputArgs.keys);
  return response.toBuffer();
}

//// Types

// Response to an atomic add
export class AddResponse {
  // The new value
  value: i32;

  constructor() {
    this.value = 0;
  }

  static decodeNullable(decoder: Decoder): AddResponse | null {
    if (decoder.isNextNil()) return null;
    return AddResponse.decode(decoder);
  }

  static decode(decoder: Decoder): AddResponse {
    const o = new AddResponse();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "value") {
        this.value = decoder.readInt32();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("value");
    sizer.writeInt32(this.value);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("value");
    encoder.writeInt32(this.value);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

export class AddResponseBuilder {
  instance: AddResponse;

  constructor() {
    this.instance = new AddResponse();
  }

  withValue(value: i32): AddResponseBuilder {
    this.instance.value = value;
    return this;
  }

  build(): AddResponse {
    return this.instance;
  }
}

// Response to a deletion
export class DelResponse {
  // The key that was deleted
  key: string;

  constructor() {
    this.key = "";
  }

  static decodeNullable(decoder: Decoder): DelResponse | null {
    if (decoder.isNextNil()) return null;
    return DelResponse.decode(decoder);
  }

  static decode(decoder: Decoder): DelResponse {
    const o = new DelResponse();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("key");
    sizer.writeString(this.key);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("key");
    encoder.writeString(this.key);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

export class DelResponseBuilder {
  instance: DelResponse;

  constructor() {
    this.instance = new DelResponse();
  }

  withKey(key: string): DelResponseBuilder {
    this.instance.key = key;
    return this;
  }

  build(): DelResponse {
    return this.instance;
  }
}

// Response to a get
export class GetResponse {
  // The requested value
  value: string;

  // Indicates whether the requested key exists
  exists: bool;

  constructor() {
    this.value = "";
    this.exists = false;
  }

  static decodeNullable(decoder: Decoder): GetResponse | null {
    if (decoder.isNextNil()) return null;
    return GetResponse.decode(decoder);
  }

  static decode(decoder: Decoder): GetResponse {
    const o = new GetResponse();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "value") {
        this.value = decoder.readString();
      } else if (field == "exists") {
        this.exists = decoder.readBool();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(2);
    sizer.writeString("value");
    sizer.writeString(this.value);
    sizer.writeString("exists");
    sizer.writeBool(this.exists);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(2);
    encoder.writeString("value");
    encoder.writeString(this.value);
    encoder.writeString("exists");
    encoder.writeBool(this.exists);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

export class GetResponseBuilder {
  instance: GetResponse;

  constructor() {
    this.instance = new GetResponse();
  }

  withValue(value: string): GetResponseBuilder {
    this.instance.value = value;
    return this;
  }

  withExists(exists: bool): GetResponseBuilder {
    this.instance.exists = exists;
    return this;
  }

  build(): GetResponse {
    return this.instance;
  }
}

// Response to a range request
export class ListRangeResponse {
  // The values in the list
  values: Array<string>;

  constructor() {
    this.values = new Array<string>();
  }

  static decodeNullable(decoder: Decoder): ListRangeResponse | null {
    if (decoder.isNextNil()) return null;
    return ListRangeResponse.decode(decoder);
  }

  static decode(decoder: Decoder): ListRangeResponse {
    const o = new ListRangeResponse();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "values") {
        this.values = decoder.readArray((decoder: Decoder): string => {
          return decoder.readString();
        });
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("values");
    sizer.writeArray(this.values, (sizer: Sizer, item: string): void => {
      sizer.writeString(item);
    });
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("values");
    encoder.writeArray(this.values, (encoder: Encoder, item: string): void => {
      encoder.writeString(item);
    });
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

export class ListRangeResponseBuilder {
  instance: ListRangeResponse;

  constructor() {
    this.instance = new ListRangeResponse();
  }

  withValues(values: Array<string>): ListRangeResponseBuilder {
    this.instance.values = values;
    return this;
  }

  build(): ListRangeResponse {
    return this.instance;
  }
}

// General-purpose response to several list operations
export class ListResponse {
  newCount: i32;

  constructor() {
    this.newCount = 0;
  }

  static decodeNullable(decoder: Decoder): ListResponse | null {
    if (decoder.isNextNil()) return null;
    return ListResponse.decode(decoder);
  }

  static decode(decoder: Decoder): ListResponse {
    const o = new ListResponse();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "newCount") {
        this.newCount = decoder.readInt32();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("newCount");
    sizer.writeInt32(this.newCount);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("newCount");
    encoder.writeInt32(this.newCount);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

export class ListResponseBuilder {
  instance: ListResponse;

  constructor() {
    this.instance = new ListResponse();
  }

  withNewCount(newcount: i32): ListResponseBuilder {
    this.instance.newCount = newcount;
    return this;
  }

  build(): ListResponse {
    return this.instance;
  }
}

// Generaal-purpose response to several set operations
export class SetOperationResponse {
  newCount: i32;

  constructor() {
    this.newCount = 0;
  }

  static decodeNullable(decoder: Decoder): SetOperationResponse | null {
    if (decoder.isNextNil()) return null;
    return SetOperationResponse.decode(decoder);
  }

  static decode(decoder: Decoder): SetOperationResponse {
    const o = new SetOperationResponse();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "newCount") {
        this.newCount = decoder.readInt32();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("newCount");
    sizer.writeInt32(this.newCount);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("newCount");
    encoder.writeInt32(this.newCount);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

export class SetOperationResponseBuilder {
  instance: SetOperationResponse;

  constructor() {
    this.instance = new SetOperationResponse();
  }

  withNewCount(newcount: i32): SetOperationResponseBuilder {
    this.instance.newCount = newcount;
    return this;
  }

  build(): SetOperationResponse {
    return this.instance;
  }
}

// Results of a set query
export class SetQueryResponse {
  values: Array<string>;

  constructor() {
    this.values = new Array<string>();
  }

  static decodeNullable(decoder: Decoder): SetQueryResponse | null {
    if (decoder.isNextNil()) return null;
    return SetQueryResponse.decode(decoder);
  }

  static decode(decoder: Decoder): SetQueryResponse {
    const o = new SetQueryResponse();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "values") {
        this.values = decoder.readArray((decoder: Decoder): string => {
          return decoder.readString();
        });
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("values");
    sizer.writeArray(this.values, (sizer: Sizer, item: string): void => {
      sizer.writeString(item);
    });
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("values");
    encoder.writeArray(this.values, (encoder: Encoder, item: string): void => {
      encoder.writeString(item);
    });
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

export class SetQueryResponseBuilder {
  instance: SetQueryResponse;

  constructor() {
    this.instance = new SetQueryResponse();
  }

  withValues(values: Array<string>): SetQueryResponseBuilder {
    this.instance.values = values;
    return this;
  }

  build(): SetQueryResponse {
    return this.instance;
  }
}

// Response to a set request
export class SetResponse {
  // The value of the response
  value: string;

  constructor() {
    this.value = "";
  }

  static decodeNullable(decoder: Decoder): SetResponse | null {
    if (decoder.isNextNil()) return null;
    return SetResponse.decode(decoder);
  }

  static decode(decoder: Decoder): SetResponse {
    const o = new SetResponse();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "value") {
        this.value = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("value");
    sizer.writeString(this.value);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("value");
    encoder.writeString(this.value);
  }

  toBuffer(): ArrayBuffer {
    let sizer = new Sizer();
    this.size(sizer);
    let buffer = new ArrayBuffer(sizer.length);
    let encoder = new Encoder(buffer);
    this.encode(encoder);
    return buffer;
  }
}

export class SetResponseBuilder {
  instance: SetResponse;

  constructor() {
    this.instance = new SetResponse();
  }

  withValue(value: string): SetResponseBuilder {
    this.instance.value = value;
    return this;
  }

  build(): SetResponse {
    return this.instance;
  }
}
