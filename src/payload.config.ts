import { buildConfig } from "payload/config";
import path from "path";
import seo from "@payloadcms/plugin-seo";
import Users from "./collections/Users";
import Examples from "./collections/Examples";
import Images from "./collections/Images";
import Information from "./globals/Information";
import Tags from "./collections/Tags";
import Documents from "./collections/Documents";
import Projects from "./collections/Projects";
import Menu from "./globals/Menu";
import AdminLogo from "./components/AdminGraphics/adminLogo";
import AdminIcon from "./components/AdminGraphics/adminIcon";

export default buildConfig({
  // serverURL: "https://tvs.kmn.lt",
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
    meta: {
      favicon: "/assets/favicon.ico",
      ogImage: "/assets/og_image.png",
    },
    css: path.resolve(__dirname, "./utilities/cms.css"),
    components: {
      graphics: {
        Logo: AdminLogo,
        Icon: AdminIcon,
      },
    },
  },
  collections: [Users, Examples, Projects, Images, Documents, Tags],
  globals: [Menu, Information],
  localization: {
    locales: ["lt", "en"],
    defaultLocale: "lt",
    fallback: false,
  },
  plugins: [
    seo({
      collections: ["activities"],
      uploadsCollection: "images",
      generateTitle: ({ doc }: any) =>
        `Kauno Menininkų Namai - ${doc?.title?.value}`,
      generateDescription: ({ doc }: any) =>
        `${doc?.description?.value.substring(0, 144)} (...)`,
      generateImage: ({ doc }: any) => doc?.image9x16?.value,
    }),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
