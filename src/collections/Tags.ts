import { CollectionConfig } from "payload/types";

export type Type = {
  slug: string;
  title: string;
};

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "tag",
  },
  access: {
    read: (): boolean => true, // Everyone can read Tags
  },
  fields: [
    {
      name: "tag",
      label: "Tag",
      type: "text",
    },
  ],
};

export default Tags;
