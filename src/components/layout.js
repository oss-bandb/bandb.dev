import React from "react"
import { Head, Navigation, Footer } from "@components"
import { GlobalStyle } from "@styles"
import CookieConsent from "react-cookie-consent"

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const Layout = props => {
    return (
        <div>
            <Head />
            <GlobalStyle />
            <Navigation />
            {props.children}
            <Footer />
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="gatsby-plugin-google-analytics-gdpr_cookies-enabled"
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
        </div>
    )
}

export default Layout
