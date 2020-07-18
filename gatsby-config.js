const path = require("path")

module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`en`, `de`],
                defaultLanguage: `en`,
                redirect: false,
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    // When adding new alias, don't forget to add it in jsconfig.json for autocomplete
                    "@components": path.resolve(__dirname, "src/components"),
                    "@configs": path.resolve(__dirname, "src/configs"),
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
