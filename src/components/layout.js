import React from "react"
import styled from "styled-components"
import { Head, Navigation, Footer } from "@components"
import { GlobalStyle } from "@styles"

const StyledContainer = styled.div`
    margin-top: 60px;
`

const Layout = props => {
    return (
        <div>
            <Head />
            <GlobalStyle />
            <Navigation />
            <StyledContainer>{props.children}</StyledContainer>
            <Footer />
        </div>
    )
}

export default Layout
