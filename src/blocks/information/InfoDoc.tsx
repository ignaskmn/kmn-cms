import { Block } from 'payload/types';

export type Type = {
    slug: string;
    title: string;
    document: string;
}

export const InfoDocDownload: Block = {
    slug: 'infoDoc',
    labels: {singular: "Documents", plural: "Documents"}, 
    imageURL: 'https://tvs.kmn.lt/assets/blocks/document.png',
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
}

export default InfoDocDownload;