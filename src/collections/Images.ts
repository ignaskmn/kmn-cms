import { CollectionConfig } from "payload/types";
import path from "path";

export type ImagesType = {
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

const Images: CollectionConfig = {
  slug: "images",
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  admin: {
    useAsTitle: "filename",
    group: "Uploads",
  },
  upload: {
    adminThumbnail: "thumbnail",
    staticDir: path.resolve(__dirname, "../../uploads/images"),
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

export default Images;
