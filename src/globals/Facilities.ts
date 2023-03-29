import { GlobalConfig } from "payload/types";
import FaciSpaces from "../blocks/facilities/FaciSpaces";
import FaciReadingRoom from "../blocks/facilities/FaciReadingRoom";
import FaciOther from "../blocks/facilities/FaciOther";
import FaciRooms from "../blocks/facilities/FaciRooms";

const Services: GlobalConfig = {
  slug: "facilities",
  label: { en: "Facilities", lt: "Paslaugos" },
  access: {
    read: (): boolean => true, // Everyone can read Information
  },
  fields: [
    {
      name: "facilityBlocks",
      label: { en: "Facility Blocks", lt: "Paslaugos" },
      type: "array",
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return (
              data?.title || `Facility Block ${String(index).padStart(2, "0")}`
            );
          },
        },
      },
      fields: [
        {
          name: "title",
          label: {
            en: "Facility Title",
            lt: "Paslaugos Pavadinimas",
          },
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "layout",
          label: { en: "Layout", lt: "Išdėstymas" },
          type: "blocks",
          blocks: [FaciSpaces, FaciRooms, FaciReadingRoom, FaciOther],
        },
      ],
    },
  ],
};

export default Services;
