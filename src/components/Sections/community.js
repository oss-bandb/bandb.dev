import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { Section, OssProjekt } from "@components"
import scrollReveal from "@utils/scrollreveal"
import { config } from "@configs"
import { device } from "@styles"

const StyledSection = styled(Section)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 800px));
    grid-gap: 15px;

    @media ${device.mediumDown} {
        grid-template-columns: 1fr;
    }
`

const Community = ({ data }) => {
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
        <StyledSection title={title} id="community">
            <StyledGrid>
                {content.map((ossProjekt, i) => (
                    // Index as key is generally a bad idea, but shouldn't matter in this case
                    <OssProjekt
                        key={i}
                        ossProjekt={ossProjekt}
                        ref={el => (reveal.current[i] = el)}
                    ></OssProjekt>
                ))}
            </StyledGrid>
        </StyledSection>
    )
}

export default Community
