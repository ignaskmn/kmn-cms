import { Block } from 'payload/types';

export const FaciRooms: Block = {
    slug: 'faciRooms',
    labels: {singular: "Rooms", plural: "Rooms"}, 
    imageURL: 'http://localhost:3000/assets/blocks/FaciRooms.png',
    fields: [
        {
            name: "content",
            labels: {singular: "Rooms", plural: "Rooms"},
            type: "array",
            admin: {
                components: {
                RowLabel: ({ data, index }: any) => {
                    return (
                    data?.label ||
                    `Room ${String(index).padStart(2, "0")}`
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
                    name: "size",
                    type: "number",
                },
                {
                    name: "description",
                    type: "richText",
                    admin: {
                            elements: [ 'ul' ],
                            leaves: []
                        },
                    localized: true
                },
            {
              name: "image9x16",
              label: "Featured Image 9 x 16",
              type: "upload",
              required: true,
              relationTo: "images",
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

export default FaciRooms;