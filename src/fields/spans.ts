import type { Field } from "payload/types";

export const spans: Field = {
  name: "spans",
  label: { en: "Weekday Spans", lt: "Laiko Tarpai" },
  type: "array",
  admin: {
    components: {
      RowLabel: ({ data, index }: any) => {
        return data.spanStart
          ? `${data?.spanStart} ${data.spanEnd ? " - " + data.spanEnd : ""}`
          : `Span ${String(index).padStart(2, "0")}`;
      },
    },
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "spanStart",
          label: { en: "From Week Day", lt: "Savaitės diena" },
          type: "select",
          admin: {
            width: "50%",
          },
          options: [
            {
              label: { lt: "Pirmadienis", en: "Monday" },
              value: "monday",
            },
            {
              label: { lt: "Antradienis", en: "Tuesday" },
              value: "tuesday",
            },
            {
              label: { lt: "Trečiadienis", en: "Wednesday" },
              value: "wednesday",
            },
            {
              label: { lt: "Ketvirtadienis", en: "Thursday" },
              value: "thursday",
            },
            {
              label: { lt: "Penktadienis", en: "Friday" },
              value: "friday",
            },
            {
              label: { lt: "Šeštadienis", en: "Saturday" },
              value: "saturday",
            },
            {
              label: { lt: "Sekmadienis", en: "Sunday" },
              value: "sunday",
            },
          ],
        },
        {
          name: "spanEnd",
          label: { en: "To Week Day", lt: "Savaitės diena" },
          type: "select",
          admin: {
            width: "50%",
          },
          options: [
            {
              label: { lt: "Pirmadienis", en: "Monday" },
              value: "monday",
            },
            {
              label: { lt: "Antradienis", en: "Tuesday" },
              value: "tuesday",
            },
            {
              label: { lt: "Trečiadienis", en: "Wednesday" },
              value: "wednesday",
            },
            {
              label: { lt: "Ketvirtadienis", en: "Thursday" },
              value: "thursday",
            },
            {
              label: { lt: "Penktadienis", en: "Friday" },
              value: "friday",
            },
            {
              label: { lt: "Šeštadienis", en: "Saturday" },
              value: "saturday",
            },
            {
              label: { lt: "Sekmadienis", en: "Sunday" },
              value: "sunday",
            },
          ],
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "spanTimeStart",
          type: "date",
          label: { en: "Start", lt: "Pradžia" },
          admin: {
            width: "50%",
            date: {
              pickerAppearance: "timeOnly",
            },
          },
        },
        {
          name: "spanTimeEnd",
          type: "date",
          label: { en: "End", lt: "Pabaiga" },
          admin: {
            width: "50%",
            date: {
              pickerAppearance: "timeOnly",
            },
          },
        },
      ],
    },
  ],
};
