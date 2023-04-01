import { CollectionConfig } from "payload/types";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: "title",
      label: "Page Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
      admin: {
        elements: ["link", "ol", "ul"],
        leaves: ["bold", "italic", "underline"],
      },
      localized: true,
    },
    {
      name: "image9x16",
      label: "Featured Image 9 x 16",
      type: "upload",
      relationTo: "images",
    },
    {
      name: "image1x1",
      label: "Featured Image 1 x 1",
      type: "upload",
      relationTo: "images",
    },
  ],
};

export default Pages;
