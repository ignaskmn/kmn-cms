import { Block } from 'payload/types';
import { Type as PersonCollapseType } from "../PersonCollapse";

export type Type = {
  slug: string;
  title: string;
  layout: PersonCollapseType[];
}

export const Participants: Block = {
    slug: "participants",
    imageURL: 'http://localhost:3000/assets/blocks/participants.png',
    labels: {singular: "Participants", plural: "Participant Blocks"},
    fields: [
        {
            name: "title",
            type: "text",
            localized: true,
        },
        {
            name: "participants",
            type: "array",
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
            ]
}