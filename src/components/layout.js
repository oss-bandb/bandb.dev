import React from "react"
import { Head, Navigation, Footer } from "@components"
import { GlobalStyle } from "@styles"

const Layout = props => {
    return (
        <div>
            <Head />
            <GlobalStyle />
            <Navigation />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
