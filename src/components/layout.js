import React from "react"
import { Head, Navigation, Footer } from "@components"
import { GlobalStyle } from "@styles"

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}
const Layout = props => {
    return (
        <>
            <Head />
            <GlobalStyle />
            <Navigation />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
