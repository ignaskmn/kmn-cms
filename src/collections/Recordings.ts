import { CollectionConfig } from "payload/types";
import path from "path";

export type RecordingsType = {
  filename: string;
};

const Recordings: CollectionConfig = {
  slug: "recordings",
  access: {
    read: (): boolean => true, // Everyone can read Recordings
  },
  admin: {
    useAsTitle: "filename",
    group: "Uploads",
  },
  upload: {
    staticDir: path.resolve(__dirname, "../../uploads/recordings"),
    mimeTypes: ["audio/mpeg"],
  },
  fields: [],
};

export default Recordings;
