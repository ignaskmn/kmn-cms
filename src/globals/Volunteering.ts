import { GlobalConfig } from "payload/types";

const Volunteering: GlobalConfig = {
  slug: "volunteering",
  label: { en: "Volunteering", lt: "Savanorystė" },
  access: {
    read: (): boolean => true, // Everyone can read Tean
  },
  fields: [
    {
      name: "columns",
      label: { en: "Columns", lt: "Stulpeliai" },
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return data?.label || `Column ${String(index).padStart(2, "0")}`;
          },
        },
      },
      fields: [
        {
          name: "label",
          label: { en: "Label", lt: "Pavadinimas" },
          type: "text",
          localized: true,
        },
        {
          name: "description",
          label: { en: "Description", lt: "Aprašymas" },
          type: "textarea",
          localized: true,
        },
        {
          name: "collapse",
          label: { en: "Collapse Elements", lt: "Suskleidžiami Elementai" },
          type: "array",
          admin: {
            components: {
              RowLabel: ({ data, index }: any) => {
                return (
                  data?.label || `Collapse ${String(index).padStart(2, "0")}`
                );
              },
            },
          },
          fields: [
            {
              name: "label",
              label: { en: "Label", lt: "Pavadinimas" },
              type: "text",
              localized: true,
            },
            {
              name: "description",
              label: "Description",
              type: "richText",
              admin: {
                elements: ["link", "ol", "ul"],
                leaves: ["bold", "italic", "underline"],
              },
              localized: true,
            },
          ],
        },
      ],
    },
  ],
};

export default Volunteering;
