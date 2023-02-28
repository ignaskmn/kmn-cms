import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import Examples from "./collections/Examples";
import Media from "./collections/Media";
import Activities from "./collections/Activities";
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
  collections: [Users, Examples, Activities, Media],
  globals: [Menu],
  localization: {
    locales: ["lt", "en"],
    defaultLocale: "lt",
    fallback: false,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
