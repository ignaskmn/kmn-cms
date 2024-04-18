import type { Block } from "payload/types";

export const EventList: Block = {
  slug: "eventListBlock",
  labels: { singular: "Events", plural: "Events" },
  fields: [
    {
      name: "events",
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return data?.firstName || `Event ${String(index).padStart(2, "0")}`;
          },
        },
      },
      minRows: 1,
      fields: [
        {
          name: "event",
          type: "relationship",
          relationTo: "events",
        },
      ],
    },
  ],
};
