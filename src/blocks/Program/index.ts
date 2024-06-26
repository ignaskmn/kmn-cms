import { Block } from "payload/types";
import { Participants } from "../Participants";
import { EventList } from "../lists/Event";
import { LexicalRichText } from "../LexicalRichText";
import { Video } from "../Video";
import { ProgramItems } from "../ProgramItems";

export const Program: Block = {
  slug: "programBlock",
  labels: { singular: "Program", plural: "Program" },
  fields: [
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "images",
    },
    {
      name: "floatingImageNumber",
      type: "text"
    },
    {
      name: "section",
      label: "Program Section (eg. month)",
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return (
              data?.sectionTitle ||
              `Program Section ${String(index).padStart(2, "0")}`
            );
          },
        },
      },
      minRows: 1,
      fields: [
        {
          name: "sectionTitle",
          label: "Title",
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "expandOnLoad",
          type: "checkbox",
        },
        {
          name: "blocks",
          type: "blocks",
          blocks: [ Participants, EventList, LexicalRichText, Video, ProgramItems ],
        },
      ],
    },
  ],
};
