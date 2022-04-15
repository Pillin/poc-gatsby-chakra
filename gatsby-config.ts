import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: "gatsby-theme-auth0",
      options: {
        /*
      Required: for more information on these values
      see https://auth0.com/docs/libraries/auth0js/v9#initialization
      */
        domain: process.env.GATSBY_AUTH0_DOMAIN,
        clientID: process.env.GATSBY_AUTH0_CLIENT_ID,
        redirectUri: process.env.GATSBY_AUTH0_CALLBACK_URL

        /* Optional */
        // auth0Audience: undefined,
        // auth0ResponseType: "token id_token",
        // auth0Scope: "openid profile",
      }
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "AAA"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    }
  ]
};

export default config;
