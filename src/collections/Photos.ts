import { CollectionConfig } from "payload/types";

const Photos: CollectionConfig = {
  slug: "photos",
  labels: { singular: "Photo Albums", plural: "Photo Albums" },
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
      label: { en: "Album title", lt: "Nuotraukų albumo pavadinimas" },
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "albumId",
      label: { en: "Imgur album ID", lt: "Imgur albumo ID" },
      required: true,
      type: "text",
    },
    {
      name: "date",
      label: { en: "Date for sorting", lt: "Data rūšiavimui" },
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
  ],
};

export default Photos;
