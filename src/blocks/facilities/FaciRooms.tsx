import { Block } from "payload/types";

export const FaciRooms: Block = {
  slug: "faciRooms",
  labels: { singular: "Space", plural: "Spaces" },
  imageURL: "https://tvs.kmn.lt/assets/blocks/FaciRooms.png",
  fields: [
    {
      name: "content",
      labels: { singular: "Space", plural: "Spaces" },
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return data?.label || `Space ${String(index).padStart(2, "0")}`;
          },
        },
      },
      fields: [
        {
          name: "label",
          type: "text",
          localized: true,
        },
        {
          name: "size",
          type: "number",
        },
        {
          name: "description",
          type: "richText",
          admin: {
            elements: ["ul"],
            leaves: [],
          },
          localized: true,
        },
        {
          name: "image",
          label: "Cover Image",
          type: "upload",
          relationTo: "images",
        },
        {
          type: "collapsible",
          label: "Gallery",
          fields: [
            {
              name: "galleryImages",
              label: "Gallery Images",
              type: "array",
              admin: {
                components: {
                  RowLabel: ({ index }: any) => {
                    return `Gallery Image ${String(index).padStart(2, "0")}`;
                  },
                },
              },
              fields: [
                {
                  name: "galleryImage",
                  type: "upload",
                  relationTo: "images",
                },
              ],
            },
          ],
        },
        {
          name: "image9x16",
          label: "Leagacy Image 9 x 16",
          type: "upload",
          relationTo: "images",
        },
        {
          name: "image1x1",
          label: "Legacy Image 1 x 1",
          type: "upload",
          relationTo: "images",
        },
      ],
    },
  ],
};

export default FaciRooms;
