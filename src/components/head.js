import React from "react"
import Helmet from "react-helmet"
import ogImage from "@images/og.png"
import { config } from "@configs"
import favicon from "@images/favicon.ico"

const Head = () => {
    return (
        <Helmet>
            <html lang="en" prefix="og: http://ogp.me/ns#" />
            <title itemProp="name" lang="en">
                {config.metadata.siteTitle}
            </title>
            <link rel="shortcut icon" href={favicon} />
            <link rel="canonical" href="https://www.bandb.dev/" />
            <meta
                name="description"
                content={config.metadata.siteDescription}
            />
            <meta
                name="google-site-verification"
                content={config.metadata.googleVerification}
            />
            <meta property="og:title" content={config.metadata.siteTitle} />
            <meta
                property="og:description"
                content={config.metadata.siteDescription}
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={config.metadata.siteUrl} />
            <meta property="og:site_name" content={config.metadata.siteTitle} />
            <meta
                property="og:image"
                content={`${config.metadata.siteUrl}${ogImage}`}
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:locale" content={config.metadata.siteLanguage} />
            <meta itemProp="name" content={config.metadata.siteTitle} />
            <meta
                itemProp="description"
                content={config.metadata.siteDescription}
            />
            <meta
                itemProp="image"
                content={`${config.metadata.siteUrl}${ogImage}`}
            />
            <meta
                name="twitter:image:alt"
                content={config.metadata.siteTitle}
            />
        </Helmet>
    )
}

export default Head
