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

  deliverMessage(message: BrokerMessage): void {
    const payload = hostCall(
      this.binding,
      "wascc:messaging",
      "DeliverMessage",
      message.toBuffer()
    );
  }

  publishMessage(message: BrokerMessage): void {
    const payload = hostCall(
      this.binding,
      "wascc:messaging",
      "Publish",
      message.toBuffer()
    );
  }

  request(request: RequestMessage): ArrayBuffer {
    const payload = hostCall(
      this.binding,
      "wascc:messaging",
      "Request",
      request.toBuffer()
    );
    const decoder = new Decoder(payload);
    const ret = decoder.readByteArray();

    return ret;
  }
}

export class Handlers {
  static deliverMessage(handler: (message: BrokerMessage) => void): void {
    deliverMessageHandler = handler;
    register("DeliverMessage", deliverMessageWrapper);
  }

  static publishMessage(handler: (message: BrokerMessage) => void): void {
    publishMessageHandler = handler;
    register("Publish", publishMessageWrapper);
  }

  static request(handler: (request: RequestMessage) => ArrayBuffer): void {
    requestHandler = handler;
    register("Request", requestWrapper);
  }
}

//// Interface

var deliverMessageHandler: (message: BrokerMessage) => void;
function deliverMessageWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const request = new BrokerMessage();
  request.decode(decoder);
  const response = deliverMessageHandler(request);
  return new ArrayBuffer(0);
}
var publishMessageHandler: (message: BrokerMessage) => void;
function publishMessageWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const request = new BrokerMessage();
  request.decode(decoder);
  const response = publishMessageHandler(request);
  return new ArrayBuffer(0);
}
var requestHandler: (request: RequestMessage) => ArrayBuffer;
function requestWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const request = new RequestMessage();
  request.decode(decoder);
  const response = requestHandler(request);

  const sizer = new Sizer();
  sizer.writeByteArray(response);
  const ua = new ArrayBuffer(sizer.length);
  const encoder = new Encoder(ua);
  encoder.writeByteArray(response);
  return ua;
}

//// Types

// A message published or received through a broker
export class BrokerMessage {
  // The subject or topic on which the message is sent
  subject: string;

  // An optional reply-to subject
  replyTo: string | null;

  // The body of the message
  body: ArrayBuffer;

  constructor() {
    this.subject = "";
    this.body = new ArrayBuffer(0);
  }

  static decodeNullable(decoder: Decoder): BrokerMessage | null {
    if (decoder.isNextNil()) return null;
    return BrokerMessage.decode(decoder);
  }

  static decode(decoder: Decoder): BrokerMessage {
    const o = new BrokerMessage();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "subject") {
        this.subject = decoder.readString();
      } else if (field == "replyTo") {
        if (decoder.isNextNil()) {
          this.replyTo = null;
        } else {
          this.replyTo = decoder.readString();
        }
      } else if (field == "body") {
        this.body = decoder.readByteArray();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("subject");
    sizer.writeString(this.subject);
    sizer.writeString("replyTo");
    if (this.replyTo === null) {
      sizer.writeNil();
    } else {
      const unboxed = this.replyTo!;
      sizer.writeString(unboxed);
    }
    sizer.writeString("body");
    sizer.writeByteArray(this.body);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("subject");
    encoder.writeString(this.subject);
    encoder.writeString("replyTo");
    if (this.replyTo === null) {
      encoder.writeNil();
    } else {
      const unboxed = this.replyTo!;
      encoder.writeString(unboxed);
    }
    encoder.writeString("body");
    encoder.writeByteArray(this.body);
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

export class BrokerMessageBuilder {
  instance: BrokerMessage;

  constructor() {
    this.instance = new BrokerMessage();
  }

  withSubject(subject: string): BrokerMessageBuilder {
    this.instance.subject = subject;
    return this;
  }

  withReplyTo(replyto: string | null): BrokerMessageBuilder {
    this.instance.replyTo = replyto;
    return this;
  }

  withBody(body: ArrayBuffer): BrokerMessageBuilder {
    this.instance.body = body;
    return this;
  }

  build(): BrokerMessage {
    return this.instance;
  }
}

// A message published in anticipation of a reply
export class RequestMessage {
  // The subject or topic on which the request is sent. Note that the reply topic generation is up to the provider
  subject: string;

  // The body of the message
  body: ArrayBuffer;

  // Timeout (in milliseconds) to await a reply
  timeout: i64;

  constructor() {
    this.subject = "";
    this.body = new ArrayBuffer(0);
    this.timeout = 0;
  }

  static decodeNullable(decoder: Decoder): RequestMessage | null {
    if (decoder.isNextNil()) return null;
    return RequestMessage.decode(decoder);
  }

  static decode(decoder: Decoder): RequestMessage {
    const o = new RequestMessage();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "subject") {
        this.subject = decoder.readString();
      } else if (field == "body") {
        this.body = decoder.readByteArray();
      } else if (field == "timeout") {
        this.timeout = decoder.readInt64();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("subject");
    sizer.writeString(this.subject);
    sizer.writeString("body");
    sizer.writeByteArray(this.body);
    sizer.writeString("timeout");
    sizer.writeInt64(this.timeout);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("subject");
    encoder.writeString(this.subject);
    encoder.writeString("body");
    encoder.writeByteArray(this.body);
    encoder.writeString("timeout");
    encoder.writeInt64(this.timeout);
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

export class RequestMessageBuilder {
  instance: RequestMessage;

  constructor() {
    this.instance = new RequestMessage();
  }

  withSubject(subject: string): RequestMessageBuilder {
    this.instance.subject = subject;
    return this;
  }

  withBody(body: ArrayBuffer): RequestMessageBuilder {
    this.instance.body = body;
    return this;
  }

  withTimeout(timeout: i64): RequestMessageBuilder {
    this.instance.timeout = timeout;
    return this;
  }

  build(): RequestMessage {
    return this.instance;
  }
}
