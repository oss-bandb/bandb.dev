import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { Section, Service } from "@components"
import scrollReveal from "@utils/scrollreveal"
import { config } from "@configs"

const StyledSection = styled(Section)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 15px;
`

const Services = ({ data }) => {
    const { title, content } = data[0].node.frontmatter

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
        <StyledSection title={title} id="services">
            <StyledGrid>
                {content.map((service, i) => (
                    // Index as key is generally a bad idea, but shouldn't matter in this case
                    <Service
                        key={i}
                        service={service}
                        ref={el => (reveal.current[i] = el)}
                    ></Service>
                ))}
            </StyledGrid>
        </StyledSection>
    )
}

export default Services
