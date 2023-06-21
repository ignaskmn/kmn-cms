import { Block } from 'payload/types';
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

export type Type = {
    slug: string;
    title: string;
    contents: {}[]
}

export const TextCollapse: Block = {
    slug: 'textCollapse',
    labels: {singular: "Text Collapse", plural: "Text Collapse"}, 
    imageURL: 'https://tvs.kmn.lt/assets/blocks/textCollapse.png',
    fields: [
        {
            name: "title",
            type: "text",
            required: true
        },
        lexicalRichTextField({
            name: 'content',
            label: 'Text Content',
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
    ]
}

export default TextCollapse;