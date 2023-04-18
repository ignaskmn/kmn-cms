import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";
import { Type as TagsType } from "./Tags";
import {
  Participants,
  Type as ParticipantsType,
} from "../blocks/projects/Participants";
import RichText from "../blocks/RichText";

export type Type = {
  slug: string;
  title: string;
  type:
    | "residency"
    | "exhibition"
    | "education"
    | "sound"
    | "event"
    | "screen"
    | "massEvent";
  start: string;
  end?: string;
  image9x16: string;
  image1x1: string;
  layout?: ParticipantsType[];
  tags?: TagsType[];
};

const Projects: CollectionConfig = {
  slug: "projects",
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
              label: { en: "Project Title", lt: "Veiklos Pavadinimas" },
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "type",
              label: { en: "Project Type", lt: "Veiklos Tipas" },
              type: "select",
              required: true,
              options: [
                {
                  label: { lt: "Residency", en: "Rezidencija" },
                  value: "residency",
                },
                {
                  label: { lt: "Exhibition", en: "Paroda" },
                  value: "exhibition",
                },
                {
                  label: { lt: "Education", en: "Mokymai" },
                  value: "education",
                },
                {
                  label: { lt: "Sound", en: "Garsas" },
                  value: "sound",
                },
                {
                  label: { lt: "Event", en: "Kitas Renginys" },
                  value: "event",
                },
                {
                  label: { lt: "Screen", en: "Ekranas" },
                  value: "screen",
                },
                {
                  label: { lt: "Mass Event", en: "Didelis Renginys" },
                  value: "massEvent",
                },
              ],
            },
            // Show start and end date fields only if type is residency, exhibition or education
            {
              type: "row",
              admin: {
                condition: (_, { type } = {}) =>
                  type === "residency" ||
                  type === "exhibition" ||
                  type === "education" ||
                  type === "sound" ||
                  type === "screen",
              },
              fields: [
                {
                  name: "start",
                  label: { en: "Start Date", lt: "Pradžios Data" },
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
                  label: { en: "End Date", lt: "Pabaigos Data" },
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
              type: "row",
              admin: {
                condition: (_, { type } = {}) =>
                  type === "event" || type === "massEvent",
              },
              fields: [
                {
                  name: "start",
                  label: { en: "Date and time", lt: "Data ir laikas" },
                  type: "date",
                },
              ],
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
          ],
        },
        {
          label: "Layouts",
          fields: [
            {
              name: "layout",
              label: "Activity Layout",
              type: "blocks",
              blocks: [Participants, RichText],
            },
          ],
        },
        {
          label: "Events",
          fields: [
            {
              name: "events",
              label: "Events",
              type: "array",
              fields: [
                {
                  name: "event",
                  label: "Event",
                  type: "relationship",
                  relationTo: "events",
                },
              ],
            },
          ],
        },
        {
          label: "News",
          fields: [
            {
              name: "news",
              label: "News",
              type: "array",
              fields: [
                {
                  name: "news",
                  label: "News Item",
                  type: "relationship",
                  relationTo: "news",
                },
              ],
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

export default Projects;
