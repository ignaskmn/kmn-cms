import { CollectionConfig } from "payload/types";

const Audio: CollectionConfig = {
  slug: "audio",
  labels: { singular: "Audio Series", plural: "Audio Series" },
  access: {
    read: (): boolean => true, // Everyone can read Audio
  },
  admin: {
    useAsTitle: "title",
    group: "Media",
  },
  fields: [
    {
      name: "title",
      label: { en: "Audio series title", lt: "Įrašų ciklo pavadinimas" },
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "recordings",
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return (
              data?.recTitle || `Recording ${String(index).padStart(2, "0")}`
            );
          },
        },
      },
      fields: [
        {
          name: "recording",
          type: "upload",
          relationTo: "recordings",
          required: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "images",
          required: true,
        },

        {
          name: "recTitle",
          label: { en: "Recording title", lt: "Įrašo pavadinimas" },
          type: "text",
          localized: true,
        },
        {
          name: "recHost",
          label: { en: "Host information", lt: "Informacija apie vedėją" },
          type: "text",
          localized: true,
        },
        {
          name: "date",
          label: { en: "Recording Date", lt: "Įrašo data" },
          type: "date",
          admin: {
            date: {
              pickerAppearance: "dayOnly",
            },
          },
        },
        {
          type: "row",
          fields: [
            {
              name: "txt",
              label: { en: "Text color #", lt: "Teksto spalva" },
              type: "text",
            },
            {
              name: "bg",
              label: { en: "Background color #", lt: "Fono spalva #" },
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};

export default Audio;
