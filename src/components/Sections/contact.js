import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { Section, Form } from "@components"
import scrollReveal from "@utils/scrollreveal"
import { config } from "@configs"

const StyledSection = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const StyledContent = styled.div`
    text-align: center;
    margin-bottom: 48px;
`

const Contact = ({ data }) => {
    const { frontmatter, html } = data[0].node
    const { title } = frontmatter

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
            <Form ref={el => reveal.current.push(el)} />
        </StyledSection>
    )
}

export default Contact
