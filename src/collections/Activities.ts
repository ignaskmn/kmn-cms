import { CollectionConfig } from "payload/types";
import { Content, Type as ContentType } from "../blocks/Content";

export const Activities: CollectionConfig = {
  slug: "activities",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: "type",
      label: "Activity Type",
      type: "select",
      options: [
        {
          label: "Residency",
          value: "residency",
        },
        {
          label: "Exhibition",
          value: "exhibition",
        },
        {
          label: "Education",
          value: "education",
        },
        {
          label: "Concert",
          value: "concert",
        },
        {
          label: "Event",
          value: "event",
        },
        {
          label: "Screening",
          value: "screening",
        },
        {
          label: "Mass Event",
          value: "massEvent",
        },
      ],
    },
    {
      name: "title",
      label: "Activity Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "start",
          label: "Start Date",
          type: "date",
          admin: {
            width: "50%",
            date: {
              pickerAppearance: "dayOnly",
            },
          },
        },
        {
          name: "end",
          label: "End Date",
          type: "date",
          admin: {
            width: "50%",
            date: {
              pickerAppearance: "dayOnly",
            },
          },
        },
      ],
    },
    {
      name: "image",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "layout",
      label: "Activity Layout",
      type: "blocks",
      minRows: 1,
      blocks: [Content],
    },
  ],
};

export default Activities;
