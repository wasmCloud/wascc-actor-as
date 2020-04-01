import { register, hostCall, handleAbort } from "wapc-guest-as";
import { Decoder, Encoder, Sizer, Value } from "as-msgpack";

// Abort function
function abort(
  message: string | null,
  fileName: string | null,
  lineNumber: u32,
  columnNumber: u32
): void {
  handleAbort(message, fileName, lineNumber, columnNumber);
}

//// Scalars

//// Enumerations

//// Args

class SetArgs {
  key: string;
  value: string;
  expires_s: i32;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "key") {
        this.key = decoder.readString();
      } else if (field == "value") {
        this.value = decoder.readString();
      } else if (field == "expires_s") {
        this.expires_s = decoder.readInt32();
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
    sizer.writeString("expires_s");
    sizer.writeInt32(this.expires_s);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("key");
    encoder.writeString(this.key);
    encoder.writeString("value");
    encoder.writeString(this.value);
    encoder.writeString("expires_s");
    encoder.writeInt32(this.expires_s);
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
  binding: String;

  constructor(binding: String) {
    this.binding = binding;
  }

  set(key: string, value: string, expiresS: i32): SetResponse {
    const inputArgs = new SetArgs();
    inputArgs.key = key;
    inputArgs.value = value;
    inputArgs.expires_s = expiresS;
    const payload = hostCall(
      this.binding,
      "wascc:keyvalue",
      "set",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return SetResponse.decode(decoder);
  }
}

export class Handlers {
  static set(
    handler: (key: string, value: string, expires_s: i32) => SetResponse
  ): void {
    setHandler = handler;
    register("set", setWrapper);
  }
}

//// Mutations

var setHandler: (key: string, value: string, expires_s: i32) => SetResponse;
function setWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new SetArgs();
  inputArgs.decode(decoder);
  const response = setHandler(
    inputArgs.key,
    inputArgs.value,
    inputArgs.expires_s
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
  value: string;

  constructor() {}

  withValue(value: string): SetResponseBuilder {
    this.value = value;
    return this;
  }

  build(): SetResponse {
    let setresponse = new SetResponse();

    setresponse.value = this.value;
    return setresponse;
  }
}

////Inputs
////Interfaces
