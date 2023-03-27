import { Block } from 'payload/types';

export type Type = {
  blockType: 'richText'
  blockName?: string
  content: unknown
}

export const RichText: Block = {
  slug: 'richText',
  imageURL: 'http://localhost:3000/assets/blocks/richText.png',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      admin: {
        elements: [
          'link', 'ol', 'ul'
        ],
        leaves: [
          'bold', 'italic', 'underline'
        ]
      }
    },
  ],
};

export default RichText;