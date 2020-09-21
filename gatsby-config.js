const path = require("path")

import { config } from "./src/configs"

module.exports = {
    siteMetadata: {
        siteUrl: config.metadata.siteUrl,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: "UA-145084202-1",
                // Puts tracking script in the head instead of the body
                head: false,
                // enable ip anonymization
                anonymize: true,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-yaml`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: config.languages.supportedLanguages,
                defaultLanguage: config.languages.defaultLanguage,
                redirect: true,
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    // When adding new alias, don't forget to add it in jsconfig.json for autocomplete
                    "@components": path.resolve(__dirname, "src/components"),
                    "@configs": path.resolve(__dirname, "src/configs"),
                    "@images": path.resolve(__dirname, "src/images"),
                    "@styles": path.resolve(__dirname, "src/styles"),
                    "@utils": path.resolve(__dirname, "src/utils"),
                },
                extensions: [],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/data/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        // https://www.gatsbyjs.org/packages/gatsby-remark-images
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 700,
                            linkImagesToOriginal: true,
                            quality: 90,
                            tracedSVG: { color: "#64ffda" },
                        },
                    },
                ],
            },
        },
    ],
}
