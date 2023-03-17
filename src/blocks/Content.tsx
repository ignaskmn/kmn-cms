import { Block } from 'payload/types';

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const Content: Block = {
  slug: 'content',
  imageURL: 'http://localhost:3000/assets/blocks/content.png',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      localized: true,
      admin: {
        elements: [
          'h2', 'h3', 'link', 'upload'
        ],
        leaves: [
          'bold', 'italic', 'underline'
        ]
      }
    },
  ],
};

export default Content;