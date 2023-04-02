import { GlobalConfig } from "payload/types";

const IncomeTax: GlobalConfig = {
  slug: "income-tax",
  label: { en: "Contribute", lt: "Parama" },
  access: {
    read: (): boolean => true, // Everyone can read Tean
  },
  fields: [
    {
      name: "subtitle",
      label: { en: "Subtitle", lt: "Antraštė" },
      type: "text",
    },
    {
      name: "description",
      label: { en: "Description", lt: "Aprašymas" },
      type: "richText",
      admin: {
        elements: ["link", "ol", "ul"],
        leaves: ["bold", "italic", "underline"],
      },
    },
  ],
};

export default IncomeTax;
