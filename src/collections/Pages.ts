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

import { Contacts } from "../blocks/Contacts";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "📰 Page",
    plural: "📰 Pages",
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: "title",
      label: "Page Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
      unique: true,
      required: true,
      localized: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "🦸‍♀️ Hero",
          fields: [
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
              label: "Image",
              type: "upload",
              relationTo: "images",
            },
          ],
        },
        {
          label: "🧱 Blocks",
          fields: [
            {
              name: "blocks",
              type: "blocks",
              blocks: [Contacts],
            },
          ],
        },
      ],
    },
  ],
};

export default Pages;
