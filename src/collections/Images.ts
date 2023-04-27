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
    formatOptions: {
      format: "jpeg" || "png",
      options: {
        quality: 100,
      }
    },
    imageSizes: [
      {
        name: "thumbnail",
        width: 480,
        height: 320,
      },
      {
        name: "full",
        width: 2160,
        height: 1130,
        formatOptions: {
          format: "jpeg" || "png",
          options: {
            quality: 100,
          }
        },
      },
      {
        name: "fb",
        width: 1920,
        height: 1005,
        formatOptions: {
          format: "jpeg" || "png",
          options: {
            quality: 95,
          }
        },
      },
      {
        name: "square",
        width: 1080,
        height: 1080
      },
      {
        name: "card",
        width: 1080,
        height: 565,
        formatOptions: {
          format: "jpeg" || "png",
          options: {
            quality: 95,
          }
        },
      },
      {
        name: "fbCard",
        width: 1080,
        height: 565
      },
      {
        name: "squareCard",
        width: 720,
        height: 720
      }
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
