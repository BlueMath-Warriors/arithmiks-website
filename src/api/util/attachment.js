const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;
const MAX_FILENAME_LENGTH = 120;

// Allowed types: extension -> MIME types browsers send, plus the leading bytes
// every real file of that type starts with (the extension and MIME type both
// come from the client, so the content is what is actually trusted).
const PDF_MAGIC = Buffer.from("%PDF");
const ZIP_MAGIC = Buffer.from([0x50, 0x4b, 0x03, 0x04]);
const OLE_MAGIC = Buffer.from([0xd0, 0xcf, 0x11, 0xe0]);

const ALLOWED_TYPES = {
  pdf: { mimeTypes: ["application/pdf"], magic: PDF_MAGIC },
  doc: { mimeTypes: ["application/msword"], magic: OLE_MAGIC },
  docx: {
    mimeTypes: ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
    magic: ZIP_MAGIC,
  },
  ppt: { mimeTypes: ["application/vnd.ms-powerpoint"], magic: OLE_MAGIC },
  pptx: {
    mimeTypes: ["application/vnd.openxmlformats-officedocument.presentationml.presentation"],
    magic: ZIP_MAGIC,
  },
};

const extensionOf = (filename) => (filename.split(".").pop() || "").toLowerCase();

/** Strips path parts and anything outside a safe filename alphabet. */
const safeFilename = (filename) => {
  const base = filename.split(/[\\/]/).pop() || "attachment";
  const cleaned = base.replace(/[^\w.\- ()]/g, "_").slice(-MAX_FILENAME_LENGTH);
  return cleaned || "attachment";
};

/**
 * Checks an uploaded file (a multer memory file) and returns what to attach.
 *
 * @param {{ originalname: string; mimetype: string; size: number; buffer: Buffer }} file
 * @returns {{ error: string } | { filename: string; type: string; content: string }}
 */
const prepareAttachment = (file) => {
  const extension = extensionOf(file.originalname);
  const allowed = ALLOWED_TYPES[extension];
  if (!allowed) return { error: "Attachment must be a PDF, DOC, DOCX, PPT or PPTX file." };
  if (file.size > MAX_ATTACHMENT_BYTES) return { error: "Attachment is over 10 MB." };
  if (!allowed.mimeTypes.includes(file.mimetype)) {
    return { error: "Attachment type does not match its extension." };
  }
  if (!file.buffer.subarray(0, allowed.magic.length).equals(allowed.magic)) {
    return { error: "Attachment content does not match its file type." };
  }
  return {
    filename: safeFilename(file.originalname),
    type: file.mimetype,
    content: file.buffer.toString("base64"),
  };
};

export { prepareAttachment, MAX_ATTACHMENT_BYTES };
