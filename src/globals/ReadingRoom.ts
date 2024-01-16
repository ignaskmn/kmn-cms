import { GlobalConfig } from "payload/types";
import LocalizedTextCollapse from "../blocks/information/LocalizedTextCollapse";
import Button from "../blocks/Button";
import LexicalRichText from "../blocks/LexicalRichText";

const ReadingRoom: GlobalConfig = {
  slug: "readingRoom",
  label: { en: "Reading Room", lt: "Skaitykla" },
  access: {
    read: (): boolean => true, // Everyone can read Re
  },
  fields: [
    {
      name: "image",
      label: "Main Image",
      type: "upload",
      relationTo: "images",
    },
    {
      name: "layout",
      label: { en: "Layout", lt: "Išdėstymas" },
      type: "blocks",
      blocks: [LexicalRichText, Button, LocalizedTextCollapse],
    },
  ],
};

export default ReadingRoom;
