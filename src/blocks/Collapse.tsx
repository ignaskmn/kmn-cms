import { Block } from 'payload/types';

export type Type = {
    blockType: 'collapse'
    blockName?: string
    title?: string,
    description: string,
    role?: string,
    firstName?: string,
    lastName?: string,
    nationality?: string,
}

export const Collapse: Block = {
    slug: 'collapse',
    imageURL: 'http://localhost:3000/assets/blocks/collapse.png',
    labels: {
        singular: 'Collapse',
        plural: 'Collapse Blocks'
    },
    fields: [
        {
            name: "type",
            label: "Collapse Type",
            type: "select",
            options: [
                {
                    label: "Pavadinimas",
                    value: "title"
                },
                {
                    label: "Vardas",
                    value: "name"
                }
            ]
        },
        {
            name: "pavadinimas",
            type: "group",
            admin: {
                condition: (_, { type }) => type === "title"
            },
            fields: [
                {
                    name: "title",
                    type: "text",
                    localized: true,
                },
                {
                    name: "description",
                    type: "textarea",
                    localized: true
                }

            ]
        },
        {
            name: "vardas",
            type: "group",
            admin: {
                condition: (_, { type }) => type === "name"
            },
            fields: [
                {
                    type: "row",
                    fields: [
                        {
                            name: "firstName",
                            type: "text",
                        },
                        {
                            name: "lastName",
                            type: "text",
                        },
                    ]
                },
                {
                    name: "nationality",
                    type: "text",
                    localized: true,
                },
                {
                    name: "description",
                    type: "textarea",
                    localized: true
                },
            ]
        }

    ]
}
