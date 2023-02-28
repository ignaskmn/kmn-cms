import { Block } from 'payload/types';

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const Content: Block = {
  slug: 'content',
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
          'h1', 'h2', 'link', 'upload', 'indent'
        ],
        leaves: [
          'bold', 'italic', 'underline'
        ]
      }
    },
  ],
};

export default Content;
