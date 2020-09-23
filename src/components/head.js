import React from "react"
import Helmet from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import ogImage from "@images/og.png"
import { config } from "@configs"
import favicon from "@images/favicon.ico"

const Head = () => {
    const intl = useIntl()
    return (
        <Helmet>
            <html lang={intl.locale} prefix="og: http://ogp.me/ns#" />
            <title itemProp="name" lang={intl.locale}>
                {intl.formatMessage({ id: "metadata.siteTitle" })}
            </title>
            <link rel="shortcut icon" href={favicon} />
            <link rel="canonical" href={config.metadata.siteUrl} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta
                name="description"
                content={intl.formatMessage({ id: "metadata.siteDescription" })}
            />
            <meta
                name="keywords"
                content={intl.formatMessage({ id: "metadata.keywords" })}
            />
            <meta
                name="google-site-verification"
                content={config.metadata.googleVerification}
            />
            <meta
                property="og:title"
                content={intl.formatMessage({ id: "metadata.siteTitle" })}
            />
            <meta
                property="og:description"
                content={intl.formatMessage({ id: "metadata.siteDescription" })}
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={config.metadata.siteUrl} />
            <meta
                property="og:site_name"
                content={intl.formatMessage({ id: "metadata.siteTitle" })}
            />
            <meta
                property="og:image"
                content={`${config.metadata.siteUrl}${ogImage}`}
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:locale" content={intl.locale} />
            <meta
                itemProp="name"
                content={intl.formatMessage({ id: "metadata.siteTitle" })}
            />
            <meta
                itemProp="description"
                content={intl.formatMessage({ id: "metadata.siteDescription" })}
            />
            <meta
                itemProp="image"
                content={`${config.metadata.siteUrl}${ogImage}`}
            />
            <meta
                name="twitter:image:alt"
                content={intl.formatMessage({ id: "metadata.siteTitle" })}
            />
        </Helmet>
    )
}

export default Head
