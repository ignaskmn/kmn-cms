import { Block } from 'payload/types';

export const FaciSpaces: Block = {
    slug: 'faciSpaces',
    labels: {singular: "Spaces", plural: "Spaces"}, 
    imageURL: 'http://localhost:3000/assets/blocks/FaciSpaces.png',
    fields: [
        {
            name: "content",
            labels: {singular: "Facility Spaces", plural: "Facility Spaces"},
            type: "array",
            admin: {
                components: {
                RowLabel: ({ data, index }: any) => {
                    return (
                    data?.label ||
                    `Space ${String(index).padStart(2, "0")}`
                    );
                },
                },
            },
            fields: [
                {
                    name: "label",
                    type: "text",
                    localized: true
                },
            {
              name: "image1x1",
              label: "Featured Image 1 x 1",
              type: "upload",
              relationTo: "images",
            },
            ]
        }
    ]
}

export default FaciSpaces;