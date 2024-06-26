import { GlobalConfig } from "payload/types";
import RichText from "../blocks/RichText";
import InfoDoc from "../blocks/information/InfoDoc";
import InfoCollapse from "../blocks/information/InfoCollapse";
import InfoBoxes from "../blocks/information/InfoBoxes";
import TextCollapse from "../blocks/information/TextCollapse";

const Information: GlobalConfig = {
  slug: "information",
  label: { en: "Information", lt: "Informacija" },
  access: {
    read: (): boolean => true, // Everyone can read Information
  },
  fields: [
    {
      name: "informationBlocks",
      label: { en: "Information Blocks", lt: "Informacinės Sekcijos" },
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return (
              data?.title ||
              `Information Block ${String(index).padStart(2, "0")}`
            );
          },
        },
      },
      fields: [
        {
          name: "title",
          label: {
            en: "Information Block Title",
            lt: "Informacinės Sekcijos Pavadinimas",
          },
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "layout",
          label: { en: "Layout", lt: "Išdėstymas" },
          type: "blocks",
          blocks: [InfoDoc, RichText, InfoCollapse, InfoBoxes, TextCollapse],
        },
        {
          type: "row",
          fields: [
            {
              name: "alwaysOpen",
              label: { en: "Always Open", lt: "Visada Atidaryta" },
              type: "checkbox",
            },
            {
              name: "sortByTitle",
              label: { en: "Sort By Title", lt: "Rikiuoti Pagal Pavadinimą" },
              type: "checkbox",
            }
          ]
        },

      ],
    },
  ],
};

export default Information;
