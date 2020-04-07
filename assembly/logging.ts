import { register, hostCall } from "wapc-guest-as";
import { Decoder, Encoder, Sizer, Value } from "as-msgpack";

//// Scalars

//// Enumerations

//// Args

class WriteArgs {
  level: u32;
  body: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "level") {
        this.level = decoder.readUInt32();
      } else if (field == "body") {
        this.body = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(2);
    sizer.writeString("level");
    sizer.writeUInt32(this.level);
    sizer.writeString("body");
    sizer.writeString(this.body);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(2);
    encoder.writeString("level");
    encoder.writeUInt32(this.level);
    encoder.writeString("body");
    encoder.writeString(this.body);
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

  write(level: u32, body: string): void {
    const inputArgs = new WriteArgs();
    inputArgs.level = level;
    inputArgs.body = body;
    const payload = hostCall(
      this.binding,
      "wascc:logging",
      "write",
      inputArgs.toBuffer()
    );
  }
}

export class Handlers {
  static write(handler: (level: u32, body: string) => void): void {
    writeHandler = handler;
    register("write", writeWrapper);
  }
}

//// Interface

var writeHandler: (level: u32, body: string) => void;
function writeWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new WriteArgs();
  inputArgs.decode(decoder);
  const response = writeHandler(inputArgs.level, inputArgs.body);
  return new ArrayBuffer(0);
}

//// Types
