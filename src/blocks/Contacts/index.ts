import type { Block } from "payload/types";

export const Contacts: Block = {
  slug: "contactsBlock",
  labels: { singular: "Contacts", plural: "Contacts" },
  fields: [
    {
      name: "email",
      type: "text",
    },
    {
      name: "tel",
      type: "text",
    },
  ],
};
