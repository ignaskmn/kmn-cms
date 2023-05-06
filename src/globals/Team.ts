import { GlobalConfig } from "payload/types";

const Team: GlobalConfig = {
  slug: "team",
  label: { en: "Team", lt: "Komanda" },
  access: {
    read: (): boolean => true, // Everyone can read Tean
  },
  fields: [
    {
      name: "members",
      label: { en: "Team Members", lt: "Komandos Nariai" },
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return (
              data?.firstName || `Team member ${String(index).padStart(2, "0")}`
            );
          },
        },
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "firstName",
              label: { en: "First Name", lt: "Vardas" },
              type: "text",
              admin: {
                width: "50%",
              },
            },
            {
              name: "lastName",
              label: { en: "Last Name", lt: "Pavardė" },
              type: "text",
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          name: "position",
          label: { en: "Position", lt: "Pareigos" },
          type: "text",
          localized: true,
        },
        {
          type: "row",
          fields: [
            {
              name: "email",
              label: { en: "Email", lt: "El. paštas" },
              type: "email",
              admin: {
                width: "50%",
              },
            },
            {
              name: "phone",
              label: { en: "Phone", lt: "Telefonas" },
              type: "text",
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          name: "image",
          label: { en: "Image", lt: "Nuotrauka" },
          type: "upload",
          relationTo: "images",
          required: true
        },
      ],
    },
  ],
};

export default Team;
