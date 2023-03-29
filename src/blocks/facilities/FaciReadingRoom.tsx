import { Block } from 'payload/types';

export const FaciReadingRoom: Block = {
    slug: 'faciReadingRoom',
    labels: {singular: "Reading Room", plural: "Reading Room"}, 
    imageURL: 'http://localhost:3000/assets/blocks/FaciReadingRoom.png',
    fields: [
        {
            name: "hours",
            type: "text"
        },
        {
            name: "email",
            type: "email"
        },
        {
            name: "phone",
            type: "text"
        },
        {
            name: "content",
            labels: {singular: "Reading Room Info Field", plural: "Reading Room Info Fields"},
            type: "array",
            admin: {
                components: {
                RowLabel: ({ data, index }: any) => {
                    return (
                    data?.label ||
                    `Reading Room Info Field ${String(index).padStart(2, "0")}`
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
                    name: "description",
                    type: "richText",
                    admin: {
                            elements: [ 'link', 'ul' ],
                            leaves: []
                        },
                    localized: true
                },
            ]
        }
    ]
}

export default FaciReadingRoom;