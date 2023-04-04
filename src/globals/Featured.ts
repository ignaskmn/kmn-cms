import { GlobalConfig } from "payload/types";

const Featured: GlobalConfig = {
  slug: "featured",
  label: { en: "Featured", lt: "Svarbūs" },
  access: {
    read: (): boolean => true, // Everyone can read Tean
  },
  fields: [
    {
      name: "items",
      label: { en: "Featured Items", lt: "Svarbūs Įrašai" },
      type: "array",
      minRows: 4,
      admin: {
        components: {
          RowLabel: ({ index }: any) => {
            return `Featured Item ${String(index).padStart(2, "0")}`;
          },
        },
      },
      fields: [
        {
          name: "type",
          label: { en: "Type", lt: "Tipas" },
          type: "radio",
          options: [
            { label: { en: "News", lt: "Naujiena" }, value: "news" },
            { label: { en: "Event", lt: "Renginys" }, value: "events" },
            { label: { en: "Project", lt: "Veikla" }, value: "projects" },
          ],
        },
        {
          name: "item",
          label: { en: "News Item", lt: "Naujiena" },
          type: "relationship",
          maxDepth: 0,
          relationTo: "news",
          admin: {
            condition: (_, { type } = {}) => type === "news",
          },
        },
        {
          name: "item",
          label: { en: "Event", lt: "Renginys" },
          type: "relationship",
          maxDepth: 0,
          relationTo: "events",
          admin: {
            condition: (_, { type } = {}) => type === "events",
          },
        },
        {
          name: "item",
          label: { en: "Project", lt: "Veikla" },
          type: "relationship",
          maxDepth: 0,
          relationTo: "projects",
          admin: {
            condition: (_, { type } = {}) => type === "projects",
          },
        },
      ],
    },
  ],
};

export default Featured;
