import { GlobalConfig } from "payload/types";

const Menu: GlobalConfig = {
  slug: "menu",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "menuItems",
      label: "Menu Items",
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return data?.label || `Menu Item ${String(index).padStart(2, "0")}`;
          },
        },
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "label",
              type: "text",
              localized: true,
              admin: {
                width: "50%",
              },
            },
            {
              name: "slug",
              type: "text",
              localized: true,
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          name: "submenu",
          type: "checkbox",
          defaultValue: false,
          label: "Submenu",
        },
        {
          name: "submenuItems",
          label: "Submenu Items",
          type: "array",
          admin: {
            condition: (_, { submenu } = {}) => submenu,
            components: {
              RowLabel: ({ data, index }: any) => {
                return (
                  data?.label ||
                  `Submenu Item ${String(index).padStart(2, "0")}`
                );
              },
            },
          },
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "label",
                  type: "text",
                  localized: true,
                  admin: {
                    width: "50%",
                  },
                },
                {
                  name: "slug",
                  type: "text",
                  localized: true,
                  admin: {
                    width: "50%",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Menu;
