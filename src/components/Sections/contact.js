import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { Section } from "@components"
import { theme } from "@styles"
import scrollReveal from "@utils/scrollreveal"
import { config } from "@configs"

const StyledSection = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
`
const StyledButton = styled.a`
    padding: 10px;
    margin-top: 2em;
    margin-bottom: 3em;
    background-color: ${theme.primaryColor};
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    color: ${theme.color};
    text-decoration: none;
`

const StyledContent = styled.div`
    text-align: center;
`
const Contact = ({ data }) => {
    const { frontmatter, html } = data[0].node
    const { title, action } = frontmatter

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
        <StyledSection title={title} id="contact">
            <StyledContent
                ref={el => reveal.current.push(el)}
                dangerouslySetInnerHTML={{ __html: html }}
            ></StyledContent>
            <StyledButton
                ref={el => reveal.current.push(el)}
                href={`mailto:contact@bandb.dev`}
            >
                {action}
            </StyledButton>
        </StyledSection>
    )
}

export default Contact
