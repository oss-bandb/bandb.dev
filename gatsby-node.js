import { createFilePath } from "gatsby-source-filesystem"

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /scrollreveal/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    const { language } = page.context.intl
    deletePage(page)
    createPage({
        ...page,
        context: {
            ...page.context,
            language,
        },
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (
        node.internal.type === `DataYaml` ||
        node.internal.type === `MarkdownRemark`
    ) {
        const path = createFilePath({ node, getNode })
        const langCode = extractLanguageCode(path)
        createNodeField({
            name: `language`,
            node,
            value: langCode,
        })
    }

    function extractLanguageCode(path) {
        const length = path.length
        const start = length - 3
        const end = start + 2
        return path.substring(start, end)
    }
}
