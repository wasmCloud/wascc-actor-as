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

export class Host {
  binding: String;

  constructor(binding: String) {
    this.binding = binding;
  }

  handleRequest(request: Request): Response {
    const payload = hostCall(
      this.binding,
      "wascc:httpserver",
      "handleRequest",
      request.toBuffer()
    );
    const decoder = new Decoder(payload);
    return Response.decode(decoder);
  }
}

export class Handlers {
  static handleRequest(handler: (request: Request) => Response): void {
    handleRequestHandler = handler;
    register("handleRequest", handleRequestWrapper);
  }
}

//// Mutations

var handleRequestHandler: (request: Request) => Response;
function handleRequestWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);

  const request = new Request();
  request.decode(decoder);
  const response = handleRequestHandler(request);
  return response.toBuffer();
}

//// Types

// Represents a single header.
export class Header {
  // The header name.
  name: string;

  // The header value.
  value: string;

  constructor() {
    this.name = "";
    this.value = "";
  }

  static decodeNullable(decoder: Decoder): Header | null {
    if (decoder.isNextNil()) return null;
    return Header.decode(decoder);
  }

  static decode(decoder: Decoder): Header {
    const o = new Header();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "name") {
        this.name = decoder.readString();
      } else if (field == "value") {
        this.value = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(2);
    sizer.writeString("name");
    sizer.writeString(this.name);
    sizer.writeString("value");
    sizer.writeString(this.value);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(2);
    encoder.writeString("name");
    encoder.writeString(this.name);
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

export class HeaderBuilder {
  name: string;
  value: string;

  constructor() {}

  withName(name: string): HeaderBuilder {
    this.name = name;
    return this;
  }

  withValue(value: string): HeaderBuilder {
    this.value = value;
    return this;
  }

  build(): Header {
    let header = new Header();

    header.name = this.name;
    header.value = this.value;
    return header;
  }
}

// Represents an HTTP response that the guest module would like to return in response to a request command.
export class Response {
  // The HTTP status code.
  status_code: u32;

  // The HTTP status name.
  status: string;

  // The HTTP request headers.
  header: Array<Header>;

  // The payload of the HTTP response
  body: ArrayBuffer;

  constructor() {
    this.status_code = 0;
    this.status = "";
    this.header = new Array<Header>();
    this.body = new ArrayBuffer(0);
  }

  static decodeNullable(decoder: Decoder): Response | null {
    if (decoder.isNextNil()) return null;
    return Response.decode(decoder);
  }

  static decode(decoder: Decoder): Response {
    const o = new Response();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "status_code") {
        this.status_code = decoder.readUInt32();
      } else if (field == "status") {
        this.status = decoder.readString();
      } else if (field == "header") {
        const numItems = decoder.readArraySize();
        this.header = new Array<Header>();
        for (let i: u32 = 0; i < numItems; i++) {
          this.header.push(Header.decode(decoder));
        }
      } else if (field == "body") {
        this.body = decoder.readByteArray();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(4);
    sizer.writeString("status_code");
    sizer.writeUInt32(this.status_code);
    sizer.writeString("status");
    sizer.writeString(this.status);
    sizer.writeString("header");
    sizer.writeArraySize(this.header.length);
    for (let i: i32 = 0; i < this.header.length; i++) {
      this.header[i].size(sizer);
    }
    sizer.writeString("body");
    sizer.writeByteArray(this.body);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(4);
    encoder.writeString("status_code");
    encoder.writeUInt32(this.status_code);
    encoder.writeString("status");
    encoder.writeString(this.status);
    encoder.writeString("header");
    encoder.writeArraySize(this.header.length);
    for (let i: i32 = 0; i < this.header.length; i++) {
      this.header[i].encode(encoder);
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

export class ResponseBuilder {
  status_code: u32;
  status: string;
  header: Array<Header>;
  body: ArrayBuffer;

  constructor() {}

  withStatusCode(status_code: u32): ResponseBuilder {
    this.status_code = status_code;
    return this;
  }

  withStatus(status: string): ResponseBuilder {
    this.status = status;
    return this;
  }

  withHeader(header: Array<Header>): ResponseBuilder {
    this.header = header;
    return this;
  }

  withBody(body: ArrayBuffer): ResponseBuilder {
    this.body = body;
    return this;
  }

  build(): Response {
    let response = new Response();

    response.status_code = this.status_code;
    response.status = this.status;
    response.header = this.header;
    response.body = this.body;
    return response;
  }
}

////Inputs
// Represents a single header.
export class HeaderInput {
  // The header name.
  name: string;

  // The header value.
  value: string;

  constructor() {
    this.name = "";
    this.value = "";
  }

  static decodeNullable(decoder: Decoder): HeaderInput | null {
    if (decoder.isNextNil()) return null;
    return HeaderInput.decode(decoder);
  }

  static decode(decoder: Decoder): HeaderInput {
    const o = new HeaderInput();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "name") {
        this.name = decoder.readString();
      } else if (field == "value") {
        this.value = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(2);
    sizer.writeString("name");
    sizer.writeString(this.name);
    sizer.writeString("value");
    sizer.writeString(this.value);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(2);
    encoder.writeString("name");
    encoder.writeString(this.name);
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

// Represents an HTTP request, handled by the guest module
export class Request {
  // The HTTP method.
  method: string;

  // The path.
  path: string;

  // The raw query string.
  queryString: string;

  // The HTTP request headers.
  header: Array<HeaderInput>;

  // The payload of the HTTP request
  body: ArrayBuffer;

  constructor() {
    this.method = "";
    this.path = "";
    this.queryString = "";
    this.header = new Array<HeaderInput>();
    this.body = new ArrayBuffer(0);
  }

  static decodeNullable(decoder: Decoder): Request | null {
    if (decoder.isNextNil()) return null;
    return Request.decode(decoder);
  }

  static decode(decoder: Decoder): Request {
    const o = new Request();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "method") {
        this.method = decoder.readString();
      } else if (field == "path") {
        this.path = decoder.readString();
      } else if (field == "queryString") {
        this.queryString = decoder.readString();
      } else if (field == "header") {
        const numItems = decoder.readArraySize();
        this.header = new Array<HeaderInput>();
        for (let i: u32 = 0; i < numItems; i++) {
          this.header.push(HeaderInput.decode(decoder));
        }
      } else if (field == "body") {
        this.body = decoder.readByteArray();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(5);
    sizer.writeString("method");
    sizer.writeString(this.method);
    sizer.writeString("path");
    sizer.writeString(this.path);
    sizer.writeString("queryString");
    sizer.writeString(this.queryString);
    sizer.writeString("header");
    sizer.writeArraySize(this.header.length);
    for (let i: i32 = 0; i < this.header.length; i++) {
      this.header[i].size(sizer);
    }
    sizer.writeString("body");
    sizer.writeByteArray(this.body);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(5);
    encoder.writeString("method");
    encoder.writeString(this.method);
    encoder.writeString("path");
    encoder.writeString(this.path);
    encoder.writeString("queryString");
    encoder.writeString(this.queryString);
    encoder.writeString("header");
    encoder.writeArraySize(this.header.length);
    for (let i: i32 = 0; i < this.header.length; i++) {
      this.header[i].encode(encoder);
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

////Interfaces
