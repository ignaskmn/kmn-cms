import { Block } from 'payload/types';

export type Type = {
    slug: string;
    title: string;
    document: string;
}

export const InfoDocDownload: Block = {
    slug: 'infoDocDownload',
    labels: {singular: "Documents", plural: "Documents"}, 
    imageURL: 'http://localhost:3000/assets/blocks/document.png',
    fields: [
        {
            name: "content",
            labels: {singular: "Single Document", plural: "Single Documents"},
            type: "array",
            fields: [
                {
                    name: "title",
                    type: "text"
                },
                {
                    name: "download",
                    label: "File",
                    type: "upload",
                    relationTo: "documents"
                }
            ]
        }
    ]
}

export default InfoDocDownload;