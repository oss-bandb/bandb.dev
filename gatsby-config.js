const path = require("path")

module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`en`, `de`],
                defaultLanguage: `en`,
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
                    "@styles": path.resolve(__dirname, "src/styles"),
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
                plugins: [],
            },
        },
    ],
}
