import { Block } from "payload/types";

const Button: Block = {
  slug: "button",
  labels: { singular: "Button", plural: "Buttons" },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "link",
      type: "text",
      localized: true,
    },
  ],
};

export default Button;
