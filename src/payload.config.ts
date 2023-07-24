import { buildConfig } from "payload/config";
import path from "path";
import seo from "@payloadcms/plugin-seo";
import Users from "./collections/Users";
import Images from "./collections/Images";
import Tags from "./collections/Tags";
import Documents from "./collections/Documents";
import Recordings from "./collections/Recordings";
import Projects from "./collections/Projects";
import Pages from "./collections/Pages";
import Events from "./collections/Events";
import Audio from "./collections/Audio";
import News from "./collections/News";
import Menu from "./globals/Menu";
import AdminLogo from "./components/AdminGraphics/adminLogo";
import AdminIcon from "./components/AdminGraphics/adminIcon";
import Featured from "./globals/Featured";
import Facilities from "./globals/Facilities";
import Information from "./globals/Information";
import Partners from "./globals/Partners";
import Volunteering from "./globals/Volunteering";
import Team from "./globals/Team";
import Footer from "./globals/Footer";
import Ucbanner from "./globals/Ucbanner";
import Cookies from "./globals/Cookies";
import { LexicalPlugin } from "payload-plugin-lexical";

export default buildConfig({
  // serverURL: "https://tvs.kmn.lt",
  // serverURL: "http://localhost:3000",
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
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
    Projects,
    Pages,
    Events,
    News,
    Images,
    Documents,
    Recordings,
    Tags,
    Audio,
  ],
  globals: [
    Featured,
    Menu,
    Information,
    Partners,
    Facilities,
    Team,
    Volunteering,
    Footer,
    Ucbanner,
    Cookies,
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
        // `${doc?.description.initialValue[0].children[0].text.substring(
        //   0,
        //   145
        // )}(...)`,
        `${doc.lexicalRichText.value.preview}`,
      generateImage: ({ doc }: any) => doc?.image?.value,
    }),
    LexicalPlugin({}),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
