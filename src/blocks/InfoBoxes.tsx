import { Block } from 'payload/types';

export type Type = {
    slug: string;
    title: string;
    boxes: {}[]
}

export const InfoBoxes: Block = {
    slug: 'infoBoxes',
    labels: {singular: "Info Box", plural: "Info Boxes"}, 
    imageURL: 'http://localhost:3000/assets/blocks/infoBoxes.png',
    fields: [
        {
            name: "content",
            type: "array",
            admin: {
                components: {
                    RowLabel: ({ data, index }: any) => {
                        return data?.label || `File ${String(index).padStart(2, '0')}`
                    }
                }
            },
            fields: [
                {
                    name: "label",
                    type: "text",
                    required: true
                },
                {
                    name: "file",
                    type: "upload",
                    relationTo: "documents"
                }
            ]
        }
    ]
}

export default InfoBoxes;