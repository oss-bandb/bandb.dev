import React from "react"
import Helmet from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import { config } from "@configs"

const Head = () => {
    const intl = useIntl()

    return (
        <Helmet>
            <html lang={intl.locale} prefix="og: http://ogp.me/ns#" />
            <title itemProp="name" lang={intl.locale}>
                {intl.formatMessage({ id: "metadata.title" })}
            </title>
            {/*
       <link rel="shortcut icon" href={favicon} /> }
      <link rel="canonical" href="https://brittanychiang.com" />*/}

            <meta
                name="description"
                content={intl.formatMessage({ id: "metadata.description" })}
            />
            <meta
                name="keywords"
                content={config.metadata.keywords.join(", ")}
            />
            <meta
                name="google-site-verification"
                content={config.metadata.googleVerification}
            />

            {/* TODO
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image" content={`${config.siteUrl}${ogImage}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} />

    <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
    <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60x60} />
    <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
    <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
    <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114x114} />
    <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120x120} />
    <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
    <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
    <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192x192} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
    <meta name="msapplication-TileColor" content={config.colors.navy} />
    <meta name="msapplication-TileImage" content={msIcon144x144} />
    <meta name="theme-color" content={config.colors.navy} />
    
*/}
        </Helmet>
    )
}

export default Head
