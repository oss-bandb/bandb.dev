import React, { useEffect } from "react"
import { Head, Navigation, Footer } from "@components"
import { GlobalStyle } from "@styles"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children, navItems }) => {
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1)
            setTimeout(() => {
                const el = document.getElementById(id)
                if (el) {
                    el.scrollIntoView()
                    el.focus()
                }
            }, 0)
        }
    }, [])
    return (
        <>
            <Head />
            <GlobalStyle />
            <Navigation navItems={navItems} />
            {children}
            <Footer links={navItems} />
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="gatsby-plugin-google-analytics-gdpr_cookies-enabled"
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
        </>
    )
}

export default Layout
