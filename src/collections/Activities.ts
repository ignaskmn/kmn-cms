import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";
import { Participants, Type as ParticipantsType } from "../blocks/Participants";

export type Type = {
  slug: string;
  title: string;
  type:
    | "residency"
    | "exhibition"
    | "education"
    | "concert"
    | "event"
    | "screening"
    | "massEvent";
  start: string;
  end?: string;
  image9x16: string;
  image1x1: string;
  layout?: ParticipantsType[];
};

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
              label: { en: "Activity Title", lt: "Veiklos Pavadinimas" },
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "type",
              label: { en: "Activity Type", lt: "Veiklos Tipas" },
              type: "select",
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
                  label: { lt: "Concert", en: "Koncertas" },
                  value: "concert",
                },
                {
                  label: { lt: "Event", en: "Renginys" },
                  value: "event",
                },
                {
                  label: { lt: "Screening", en: "Peržiūra" },
                  value: "screening",
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
                  type === "education",
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
                  type === "concert" ||
                  type === "event" ||
                  type === "screening",
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
              name: "image9x16",
              label: "Featured Image 9 x 16",
              type: "upload",
              required: true,
              relationTo: "media",
            },
            {
              name: "image1x1",
              label: "Featured Image 1 x 1",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
              localized: true,
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
      ],
    },
  ],
};

export default Activities;
