import { register, hostCall } from "wapc-guest-as";
import { Decoder, Encoder, Sizer, Value } from "as-msgpack";

//// Scalars

//// Enumerations

//// Args

export class Host {
  binding: string;

  constructor(binding: string) {
    this.binding = binding;
  }

  newGuid(request: GeneratorRequest): GeneratorResult {
    const payload = hostCall(
      this.binding,
      "wascc:extras",
      "RequestGuid",
      request.toBuffer()
    );
    const decoder = new Decoder(payload);
    const ret = GeneratorResult.decode(decoder);
    return ret;
  }

  newRandom(request: GeneratorRequest): GeneratorResult {
    const payload = hostCall(
      this.binding,
      "wascc:extras",
      "RequestRandom",
      request.toBuffer()
    );
    const decoder = new Decoder(payload);
    const ret = GeneratorResult.decode(decoder);
    return ret;
  }

  newSequence(request: GeneratorRequest): GeneratorResult {
    const payload = hostCall(
      this.binding,
      "wascc:extras",
      "RequestSequence",
      request.toBuffer()
    );
    const decoder = new Decoder(payload);
    const ret = GeneratorResult.decode(decoder);
    return ret;
  }
}

export class Handlers {
  static newGuid(
    handler: (request: GeneratorRequest) => GeneratorResult
  ): void {
    newGuidHandler = handler;
    register("RequestGuid", newGuidWrapper);
  }

  static newRandom(
    handler: (request: GeneratorRequest) => GeneratorResult
  ): void {
    newRandomHandler = handler;
    register("RequestRandom", newRandomWrapper);
  }

  static newSequence(
    handler: (request: GeneratorRequest) => GeneratorResult
  ): void {
    newSequenceHandler = handler;
    register("RequestSequence", newSequenceWrapper);
  }
}

//// Interface

var newGuidHandler: (request: GeneratorRequest) => GeneratorResult;
function newGuidWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const request = new GeneratorRequest();
  request.decode(decoder);
  const response = newGuidHandler(request);

  const sizer = new Sizer();
  response.size(sizer);
  const ua = new ArrayBuffer(sizer.length);
  const encoder = new Encoder(ua);
  response.encode(encoder);
  return ua;
}
var newRandomHandler: (request: GeneratorRequest) => GeneratorResult;
function newRandomWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const request = new GeneratorRequest();
  request.decode(decoder);
  const response = newRandomHandler(request);

  const sizer = new Sizer();
  response.size(sizer);
  const ua = new ArrayBuffer(sizer.length);
  const encoder = new Encoder(ua);
  response.encode(encoder);
  return ua;
}
var newSequenceHandler: (request: GeneratorRequest) => GeneratorResult;
function newSequenceWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const request = new GeneratorRequest();
  request.decode(decoder);
  const response = newSequenceHandler(request);

  const sizer = new Sizer();
  response.size(sizer);
  const ua = new ArrayBuffer(sizer.length);
  const encoder = new Encoder(ua);
  response.encode(encoder);
  return ua;
}

//// Types

// Used for value generation
export class GeneratorRequest {
  // The request is for a guid
  guid: bool;

  // The request is for a sequence
  sequence: bool;

  // The request is for a random number
  random: bool;

  // Minimum value
  min: u32;

  // Maximum value
  max: u32;

  constructor() {
    this.guid = false;
    this.sequence = false;
    this.random = false;
    this.min = 0;
    this.max = 0;
  }

  static decodeNullable(decoder: Decoder): GeneratorRequest | null {
    if (decoder.isNextNil()) return null;
    return GeneratorRequest.decode(decoder);
  }

  static decode(decoder: Decoder): GeneratorRequest {
    const o = new GeneratorRequest();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "guid") {
        this.guid = decoder.readBool();
      } else if (field == "sequence") {
        this.sequence = decoder.readBool();
      } else if (field == "random") {
        this.random = decoder.readBool();
      } else if (field == "min") {
        this.min = decoder.readUInt32();
      } else if (field == "max") {
        this.max = decoder.readUInt32();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(5);
    sizer.writeString("guid");
    sizer.writeBool(this.guid);
    sizer.writeString("sequence");
    sizer.writeBool(this.sequence);
    sizer.writeString("random");
    sizer.writeBool(this.random);
    sizer.writeString("min");
    sizer.writeUInt32(this.min);
    sizer.writeString("max");
    sizer.writeUInt32(this.max);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(5);
    encoder.writeString("guid");
    encoder.writeBool(this.guid);
    encoder.writeString("sequence");
    encoder.writeBool(this.sequence);
    encoder.writeString("random");
    encoder.writeBool(this.random);
    encoder.writeString("min");
    encoder.writeUInt32(this.min);
    encoder.writeString("max");
    encoder.writeUInt32(this.max);
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

export class GeneratorRequestBuilder {
  instance: GeneratorRequest;

  constructor() {
    this.instance = new GeneratorRequest();
  }

  withGuid(guid: bool): GeneratorRequestBuilder {
    this.instance.guid = guid;
    return this;
  }

  withSequence(sequence: bool): GeneratorRequestBuilder {
    this.instance.sequence = sequence;
    return this;
  }

  withRandom(random: bool): GeneratorRequestBuilder {
    this.instance.random = random;
    return this;
  }

  withMin(min: u32): GeneratorRequestBuilder {
    this.instance.min = min;
    return this;
  }

  withMax(max: u32): GeneratorRequestBuilder {
    this.instance.max = max;
    return this;
  }

  build(): GeneratorRequest {
    return this.instance;
  }
}
