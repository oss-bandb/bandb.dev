import React from "react"
import styled from "styled-components"
import { Section } from "@components"
import { theme } from "@styles"

const StyledSection = styled(Section)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const StyledButton = styled.a`
    padding: 10px;
    margin-top: 2em;
    margin-bottom: 3em;
    background-color: ${theme.colorAccent};
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
    return (
        <StyledSection title={title} id="contact">
            <StyledContent
                dangerouslySetInnerHTML={{ __html: html }}
            ></StyledContent>
            <StyledButton href={`mailto:contact@bandb.dev`}>
                {action}
            </StyledButton>
        </StyledSection>
    )
}

export default Contact
