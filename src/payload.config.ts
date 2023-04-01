import { buildConfig } from "payload/config";
import path from "path";
import seo from "@payloadcms/plugin-seo";
import Users from "./collections/Users";
import Examples from "./collections/Examples";
import Images from "./collections/Images";
import Tags from "./collections/Tags";
import Documents from "./collections/Documents";
import Projects from "./collections/Projects";
import Pages from "./collections/Pages";
import Events from "./collections/Events";
import News from "./collections/News";
import Menu from "./globals/Menu";
import AdminLogo from "./components/AdminGraphics/adminLogo";
import AdminIcon from "./components/AdminGraphics/adminIcon";
import Featured from "./globals/Featured";
import Facilities from "./globals/Facilities";
import Information from "./globals/Information";
import Volunteering from "./globals/Volunteering";
import IncomeTax from "./globals/IncomeTax";
import Team from "./globals/Team";

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
  collections: [
    Users,
    Examples,
    Projects,
    Pages,
    Events,
    News,
    Images,
    Documents,
    Tags,
  ],
  globals: [
    Featured,
    Menu,
    Information,
    Facilities,
    Team,
    Volunteering,
    IncomeTax,
  ],
  localization: {
    locales: ["lt", "en"],
    defaultLocale: "lt",
    fallback: false,
  },
  plugins: [
    seo({
      collections: ["projects", "events", "news", "pages"],
      uploadsCollection: "images",
      generateTitle: ({ doc }: any) =>
        `${doc?.title?.value} - Kauno Menininkų Namai`,
      generateDescription: ({ doc }: any) =>
        `${doc?.description.initialValue[0].children[0].text.substring(
          0,
          145
        )}(...)`,
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
