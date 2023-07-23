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
  Participants,
  Type as ParticipantsType,
} from "../blocks/projects/Participants";
import { spans } from "../fields/spans";

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
              name: "recurring",
              type: "checkbox",
              label: { en: "Recurring", lt: "Kartojasi" },
            },
            {
              name: "end",
              label: { en: "End date", lt: "Data ir laikas" },
              type: "date",
              admin: {
                condition: (_, { recurring } = {}) => recurring === true,
                date: {
                  pickerAppearance: "dayOnly",
                },
              },
            },
            {
              name: "recurringDates",
              type: "group",
              admin: {
                condition: (_, { recurring } = {}) => recurring === true,
              },
              label: false,
              fields: [spans],
            },
            {
              name: "fb",
              type: "text",
              label: "Facebook Event Link",
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
              label: "Legacy Image 9 x 16",
              type: "upload",
              relationTo: "images",
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
