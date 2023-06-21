import { Block } from 'payload/types';

export type Type = {
    slug: string;
    title: string;
    contents: {}[]
}

export const InfoSmallCollapse: Block = {
    slug: 'infoCollapse',
    labels: {singular: "Doc Collapse", plural: "Doc Collapse"}, 
    imageURL: 'https://tvs.kmn.lt/assets/blocks/smallCollapse.png',
    fields: [
        {
            name: "title",
            type: "text",
            required: true
        },
        {
            name: "content",
            labels: {singular: "Document", plural: "Documents"},
            type: "array",
            fields: [
                {
                    name: "label",
                    type: "text",
                    required: true
                },
                {
                    name: "file",
                    label: "File",
                    type: "upload",
                    relationTo: "documents",
                    required: true
                }
            ]
        }
    ]
}

export default InfoSmallCollapse;