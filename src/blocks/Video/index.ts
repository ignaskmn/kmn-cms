import type { Block } from "payload/types";

export const Video: Block = {
  slug: "videoBlock",
  labels: { singular: "Video", plural: "videos" },
  fields: [
    {
      name: "youtubeId",
      type: "text",
    }
  ],
};