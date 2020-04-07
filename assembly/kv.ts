import { register, hostCall } from "wapc-guest-as";
import { Decoder, Encoder, Sizer, Value } from "as-msgpack";

//// Scalars

//// Enumerations

//// Args

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

export class Host {
  binding: string;

  constructor(binding: string) {
    this.binding = binding;
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
}

export class Handlers {
  static set(
    handler: (key: string, value: string, expires: i32) => SetResponse
  ): void {
    setHandler = handler;
    register("Set", setWrapper);
  }
}

//// Interface

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

//// Types

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
