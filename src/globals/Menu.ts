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
