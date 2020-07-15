import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { Section } from "@components"
import { theme } from "@styles"

const StyledSection = styled(Section)`
    min-height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledButton = styled(Link)`
    padding: 10px;
    margin-top: 5em;
    background-color: ${theme.colorAccent};
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    color: ${theme.color};
    text-decoration: none;
`

// TODO move to GlobalStyle?
const Title = styled.h1`
    font-size: 2.5em;
`

const Subtitle = styled.p`
    margin-top: 0;
`

const Home = ({ data }) => {
    const { title, subtitle, action } = data[0].node.frontmatter
    return (
        <StyledSection id="home">
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <StyledButton to="/#contact">{action}</StyledButton>
        </StyledSection>
    )
}

Home.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Home
