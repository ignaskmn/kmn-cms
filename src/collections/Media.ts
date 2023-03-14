import { CollectionConfig } from "payload/types";
import path from "path";

export type MediaType = {
  filename: string;
  width: number;
  height: number;
  alt: string;
  sizes: {
    thumbnail: {
      string: string;
      width: number;
      height: number;
    };
  };
};

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  admin: {
    useAsTitle: "filename",
    group: "Content",
  },
  upload: {
    adminThumbnail: "thumbnail",
    staticDir: path.resolve(__dirname, "../../media"),
    mimeTypes: ["image/png", "image/jpeg"],

    imageSizes: [
      {
        name: "thumbnail",
        width: 480,
        height: 320,
      },
    ],
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
    },
  ],
};

export default Media;
