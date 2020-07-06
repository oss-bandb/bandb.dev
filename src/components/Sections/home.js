import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { Section } from "@components"
import { theme } from "@styles"
import { colors } from "@configs"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledButton = styled(Link)`
    padding: 10px;
    background-color: ${theme.colorAccent};
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    color: ${colors.color};
    text-decoration: none;
`

const Home = ({ data }) => {
    const { frontmatter } = data[0].node
    return (
        <Section>
            <StyledContainer>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.subtitle}</p>
                <StyledButton to="/#contact">{frontmatter.action}</StyledButton>
            </StyledContainer>
        </Section>
    )
}

Home.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Home
