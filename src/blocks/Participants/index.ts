import { Block } from "payload/types";

export const Participants: Block = {
  slug: "participantsBlock",
  imageURL: "https://tvs.kmn.lt/assets/blocks/participants.png",
  labels: { singular: "Participants", plural: "Participant Blocks" },
  fields: [
    {
      name: "participants",
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return (
              data?.name || `Participant ${String(index).padStart(2, "0")}`
            );
          },
        },
      },
      minRows: 1,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "subtext",
          label: "Subtext",
          type: "text",
          localized: true,
        },
        {
          name: "bio",
          type: "richText",
          admin: {
            elements: ["link", "ol", "ul"],
            leaves: ["bold", "italic", "underline"],
          },
          localized: true,
          required: true,
        },
      ],
    },
  ],
};
