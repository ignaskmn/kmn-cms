import { Block } from 'payload/types';

export const FaciOther: Block = {
    slug: 'faciOther',
    labels: {singular: "Other Facilities", plural: "Other Facilities"}, 
    imageURL: 'https://tvs.kmn.lt/assets/blocks/FaciOther.png',
    fields: [
        {
            name: "content",
            labels: {singular: "Other Facilities", plural: "Other Facilities"},
            type: "array",
            admin: {
                components: {
                RowLabel: ({ data, index }: any) => {
                    return (
                    data?.label ||
                    `Facility ${String(index).padStart(2, "0")}`
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
                    name: "type",
                    type: "radio",
                    options: [
                        {
                            label: "Price and Description",
                            value: "price"
                        },
                        {
                            label: "Files",
                            value: "files"
                        },
                        {
                            label: "Contacts",
                            value: "contacts"
                        }
                    ]
                },
                {
                    name: "price",
                    type: "group",
                    admin: {
                        condition: (_, { type } = {}) => type === "price"
                    },
                    fields: [
                        {
                            name: "servicePrice",
                            type: "text",
                        },
                        {
                            name: "unit",
                            type: "radio",
                            options: [
                                {
                                    label: "Eur",
                                    value: "eur"
                                },
                                {
                                    label: "Eur/h",
                                    value: "eurh"
                                }
                            ]
                        },
                        {
                            name: "description",
                            type: "textarea",
                            localized: true
                        },
                    ]
                },
                {
                    name: "files",
                    type: "group",
                    admin: {
                        condition: (_, { type } = {}) => type === "files"
                    },
                    fields: [
                        {
                            name: "content",
                            labels: {singular: "Document", plural: "Documents"},
                            type: "array",
                            fields: [
                                {
                                    name: "label",
                                    type: "text"
                                },
                                {
                                    name: "file",
                                    label: "File",
                                    type: "upload",
                                    relationTo: "documents"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "contacts",
                    type: "group",
                    admin: {
                        condition: (_, { type } = {}) => type === "contacts"
                    },
                    fields: [
                        {
                            type: "row",
                            fields: [
                        {
                            name: "name",
                            type: "text",
                            admin: {
                                width: "50%",
                            },
                        },
                        {
                            name: "surname",
                            type: "text",
                            admin: {
                                width: "50%",
                            },
                        }
                            ]
                        },
                        {
                            type: "row",
                            fields: [
                        {
                            name: "email",
                            type: "email",
                            admin: {
                                width: "50%",
                            },
                        },
                        {
                            name: "phone",
                            type: "text",
                            admin: {
                                width: "50%",
                            },
                        }
                            ]
                        }

                    ]
                },
            ]
        }
    ]
}

export default FaciOther;