import { register, hostCall } from "wapc-guest-as";
import { Decoder, Encoder, Sizer, Value } from "as-msgpack";

//// Scalars

//// Enumerations

//// Args

class DeliverEventArgs {
  eventId: string;
  stream: string;
  values: Map<string, string>;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "eventId") {
        this.eventId = decoder.readString();
      } else if (field == "stream") {
        this.stream = decoder.readString();
      } else if (field == "values") {
        this.values = decoder.readMap(
          (decoder: Decoder): string => {
            return decoder.readString();
          },
          (decoder: Decoder): string => {
            return decoder.readString();
          }
        );
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("eventId");
    sizer.writeString(this.eventId);
    sizer.writeString("stream");
    sizer.writeString(this.stream);
    sizer.writeString("values");
    sizer.writeMap(
      this.values,
      (sizer: Sizer, key: string): void => {
        sizer.writeString(key);
      },
      (sizer: Sizer, value: string): void => {
        sizer.writeString(value);
      }
    );
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("eventId");
    encoder.writeString(this.eventId);
    encoder.writeString("stream");
    encoder.writeString(this.stream);
    encoder.writeString("values");
    encoder.writeMap(
      this.values,
      (encoder: Encoder, key: string): void => {
        encoder.writeString(key);
      },
      (encoder: Encoder, value: string): void => {
        encoder.writeString(value);
      }
    );
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

class QueryStreamArgs {
  streamId: string;
  range: TimeRange;
  count: u64;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "streamId") {
        this.streamId = decoder.readString();
      } else if (field == "range") {
        this.range = TimeRange.decode(decoder);
      } else if (field == "count") {
        this.count = decoder.readUInt64();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("streamId");
    sizer.writeString(this.streamId);
    sizer.writeString("range");
    this.range.size(sizer);
    sizer.writeString("count");
    sizer.writeUInt64(this.count);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("streamId");
    encoder.writeString(this.streamId);
    encoder.writeString("range");
    this.range.encode(encoder);
    encoder.writeString("count");
    encoder.writeUInt64(this.count);
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

class WriteEventArgs {
  eventId: string;
  stream: string;
  values: Map<string, string>;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "eventId") {
        this.eventId = decoder.readString();
      } else if (field == "stream") {
        this.stream = decoder.readString();
      } else if (field == "values") {
        this.values = decoder.readMap(
          (decoder: Decoder): string => {
            return decoder.readString();
          },
          (decoder: Decoder): string => {
            return decoder.readString();
          }
        );
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("eventId");
    sizer.writeString(this.eventId);
    sizer.writeString("stream");
    sizer.writeString(this.stream);
    sizer.writeString("values");
    sizer.writeMap(
      this.values,
      (sizer: Sizer, key: string): void => {
        sizer.writeString(key);
      },
      (sizer: Sizer, value: string): void => {
        sizer.writeString(value);
      }
    );
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("eventId");
    encoder.writeString(this.eventId);
    encoder.writeString("stream");
    encoder.writeString(this.stream);
    encoder.writeString("values");
    encoder.writeMap(
      this.values,
      (encoder: Encoder, key: string): void => {
        encoder.writeString(key);
      },
      (encoder: Encoder, value: string): void => {
        encoder.writeString(value);
      }
    );
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

  deliverEvent(
    eventId: string,
    stream: string,
    values: Map<string, string>
  ): void {
    const inputArgs = new DeliverEventArgs();
    inputArgs.eventId = eventId;
    inputArgs.stream = stream;
    inputArgs.values = values;
    const payload = hostCall(
      this.binding,
      "wascc:eventstreams",
      "DeliverEvent",
      inputArgs.toBuffer()
    );
  }

  queryStream(streamId: string, range: TimeRange, count: u64): StreamResults {
    const inputArgs = new QueryStreamArgs();
    inputArgs.streamId = streamId;
    inputArgs.range = range;
    inputArgs.count = count;
    const payload = hostCall(
      this.binding,
      "wascc:eventstreams",
      "QueryStream",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return StreamResults.decode(decoder);
  }

  writeEvent(
    eventId: string,
    stream: string,
    values: Map<string, string>
  ): WriteResponse {
    const inputArgs = new WriteEventArgs();
    inputArgs.eventId = eventId;
    inputArgs.stream = stream;
    inputArgs.values = values;
    const payload = hostCall(
      this.binding,
      "wascc:eventstreams",
      "WriteEvent",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return WriteResponse.decode(decoder);
  }
}

export class Handlers {
  static deliverEvent(
    handler: (
      eventId: string,
      stream: string,
      values: Map<string, string>
    ) => void
  ): void {
    deliverEventHandler = handler;
    register("DeliverEvent", deliverEventWrapper);
  }

  static queryStream(
    handler: (streamId: string, range: TimeRange, count: u64) => StreamResults
  ): void {
    queryStreamHandler = handler;
    register("QueryStream", queryStreamWrapper);
  }

  static writeEvent(
    handler: (
      eventId: string,
      stream: string,
      values: Map<string, string>
    ) => WriteResponse
  ): void {
    writeEventHandler = handler;
    register("WriteEvent", writeEventWrapper);
  }
}

//// Interface

var deliverEventHandler: (
  eventId: string,
  stream: string,
  values: Map<string, string>
) => void;
function deliverEventWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new DeliverEventArgs();
  inputArgs.decode(decoder);
  const response = deliverEventHandler(
    inputArgs.eventId,
    inputArgs.stream,
    inputArgs.values
  );
  return new ArrayBuffer(0);
}
var queryStreamHandler: (
  streamId: string,
  range: TimeRange,
  count: u64
) => StreamResults;
function queryStreamWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new QueryStreamArgs();
  inputArgs.decode(decoder);
  const response = queryStreamHandler(
    inputArgs.streamId,
    inputArgs.range,
    inputArgs.count
  );
  return response.toBuffer();
}
var writeEventHandler: (
  eventId: string,
  stream: string,
  values: Map<string, string>
) => WriteResponse;
function writeEventWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new WriteEventArgs();
  inputArgs.decode(decoder);
  const response = writeEventHandler(
    inputArgs.eventId,
    inputArgs.stream,
    inputArgs.values
  );
  return response.toBuffer();
}

//// Types

// Represents a single, immutable event
export class Event {
  // The ID of the event
  eventId: string;

  // The stream in which the event resides
  stream: string;

  // The value map for the event
  values: Map<string, string>;

  constructor() {
    this.eventId = "";
    this.stream = "";
    this.values = new Map<string, string>();
  }

  static decodeNullable(decoder: Decoder): Event | null {
    if (decoder.isNextNil()) return null;
    return Event.decode(decoder);
  }

  static decode(decoder: Decoder): Event {
    const o = new Event();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "eventId") {
        this.eventId = decoder.readString();
      } else if (field == "stream") {
        this.stream = decoder.readString();
      } else if (field == "values") {
        this.values = decoder.readMap(
          (decoder: Decoder): string => {
            return decoder.readString();
          },
          (decoder: Decoder): string => {
            return decoder.readString();
          }
        );
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("eventId");
    sizer.writeString(this.eventId);
    sizer.writeString("stream");
    sizer.writeString(this.stream);
    sizer.writeString("values");
    sizer.writeMap(
      this.values,
      (sizer: Sizer, key: string): void => {
        sizer.writeString(key);
      },
      (sizer: Sizer, value: string): void => {
        sizer.writeString(value);
      }
    );
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("eventId");
    encoder.writeString(this.eventId);
    encoder.writeString("stream");
    encoder.writeString(this.stream);
    encoder.writeString("values");
    encoder.writeMap(
      this.values,
      (encoder: Encoder, key: string): void => {
        encoder.writeString(key);
      },
      (encoder: Encoder, value: string): void => {
        encoder.writeString(value);
      }
    );
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

export class EventBuilder {
  instance: Event;

  constructor() {
    this.instance = new Event();
  }

  withEventId(eventid: string): EventBuilder {
    this.instance.eventId = eventid;
    return this;
  }

  withStream(stream: string): EventBuilder {
    this.instance.stream = stream;
    return this;
  }

  withValues(values: Map<string, string>): EventBuilder {
    this.instance.values = values;
    return this;
  }

  build(): Event {
    return this.instance;
  }
}

// The results returned from the capability provider after querying a stream
export class StreamResults {
  // The events returned from the query
  events: Array<Event>;

  constructor() {
    this.events = new Array<Event>();
  }

  static decodeNullable(decoder: Decoder): StreamResults | null {
    if (decoder.isNextNil()) return null;
    return StreamResults.decode(decoder);
  }

  static decode(decoder: Decoder): StreamResults {
    const o = new StreamResults();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "events") {
        this.events = decoder.readArray(
          (decoder: Decoder): Event => {
            return Event.decode(decoder);
          }
        );
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("events");
    sizer.writeArray(this.events, (sizer: Sizer, item: Event): void => {
      item.size(sizer);
    });
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("events");
    encoder.writeArray(this.events, (encoder: Encoder, item: Event): void => {
      item.encode(encoder);
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

export class StreamResultsBuilder {
  instance: StreamResults;

  constructor() {
    this.instance = new StreamResults();
  }

  withEvents(events: Array<Event>): StreamResultsBuilder {
    this.instance.events = events;
    return this;
  }

  build(): StreamResults {
    return this.instance;
  }
}

// Represents a time window for queries
export class TimeRange {
  // Minimum time in milliseconds since the epoch
  minTime: u64;

  // Maximum time in milliseconds since the epoch
  maxTime: u64;

  constructor() {
    this.minTime = 0;
    this.maxTime = 0;
  }

  static decodeNullable(decoder: Decoder): TimeRange | null {
    if (decoder.isNextNil()) return null;
    return TimeRange.decode(decoder);
  }

  static decode(decoder: Decoder): TimeRange {
    const o = new TimeRange();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "minTime") {
        this.minTime = decoder.readUInt64();
      } else if (field == "maxTime") {
        this.maxTime = decoder.readUInt64();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(2);
    sizer.writeString("minTime");
    sizer.writeUInt64(this.minTime);
    sizer.writeString("maxTime");
    sizer.writeUInt64(this.maxTime);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(2);
    encoder.writeString("minTime");
    encoder.writeUInt64(this.minTime);
    encoder.writeString("maxTime");
    encoder.writeUInt64(this.maxTime);
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

export class TimeRangeBuilder {
  instance: TimeRange;

  constructor() {
    this.instance = new TimeRange();
  }

  withMinTime(mintime: u64): TimeRangeBuilder {
    this.instance.minTime = mintime;
    return this;
  }

  withMaxTime(maxtime: u64): TimeRangeBuilder {
    this.instance.maxTime = maxtime;
    return this;
  }

  build(): TimeRange {
    return this.instance;
  }
}

// The results returned from the capability provider after a stream write
export class WriteResponse {
  // The ID of the event written
  eventId: string;

  constructor() {
    this.eventId = "";
  }

  static decodeNullable(decoder: Decoder): WriteResponse | null {
    if (decoder.isNextNil()) return null;
    return WriteResponse.decode(decoder);
  }

  static decode(decoder: Decoder): WriteResponse {
    const o = new WriteResponse();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "eventId") {
        this.eventId = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("eventId");
    sizer.writeString(this.eventId);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("eventId");
    encoder.writeString(this.eventId);
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

export class WriteResponseBuilder {
  instance: WriteResponse;

  constructor() {
    this.instance = new WriteResponse();
  }

  withEventId(eventid: string): WriteResponseBuilder {
    this.instance.eventId = eventid;
    return this;
  }

  build(): WriteResponse {
    return this.instance;
  }
}
