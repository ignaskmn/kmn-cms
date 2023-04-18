import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";
import { Type as TagsType } from "./Tags";
import {
  Participants,
  Type as ParticipantsType,
} from "../blocks/projects/Participants";

export type Type = {
  slug: string;
  title: string;
  start: string;
  description: string;
  image9x16: string;
  image1x1: string;
  venue: string;
  address: string;
  layout?: ParticipantsType[];
  tags?: TagsType[];
};

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: "slug",
      label: { en: "Slug", lt: "Nuoroda" },
      type: "text",
      unique: true,
      localized: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Main",
          fields: [
            {
              name: "title",
              label: { en: "Event Title", lt: "Renginio Pavadinimas" },
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "start",
              label: { en: "Date and time", lt: "Data ir laikas" },
              type: "date",
              admin: {
                date: {
                  pickerAppearance: "dayAndTime",
                },
              },
              required: true,
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
            {
              name: "image9x16",
              label: "Featured Image 9 x 16",
              type: "upload",
              required: true,
              relationTo: "images",
            },
            {
              name: "image1x1",
              label: "Featured Image 1 x 1",
              type: "upload",
              required: true,
              relationTo: "images",
            },
            {
              name: "priority",
              label: "Sorting Priority",
              type: "number",
              localized: true,
            },
          ],
        },
        {
          label: "Location",
          fields: [
            {
              name: "external",
              type: "checkbox",
              label: "External Location",
            },
            {
              type: "row",
              admin: {
                condition: (_, { external } = {}) => external === true,
              },
              fields: [
                {
                  name: "venue",
                  label: "Venue / Location name",
                  type: "text",
                },
                {
                  name: "address",
                  label: "Address Link",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          label: "Layouts",
          fields: [
            {
              name: "layout",
              label: "Activity Layout",
              type: "blocks",
              blocks: [Participants],
            },
          ],
        },
        {
          label: "Tags",
          fields: [
            {
              name: "tags",
              label: "Tags",
              type: "relationship",
              hasMany: true,
              relationTo: "tags",
            },
          ],
        },
      ],
    },
  ],
};

export default Events;
