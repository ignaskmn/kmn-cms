import { CollectionConfig } from "payload/types";
import path from "path";

export type DocumentsType = {
  filename: string;
};

const Documents: CollectionConfig = {
  slug: "documents",
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  admin: {
    useAsTitle: "filename",
    group: "Uploads",
  },
  upload: {
    staticDir: path.resolve(__dirname, "../../uploads/documents"),
    mimeTypes: ["application/pdf", "application/*"],
  },
  fields: [],
};

export default Documents;
