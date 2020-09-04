import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"
import { Section } from "@components"
import { theme } from "@styles"
import scrollReveal from "@utils/scrollreveal"
import { config } from "@configs"

const StyledSection = styled(Section)`
    min-height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledButton = styled(Link)`
    padding: 10px;
    margin-top: 5em;
    background-color: ${theme.primaryColor};
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

    const reveal = useRef([])
    useEffect(
        () =>
            reveal.current.forEach((ref, i) =>
                scrollReveal.reveal(
                    ref,
                    config.scrollReveal(i * config.scrollRevealDelay)
                )
            ),
        []
    )

    return (
        <StyledSection id="home">
            <Title ref={el => reveal.current.push(el)}>{title}</Title>
            <Subtitle ref={el => reveal.current.push(el)}>{subtitle}</Subtitle>
            <StyledButton to="/#contact" ref={el => reveal.current.push(el)}>
                {action}
            </StyledButton>
        </StyledSection>
    )
}

Home.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Home
