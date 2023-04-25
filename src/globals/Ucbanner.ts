import { GlobalConfig } from "payload/types";

const Ucbanner: GlobalConfig = {
  slug: "ucbanner",
  label: { en: "UC Banner", lt: "UC Banner" },
  access: {
    read: (): boolean => true, // Everyone can read Tean
  },
  fields: [
    {
      name: "message",
      label: { en: "Message", lt: "Pranešimas" },
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "textColor",
      label: { en: "Text Color", lt: "Teksto Spalva" },
      type: "text",
      required: true,
    },
    {
        name: "backgroundColor",
        label: { en: "Background Color", lt: "Fono Spalva" },
        type: "text",
        required: true,
    },
  ]
}

export default Ucbanner;