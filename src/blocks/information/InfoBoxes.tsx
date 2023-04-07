import { Block } from 'payload/types';

export type Type = {
    slug: string;
    title: string;
    boxes: {}[]
}

export const InfoBoxes: Block = {
    slug: 'infoBoxes',
    labels: {singular: "Info Box", plural: "Info Boxes"}, 
    imageURL: 'https://tvs.kmn.lt/assets/blocks/infoBoxes.png',
    fields: [
        {
            name: "content",
            type: "array",
            minRows: 1,
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
                    label: "File",
                    type: "upload",
                    relationTo: "documents",
                    required: true
                }
            ]
        }
    ]
}

export default InfoBoxes;