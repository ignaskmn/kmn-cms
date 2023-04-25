import { GlobalConfig } from "payload/types";

const Partners: GlobalConfig = {
  slug: "partners",
  label: { en: "Partners", lt: "Parteriai" },
  access: {
    read: (): boolean => true, // Everyone can read Tean
  },
  fields: [
    {
      name: "partners",
      label: { en: "Partners", lt: "Partneriai" },
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return data?.link || `Partner ${String(index).padStart(2, "0")}`;
          },
        },
      },
      fields: [
        {
          name: "link",
          label: { en: "Link", lt: "Nuoroda" },
          type: "text",
          required: true
        },
        {
          name: "image",
          label: { en: "Logo", lt: "Logotipas" },
          type: "upload",
          relationTo: "images",
          required: true
        },
      ],
    },
  ],
};

export default Partners;
