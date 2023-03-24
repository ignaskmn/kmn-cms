import { GlobalConfig } from "payload/types";
import InfoRichText from "../blocks/InfoRichText";
import InfoDocDownload from "../blocks/InfoDocDownload";
import InfoSmallCollapse from "../blocks/InfoSmallCollapse";
import InfoBoxes from "../blocks/InfoBoxes";

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
          required: true,
          localized: true,
        },
        {
          name: "layout",
          label: { en: "Layout", lt: "Išdėstymas" },
          type: "blocks",
          blocks: [InfoDocDownload, InfoRichText, InfoSmallCollapse, InfoBoxes],
        },
      ],
    },
  ],
};

export default Information;
