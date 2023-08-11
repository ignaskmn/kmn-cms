import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";
import {
  lexicalRichTextField,
  EmojisFeature,
  EmojiPickerFeature,
  HorizontalRuleFeature,
  YouTubeFeature,
  TwitterFeature,
  ClearEditorFeature,
  ReadOnlyModeFeature,
  KeywordsFeature,
  LinkFeature,
} from "payload-plugin-lexical";
import { Type as TagsType } from "./Tags";
import {
  ProjectParticipants,
  Type as ParticipantsType,
} from "../blocks/projects/ProjectParticipants";
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
            {
              type: "row",
              fields: [
                {
                  name: "ongoing",
                  type: "checkbox",
                },
                {
                  name: "once",
                  admin: {
                    condition: (_, { ongoing } = {}) => !ongoing,
                  },
                  type: "checkbox",
                },
              ],
            },
            // Show start and end date fields only if type is residency, exhibition or education
            {
              type: "row",
              admin: {
                condition: (_, { once, ongoing } = {}) => !once || ongoing,
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
                        condition: (_, { ongoing } = {}) => !ongoing,
                      },
                    },
                  ],
                },
                // recurring,
              ],
            },
            {
              type: "row",
              admin: {
                condition: (_, { once, ongoing } = {}) => once && !ongoing,
              },
              fields: [
                {
                  name: "start",
                  label: { en: "Date and time", lt: "Data ir laikas" },
                  type: "date",
                  admin: {
                    date: {
                      pickerAppearance: "dayAndTime",
                    },
                  },
                },
              ],
            },
            lexicalRichTextField({
              name: "lexicalRichText",
              label: "Description",
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
              },
            }),
            {
              name: "image",
              label: "Main Image",
              type: "upload",
              relationTo: "images",
              required: true,
            },
          ],
        },
        {
          label: "Descriptions",
          fields: [
            {
              name: "datedDescriptions",
              label: "Dated Description",
              type: "array",
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "datedDescriptionStart",
                      label: "Start Date",
                      type: "date",
                      required: true,
                      admin: {
                        date: {
                          pickerAppearance: "monthOnly",
                        },
                      },
                    },
                    {
                      name: "datedDescriptionEnd",
                      label: "End Date",
                      type: "date",
                      required: true,
                      admin: {
                        date: {
                          pickerAppearance: "monthOnly",
                        },
                      },
                    },
                  ],
                },
                {
                  name: "datedImage",
                  label: "Dated main Image",
                  type: "upload",
                  relationTo: "images",
                },
                lexicalRichTextField({
                  name: "datedLexicalRichText",
                  label: "Description",
                  localized: true,
                  required: true,
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
                  },
                }),
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
              blocks: [ProjectParticipants, RichText],
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
                  required: true,
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
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: "Media",
          fields: [
            {
              name: "galleries",
              label: "Photo Galleries",
              type: "array",
              fields: [
                {
                  name: "galleryId",
                  label: "Photo Gallery ID",
                  type: "text",
                },
                {
                  name: "galleryDate",
                  label: "Gallery Dated",
                  type: "date",
                  admin: {
                    date: {
                      pickerAppearance: "monthOnly",
                    },
                  },
                },
              ],
            },
            {
              name: "audio",
              label: { singular: "Audio Series", plural: "Audio Series" },
              type: "array",
              admin: {
                components: {
                  RowLabel: ({ data, index }: any) => {
                    return `Audio Series ${String(index).padStart(2, "0")}`;
                  },
                },
              },
              fields: [
                {
                  name: "audioSeries",
                  type: "relationship",
                  relationTo: "audio",
                  required: true,
                },
              ],
            },
            {
              name: "videos",
              type: "array",
              fields: [
                {
                  name: "videoId",
                  label: "Youtube video id",
                  type: "text",
                },
                {
                  name: "videoDate",
                  label: { en: "Video Date", lt: "Įrašo data" },
                  type: "date",
                  admin: {
                    date: {
                      pickerAppearance: "monthOnly",
                    },
                  },
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
