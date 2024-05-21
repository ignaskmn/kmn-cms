import { Block } from "payload/types";
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

export const ProgramItems: Block = {
  slug: "programItemsBlock",
  labels: { singular: "Participants", plural: "Participant Blocks" },
  fields: [
    {
      name: "programItems",
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return (
              data?.name || `Item ${String(index).padStart(2, "0")}`
            );
          },
        },
      },
      minRows: 1,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "subtext",
          label: "Subtext",
          type: "text",
          localized: true,
        },
        lexicalRichTextField({
          name: "content",
          localized: true,
          label: "Text Content",
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
};
