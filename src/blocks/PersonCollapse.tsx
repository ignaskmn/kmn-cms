import { Block } from 'payload/types';

export type Type = {
    blockType: 'collapse'
    firstName: string,
    lastName: string,
    nationality: string,
    bio: string
}

export const PersonCollapse: Block = {
    slug: 'collapse',
    imageURL: 'https://tvs.kmn.lt/assets/blocks/collapse.png',
    labels: {
        singular: 'Collapse',
        plural: 'Collapse Blocks'
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
                    name: "bio",
                    type: "textarea",
                    localized: true
                },
            ]
}
