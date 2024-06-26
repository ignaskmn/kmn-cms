import { Block } from 'payload/types';
import { Type as PersonCollapseType } from "../PersonCollapse";

export type Type = {
  slug: string;
  title: string;
  layout: PersonCollapseType[];
}

export const Participants: Block = {
    slug: "participants",
    imageURL: 'https://tvs.kmn.lt/assets/blocks/participants.png',
    labels: {singular: "Participants", plural: "Participant Blocks"},
    fields: [
        {
            name: "title",
            type: "text",
            localized: true,
            required: true
        },
        {
            name: "participants",
            type: "array",
            admin: {
                components: {
                RowLabel: ({ data, index }: any) => {
                    return (
                    data?.firstName ||
                    `Participant ${String(index).padStart(2, "0")}`
                    );
                },
                },
            },
            minRows: 1,
            fields: [
                        {
                            type: "row",
                            fields: [
                                {
                                    name: "firstName",
                                    type: "text",
                                    required: true,
                                },
                                {
                                    name: "lastName",
                                    type: "text",
                                    required: true,
                                },
                            ]
                        },
                        {
                            name: "nationality",
                            label: "Subtext",
                            type: "text",
                            localized: true,
                        },
                        {
                            name: "bio",
                            type: "richText",
                            admin: {
                                elements: ["link", "ol", "ul"],
                                leaves: ["bold", "italic", "underline"],
                            },
                            localized: true,
                            required: true
                        },
                    ]
                }
            ]
}