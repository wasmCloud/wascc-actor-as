import { register, hostCall } from "wapc-guest-as";
import { Decoder, Encoder, Sizer, Value } from "as-msgpack";

//// Scalars

//// Enumerations

//// Args

class CreateContainerArgs {
  id: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "id") {
        this.id = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("id");
    sizer.writeString(this.id);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("id");
    encoder.writeString(this.id);
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

class GetObjectInfoArgs {
  id: string;
  container: string;
  byteSize: u64;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "id") {
        this.id = decoder.readString();
      } else if (field == "container") {
        this.container = decoder.readString();
      } else if (field == "byteSize") {
        this.byteSize = decoder.readUInt64();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("id");
    sizer.writeString(this.id);
    sizer.writeString("container");
    sizer.writeString(this.container);
    sizer.writeString("byteSize");
    sizer.writeUInt64(this.byteSize);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("id");
    encoder.writeString(this.id);
    encoder.writeString("container");
    encoder.writeString(this.container);
    encoder.writeString("byteSize");
    encoder.writeUInt64(this.byteSize);
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

class ListObjectsArgs {
  id: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "id") {
        this.id = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("id");
    sizer.writeString(this.id);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("id");
    encoder.writeString(this.id);
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

class ReceiveChunkArgs {
  sequenceNo: u64;
  container: string;
  id: string;
  totalBytes: u64;
  chunkSize: u64;
  chunkBytes: ArrayBuffer;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "sequenceNo") {
        this.sequenceNo = decoder.readUInt64();
      } else if (field == "container") {
        this.container = decoder.readString();
      } else if (field == "id") {
        this.id = decoder.readString();
      } else if (field == "totalBytes") {
        this.totalBytes = decoder.readUInt64();
      } else if (field == "chunkSize") {
        this.chunkSize = decoder.readUInt64();
      } else if (field == "chunkBytes") {
        this.chunkBytes = decoder.readByteArray();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(6);
    sizer.writeString("sequenceNo");
    sizer.writeUInt64(this.sequenceNo);
    sizer.writeString("container");
    sizer.writeString(this.container);
    sizer.writeString("id");
    sizer.writeString(this.id);
    sizer.writeString("totalBytes");
    sizer.writeUInt64(this.totalBytes);
    sizer.writeString("chunkSize");
    sizer.writeUInt64(this.chunkSize);
    sizer.writeString("chunkBytes");
    sizer.writeByteArray(this.chunkBytes);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(6);
    encoder.writeString("sequenceNo");
    encoder.writeUInt64(this.sequenceNo);
    encoder.writeString("container");
    encoder.writeString(this.container);
    encoder.writeString("id");
    encoder.writeString(this.id);
    encoder.writeString("totalBytes");
    encoder.writeUInt64(this.totalBytes);
    encoder.writeString("chunkSize");
    encoder.writeUInt64(this.chunkSize);
    encoder.writeString("chunkBytes");
    encoder.writeByteArray(this.chunkBytes);
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

class RemoveContainerArgs {
  id: string;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "id") {
        this.id = decoder.readString();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("id");
    sizer.writeString(this.id);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("id");
    encoder.writeString(this.id);
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

class RemoveObjectArgs {
  id: string;
  container: string;
  byteSize: u64;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "id") {
        this.id = decoder.readString();
      } else if (field == "container") {
        this.container = decoder.readString();
      } else if (field == "byteSize") {
        this.byteSize = decoder.readUInt64();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("id");
    sizer.writeString(this.id);
    sizer.writeString("container");
    sizer.writeString(this.container);
    sizer.writeString("byteSize");
    sizer.writeUInt64(this.byteSize);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("id");
    encoder.writeString(this.id);
    encoder.writeString("container");
    encoder.writeString(this.container);
    encoder.writeString("byteSize");
    encoder.writeUInt64(this.byteSize);
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

class StartDownloadArgs {
  id: string;
  container: string;
  chunkSize: u64;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "id") {
        this.id = decoder.readString();
      } else if (field == "container") {
        this.container = decoder.readString();
      } else if (field == "chunkSize") {
        this.chunkSize = decoder.readUInt64();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("id");
    sizer.writeString(this.id);
    sizer.writeString("container");
    sizer.writeString(this.container);
    sizer.writeString("chunkSize");
    sizer.writeUInt64(this.chunkSize);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("id");
    encoder.writeString(this.id);
    encoder.writeString("container");
    encoder.writeString(this.container);
    encoder.writeString("chunkSize");
    encoder.writeUInt64(this.chunkSize);
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

class StartUploadArgs {
  sequenceNo: u64;
  container: string;
  id: string;
  totalBytes: u64;
  chunkSize: u64;
  chunkBytes: ArrayBuffer;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "sequenceNo") {
        this.sequenceNo = decoder.readUInt64();
      } else if (field == "container") {
        this.container = decoder.readString();
      } else if (field == "id") {
        this.id = decoder.readString();
      } else if (field == "totalBytes") {
        this.totalBytes = decoder.readUInt64();
      } else if (field == "chunkSize") {
        this.chunkSize = decoder.readUInt64();
      } else if (field == "chunkBytes") {
        this.chunkBytes = decoder.readByteArray();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(6);
    sizer.writeString("sequenceNo");
    sizer.writeUInt64(this.sequenceNo);
    sizer.writeString("container");
    sizer.writeString(this.container);
    sizer.writeString("id");
    sizer.writeString(this.id);
    sizer.writeString("totalBytes");
    sizer.writeUInt64(this.totalBytes);
    sizer.writeString("chunkSize");
    sizer.writeUInt64(this.chunkSize);
    sizer.writeString("chunkBytes");
    sizer.writeByteArray(this.chunkBytes);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(6);
    encoder.writeString("sequenceNo");
    encoder.writeUInt64(this.sequenceNo);
    encoder.writeString("container");
    encoder.writeString(this.container);
    encoder.writeString("id");
    encoder.writeString(this.id);
    encoder.writeString("totalBytes");
    encoder.writeUInt64(this.totalBytes);
    encoder.writeString("chunkSize");
    encoder.writeUInt64(this.chunkSize);
    encoder.writeString("chunkBytes");
    encoder.writeByteArray(this.chunkBytes);
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

class UploadChunkArgs {
  sequenceNo: u64;
  container: string;
  id: string;
  totalBytes: u64;
  chunkSize: u64;
  chunkBytes: ArrayBuffer;

  decode(decoder: Decoder): void {
    let numFields = decoder.readMapSize();
    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "sequenceNo") {
        this.sequenceNo = decoder.readUInt64();
      } else if (field == "container") {
        this.container = decoder.readString();
      } else if (field == "id") {
        this.id = decoder.readString();
      } else if (field == "totalBytes") {
        this.totalBytes = decoder.readUInt64();
      } else if (field == "chunkSize") {
        this.chunkSize = decoder.readUInt64();
      } else if (field == "chunkBytes") {
        this.chunkBytes = decoder.readByteArray();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(6);
    sizer.writeString("sequenceNo");
    sizer.writeUInt64(this.sequenceNo);
    sizer.writeString("container");
    sizer.writeString(this.container);
    sizer.writeString("id");
    sizer.writeString(this.id);
    sizer.writeString("totalBytes");
    sizer.writeUInt64(this.totalBytes);
    sizer.writeString("chunkSize");
    sizer.writeUInt64(this.chunkSize);
    sizer.writeString("chunkBytes");
    sizer.writeByteArray(this.chunkBytes);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(6);
    encoder.writeString("sequenceNo");
    encoder.writeUInt64(this.sequenceNo);
    encoder.writeString("container");
    encoder.writeString(this.container);
    encoder.writeString("id");
    encoder.writeString(this.id);
    encoder.writeString("totalBytes");
    encoder.writeUInt64(this.totalBytes);
    encoder.writeString("chunkSize");
    encoder.writeUInt64(this.chunkSize);
    encoder.writeString("chunkBytes");
    encoder.writeByteArray(this.chunkBytes);
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

  createContainer(id: string): void {
    const inputArgs = new CreateContainerArgs();
    inputArgs.id = id;
    const payload = hostCall(
      this.binding,
      "wascc:blobstore",
      "CreateContainer",
      inputArgs.toBuffer()
    );
  }

  getObjectInfo(id: string, container: string, byteSize: u64): void {
    const inputArgs = new GetObjectInfoArgs();
    inputArgs.id = id;
    inputArgs.container = container;
    inputArgs.byteSize = byteSize;
    const payload = hostCall(
      this.binding,
      "wascc:blobstore",
      "GetObjectInfo",
      inputArgs.toBuffer()
    );
  }

  listObjects(id: string): BlobList {
    const inputArgs = new ListObjectsArgs();
    inputArgs.id = id;
    const payload = hostCall(
      this.binding,
      "wascc:blobstore",
      "ListObjects",
      inputArgs.toBuffer()
    );
    const decoder = new Decoder(payload);
    return BlobList.decode(decoder);
  }

  receiveChunk(
    sequenceNo: u64,
    container: string,
    id: string,
    totalBytes: u64,
    chunkSize: u64,
    chunkBytes: ArrayBuffer
  ): void {
    const inputArgs = new ReceiveChunkArgs();
    inputArgs.sequenceNo = sequenceNo;
    inputArgs.container = container;
    inputArgs.id = id;
    inputArgs.totalBytes = totalBytes;
    inputArgs.chunkSize = chunkSize;
    inputArgs.chunkBytes = chunkBytes;
    const payload = hostCall(
      this.binding,
      "wascc:blobstore",
      "ReceiveChunk",
      inputArgs.toBuffer()
    );
  }

  removeContainer(id: string): void {
    const inputArgs = new RemoveContainerArgs();
    inputArgs.id = id;
    const payload = hostCall(
      this.binding,
      "wascc:blobstore",
      "RemoveContainer",
      inputArgs.toBuffer()
    );
  }

  removeObject(id: string, container: string, byteSize: u64): void {
    const inputArgs = new RemoveObjectArgs();
    inputArgs.id = id;
    inputArgs.container = container;
    inputArgs.byteSize = byteSize;
    const payload = hostCall(
      this.binding,
      "wascc:blobstore",
      "RemoveObject",
      inputArgs.toBuffer()
    );
  }

  startDownload(id: string, container: string, chunkSize: u64): void {
    const inputArgs = new StartDownloadArgs();
    inputArgs.id = id;
    inputArgs.container = container;
    inputArgs.chunkSize = chunkSize;
    const payload = hostCall(
      this.binding,
      "wascc:blobstore",
      "StartDownload",
      inputArgs.toBuffer()
    );
  }

  startUpload(
    sequenceNo: u64,
    container: string,
    id: string,
    totalBytes: u64,
    chunkSize: u64,
    chunkBytes: ArrayBuffer
  ): void {
    const inputArgs = new StartUploadArgs();
    inputArgs.sequenceNo = sequenceNo;
    inputArgs.container = container;
    inputArgs.id = id;
    inputArgs.totalBytes = totalBytes;
    inputArgs.chunkSize = chunkSize;
    inputArgs.chunkBytes = chunkBytes;
    const payload = hostCall(
      this.binding,
      "wascc:blobstore",
      "StartUpload",
      inputArgs.toBuffer()
    );
  }

  uploadChunk(
    sequenceNo: u64,
    container: string,
    id: string,
    totalBytes: u64,
    chunkSize: u64,
    chunkBytes: ArrayBuffer
  ): void {
    const inputArgs = new UploadChunkArgs();
    inputArgs.sequenceNo = sequenceNo;
    inputArgs.container = container;
    inputArgs.id = id;
    inputArgs.totalBytes = totalBytes;
    inputArgs.chunkSize = chunkSize;
    inputArgs.chunkBytes = chunkBytes;
    const payload = hostCall(
      this.binding,
      "wascc:blobstore",
      "UploadChunk",
      inputArgs.toBuffer()
    );
  }
}

export class Handlers {
  static createContainer(handler: (id: string) => void): void {
    createContainerHandler = handler;
    register("CreateContainer", createContainerWrapper);
  }

  static getObjectInfo(
    handler: (id: string, container: string, byteSize: u64) => void
  ): void {
    getObjectInfoHandler = handler;
    register("GetObjectInfo", getObjectInfoWrapper);
  }

  static listObjects(handler: (id: string) => BlobList): void {
    listObjectsHandler = handler;
    register("ListObjects", listObjectsWrapper);
  }

  static receiveChunk(
    handler: (
      sequenceNo: u64,
      container: string,
      id: string,
      totalBytes: u64,
      chunkSize: u64,
      chunkBytes: ArrayBuffer
    ) => void
  ): void {
    receiveChunkHandler = handler;
    register("ReceiveChunk", receiveChunkWrapper);
  }

  static removeContainer(handler: (id: string) => void): void {
    removeContainerHandler = handler;
    register("RemoveContainer", removeContainerWrapper);
  }

  static removeObject(
    handler: (id: string, container: string, byteSize: u64) => void
  ): void {
    removeObjectHandler = handler;
    register("RemoveObject", removeObjectWrapper);
  }

  static startDownload(
    handler: (id: string, container: string, chunkSize: u64) => void
  ): void {
    startDownloadHandler = handler;
    register("StartDownload", startDownloadWrapper);
  }

  static startUpload(
    handler: (
      sequenceNo: u64,
      container: string,
      id: string,
      totalBytes: u64,
      chunkSize: u64,
      chunkBytes: ArrayBuffer
    ) => void
  ): void {
    startUploadHandler = handler;
    register("StartUpload", startUploadWrapper);
  }

  static uploadChunk(
    handler: (
      sequenceNo: u64,
      container: string,
      id: string,
      totalBytes: u64,
      chunkSize: u64,
      chunkBytes: ArrayBuffer
    ) => void
  ): void {
    uploadChunkHandler = handler;
    register("UploadChunk", uploadChunkWrapper);
  }
}

//// Interface

var createContainerHandler: (id: string) => void;
function createContainerWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new CreateContainerArgs();
  inputArgs.decode(decoder);
  const response = createContainerHandler(inputArgs.id);
  return new ArrayBuffer(0);
}
var getObjectInfoHandler: (
  id: string,
  container: string,
  byteSize: u64
) => void;
function getObjectInfoWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new GetObjectInfoArgs();
  inputArgs.decode(decoder);
  const response = getObjectInfoHandler(
    inputArgs.id,
    inputArgs.container,
    inputArgs.byteSize
  );
  return new ArrayBuffer(0);
}
var listObjectsHandler: (id: string) => BlobList;
function listObjectsWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new ListObjectsArgs();
  inputArgs.decode(decoder);
  const response = listObjectsHandler(inputArgs.id);
  return response.toBuffer();
}
var receiveChunkHandler: (
  sequenceNo: u64,
  container: string,
  id: string,
  totalBytes: u64,
  chunkSize: u64,
  chunkBytes: ArrayBuffer
) => void;
function receiveChunkWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new ReceiveChunkArgs();
  inputArgs.decode(decoder);
  const response = receiveChunkHandler(
    inputArgs.sequenceNo,
    inputArgs.container,
    inputArgs.id,
    inputArgs.totalBytes,
    inputArgs.chunkSize,
    inputArgs.chunkBytes
  );
  return new ArrayBuffer(0);
}
var removeContainerHandler: (id: string) => void;
function removeContainerWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new RemoveContainerArgs();
  inputArgs.decode(decoder);
  const response = removeContainerHandler(inputArgs.id);
  return new ArrayBuffer(0);
}
var removeObjectHandler: (id: string, container: string, byteSize: u64) => void;
function removeObjectWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new RemoveObjectArgs();
  inputArgs.decode(decoder);
  const response = removeObjectHandler(
    inputArgs.id,
    inputArgs.container,
    inputArgs.byteSize
  );
  return new ArrayBuffer(0);
}
var startDownloadHandler: (
  id: string,
  container: string,
  chunkSize: u64
) => void;
function startDownloadWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new StartDownloadArgs();
  inputArgs.decode(decoder);
  const response = startDownloadHandler(
    inputArgs.id,
    inputArgs.container,
    inputArgs.chunkSize
  );
  return new ArrayBuffer(0);
}
var startUploadHandler: (
  sequenceNo: u64,
  container: string,
  id: string,
  totalBytes: u64,
  chunkSize: u64,
  chunkBytes: ArrayBuffer
) => void;
function startUploadWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new StartUploadArgs();
  inputArgs.decode(decoder);
  const response = startUploadHandler(
    inputArgs.sequenceNo,
    inputArgs.container,
    inputArgs.id,
    inputArgs.totalBytes,
    inputArgs.chunkSize,
    inputArgs.chunkBytes
  );
  return new ArrayBuffer(0);
}
var uploadChunkHandler: (
  sequenceNo: u64,
  container: string,
  id: string,
  totalBytes: u64,
  chunkSize: u64,
  chunkBytes: ArrayBuffer
) => void;
function uploadChunkWrapper(payload: ArrayBuffer): ArrayBuffer {
  const decoder = new Decoder(payload);
  const inputArgs = new UploadChunkArgs();
  inputArgs.decode(decoder);
  const response = uploadChunkHandler(
    inputArgs.sequenceNo,
    inputArgs.container,
    inputArgs.id,
    inputArgs.totalBytes,
    inputArgs.chunkSize,
    inputArgs.chunkBytes
  );
  return new ArrayBuffer(0);
}

//// Types

// Information about a stored object
export class Blob {
  // The blob ID
  id: string;

  // The container ID
  container: string;

  // Total number of bytes (file size)
  byteSize: u64;

  constructor() {
    this.id = "";
    this.container = "";
    this.byteSize = 0;
  }

  static decodeNullable(decoder: Decoder): Blob | null {
    if (decoder.isNextNil()) return null;
    return Blob.decode(decoder);
  }

  static decode(decoder: Decoder): Blob {
    const o = new Blob();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "id") {
        this.id = decoder.readString();
      } else if (field == "container") {
        this.container = decoder.readString();
      } else if (field == "byteSize") {
        this.byteSize = decoder.readUInt64();
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(3);
    sizer.writeString("id");
    sizer.writeString(this.id);
    sizer.writeString("container");
    sizer.writeString(this.container);
    sizer.writeString("byteSize");
    sizer.writeUInt64(this.byteSize);
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(3);
    encoder.writeString("id");
    encoder.writeString(this.id);
    encoder.writeString("container");
    encoder.writeString(this.container);
    encoder.writeString("byteSize");
    encoder.writeUInt64(this.byteSize);
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

export class BlobBuilder {
  instance: Blob;

  constructor() {
    this.instance = new Blob();
  }

  withContainer(container: string): BlobBuilder {
    this.instance.container = container;
    return this;
  }

  withByteSize(bytesize: u64): BlobBuilder {
    this.instance.byteSize = bytesize;
    return this;
  }

  build(): Blob {
    return this.instance;
  }
}

// A list of metadata about stored objects
export class BlobList {
  blobs: Array<Blob>;

  constructor() {
    this.blobs = new Array<Blob>();
  }

  static decodeNullable(decoder: Decoder): BlobList | null {
    if (decoder.isNextNil()) return null;
    return BlobList.decode(decoder);
  }

  static decode(decoder: Decoder): BlobList {
    const o = new BlobList();
    o.decode(decoder);
    return o;
  }

  decode(decoder: Decoder): void {
    var numFields = decoder.readMapSize();

    while (numFields > 0) {
      numFields--;
      const field = decoder.readString();
      if (field == "blobs") {
        this.blobs = decoder.readArray(
          (decoder: Decoder): Blob => {
            return Blob.decode(decoder);
          }
        );
      } else {
        decoder.skip();
      }
    }
  }

  size(sizer: Sizer): void {
    sizer.writeMapSize(1);
    sizer.writeString("blobs");
    sizer.writeArray(this.blobs, (sizer: Sizer, item: Blob): void => {
      item.size(sizer);
    });
  }

  encode(encoder: Encoder): void {
    encoder.writeMapSize(1);
    encoder.writeString("blobs");
    encoder.writeArray(this.blobs, (encoder: Encoder, item: Blob): void => {
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

export class BlobListBuilder {
  instance: BlobList;

  constructor() {
    this.instance = new BlobList();
  }

  withBlobs(blobs: Array<Blob>): BlobListBuilder {
    this.instance.blobs = blobs;
    return this;
  }

  build(): BlobList {
    return this.instance;
  }
}
