import { GlobalConfig } from "payload/types";

const Footer: GlobalConfig = {
  slug: "footer",
  label: { en: "Footer", lt: "Footer" },
  access: {
    read: (): boolean => true, // Everyone can read Tean
  },
  fields: [
    {
      name: "socials",
      label: { en: "Links", lt: "Nuorodos" },
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return data?.linkName || `Link ${String(index).padStart(2, "0")}`;
          },
        },
      },
      fields: [
        {
          name: "linkName",
          label: { en: "Link Name", lt: "Nuorodos pavadinimas" },
          type: "text",
        },
        {
          name: "link",
          label: { en: "Link", lt: "Nuoroda" },
          type: "text",
        },
      ],
    },
    {
      name: "requisites",
      label: { en: "Requisites", lt: "Rekvizitai" },
      type: "richText",
      admin: {
        elements: ["link", "ol", "ul"],
        leaves: ["bold", "italic", "underline"],
      },
      localized: true,
    },
    {
      name: "hours",
      label: { en: "Opening Hours", lt: "Darbo valandos" },
      type: "richText",
      admin: {
        elements: ["link", "ol", "ul"],
        leaves: ["bold", "italic", "underline"],
      },
      localized: true,
    },
    {
      name: "contacts",
      label: { en: "Contacts", lt: "Kontaktai" },
      type: "group",
      fields: [
        {
          name: "address",
          label: { en: "Address", lt: "Adresas" },
          type: "text",
        },
        {
          name: "email",
          label: { en: "Email", lt: "El. paštas" },
          type: "email",
        },
        {
          name: "phone",
          label: { en: "Phone", lt: "Telefonas" },
          type: "text",
        },
      ],
    },
    {
      name: "additional",
      label: { en: "Additional Contacts", lt: "Papildomi Kontaktai" },
      type: "richText",
      admin: {
        elements: ["link", "ol", "ul"],
        leaves: ["bold", "italic", "underline"],
      },
      localized: true,
    },
  ],
};

export default Footer;
