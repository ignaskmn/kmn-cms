import { Block } from 'payload/types';
import InfoDoc from './InfoDoc';

export type Type = {
    slug: string;
    title: string;
    contents: {}[]
}

export const InfoSmallCollapse: Block = {
    slug: 'infoCollapse',
    labels: {singular: "Collapse", plural: "Collapse Blocks"}, 
    imageURL: 'http://localhost:3000/assets/blocks/smallCollapse.png',
    fields: [
        {
            name: "title",
            type: "text"
        },
        {
            name: "content",
            label: "Files",
            type: "blocks",
            maxRows: 1,
            blocks: [InfoDoc]
        }
    ]
}

export default InfoSmallCollapse;