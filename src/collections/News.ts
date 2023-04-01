import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";

const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: "slug",
      label: { en: "Slug", lt: "Nuoroda" },
      type: "text",
      unique: true,
      localized: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Main",
          fields: [
            {
              name: "title",
              label: { en: "News Title", lt: "Naujienos Pavadinimas" },
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
              required: true,
              relationTo: "images",
            },
            {
              name: "image1x1",
              label: "Featured Image 1 x 1",
              type: "upload",
              required: true,
              relationTo: "images",
            },
          ],
        },
        {
          label: "Tags",
          fields: [
            {
              name: "tags",
              label: "Tags",
              type: "relationship",
              hasMany: true,
              relationTo: "tags",
            },
          ],
        },
      ],
    },
  ],
};

export default News;
