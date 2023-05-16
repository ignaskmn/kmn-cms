import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";
import { recurring } from "../fields/recurring";
import { lexicalRichTextField,
  EmojisFeature,
  EmojiPickerFeature,
  HorizontalRuleFeature,
  YouTubeFeature,
  TwitterFeature,
  ClearEditorFeature,
  ReadOnlyModeFeature,
  KeywordsFeature,
  LinkFeature,
} from 'payload-plugin-lexical';
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
                  label: { lt: "Education", en: "Edukacija" },
                  value: "education",
                },
                {
                  label: { lt: "Sound", en: "Muzika" },
                  value: "sound",
                },
                {
                  label: { lt: "Screen", en: "Kinas" },
                  value: "screen",
                },
                {
                  label: { lt: "Mass Event", en: "Miesto Kultūra" },
                  value: "massEvent",
                },
              ],
            },
            // Show start and end date fields only if type is residency, exhibition or education
            {
              type: "group",
              name: "duration",
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
                  type: "row",
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
                // recurring
              ]
            },
            {
              type: "row",
              admin: {
                condition: (_, { type } = {}) =>
                  type === "massEvent",
              },
              fields: [
                {
                  name: "start",
                  label: { en: "Date and time", lt: "Data ir laikas" },
                  type: "date",
                  admin: {
                    date: {
                      pickerAppearance: "dayAndTime",
                    }
                  }
                },
              ],
            },
            lexicalRichTextField({
              name: 'lexicalRichText',
              label: 'Description',
              localized: true,
              editorConfigModifier: (defaultEditorConfig) => {
                defaultEditorConfig.debug = false;
                defaultEditorConfig.toggles.textColor.enabled = false;
                defaultEditorConfig.toggles.textBackground.enabled = false;
                defaultEditorConfig.toggles.fontSize.enabled = false;
                defaultEditorConfig.toggles.font.enabled = false;
                defaultEditorConfig.toggles.align.enabled = false;
        
                defaultEditorConfig.features = [
                  EmojisFeature({}), // Adds new Emoji nodes with new, different-looking emojis
                  EmojiPickerFeature({}), // Use in combination with EmojisPlugin. When you start typing ":" it will show you different emojis you can use. They also look different!
                  HorizontalRuleFeature({}), // Horizontal rule in the editor.
                  YouTubeFeature({}), // YouTube Embed
                  TwitterFeature({}), // Twitter Embed
                  ClearEditorFeature({}), // Adds a button in the action menu which clears the editor
                  ReadOnlyModeFeature({}), // Acion button: toggle read-only mode on or off
                  KeywordsFeature({}), // Highlights certain words
                  LinkFeature({}), // Obvious: hyperlinks! This includes the AutoLink plugin.
                ];
        
                return defaultEditorConfig;
              }
            }),
            {
              name: "description",
              label: "Legacy Description",
              type: "richText",
              admin: {
                elements: ["link", "ol", "ul"],
                leaves: ["bold", "italic", "underline"],
              },
              localized: true,
            },
            {
              name: "image",
              label: "Main Image",
              type: "upload",
              relationTo: "images",
            },
            {
              name: "image9x16",
              label: "Featured Image 9 x 16",
              type: "upload",
              relationTo: "images",
            },
            // {
            //   name: "image1x1",
            //   label: "Featured Image 1 x 1",
            //   type: "upload",
            //   required: true,
            //   relationTo: "images",
            // },
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
                  required: true
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
                  required: true
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
