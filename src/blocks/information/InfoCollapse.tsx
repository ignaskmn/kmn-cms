import { Block } from 'payload/types';
import InfoDoc from './InfoDoc';

export type Type = {
    slug: string;
    title: string;
    contents: {}[]
}

export const InfoSmallCollapse: Block = {
    slug: 'infoCollapse',
    labels: {singular: "Collapse", plural: "Collapse"}, 
    imageURL: 'http://localhost:3000/assets/blocks/smallCollapse.png',
    fields: [
        {
            name: "title",
            type: "text"
        },
        {
            name: "content",
            labels: {singular: "Document", plural: "Documents"},
            type: "array",
            fields: [
                {
                    name: "label",
                    type: "text"
                },
                {
                    name: "file",
                    label: "File",
                    type: "upload",
                    relationTo: "documents"
                }
            ]
        }
    ]
}

export default InfoSmallCollapse;