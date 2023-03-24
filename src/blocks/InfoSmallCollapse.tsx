import { Block } from 'payload/types';
import InfoDocDownload from './InfoDocDownload';

export type Type = {
    slug: string;
    title: string;
    contents: {}[]
}

export const InfoSmallCollapse: Block = {
    slug: 'infoSmallCollapse',
    labels: {singular: "Small Collapse", plural: "Small Collapse Blocks"}, 
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
            blocks: [InfoDocDownload]
        }
    ]
}

export default InfoSmallCollapse;