import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { Section, Profile } from "@components"
import { theme } from "@styles"
import scrollReveal from "@utils/scrollreveal"
import { config } from "@configs"

const StyledSection = styled(Section)`
    background-color: ${theme.secondaryColor};
    display: flex;
    justify-content: Center;
    align-items: center;
`

const StyledProfiles = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 2em;
`

const StyledDescription = styled.div`
    padding-bottom: 45px;
`

const About = ({ data, profiles }) => {
    const { frontmatter, html } = data[0].node
    const { title } = frontmatter

    const reveal = useRef([])
    useEffect(() =>
        reveal.current.forEach((ref, i) =>
            scrollReveal.reveal(
                ref,
                config.scrollReveal(i * config.scrollRevealDelay)
            )
        )
    )

    return (
        <StyledSection title={title} id="about">
            <StyledProfiles>
                {profiles.map((profile, i) => (
                    // Index as key is generally a bad idea, but shouldn't matter in this case
                    <Profile
                        ref={el => reveal.current.push(el)}
                        key={i}
                        profile={profile}
                    />
                ))}
            </StyledProfiles>
            <StyledDescription
                ref={el => reveal.current.push(el)}
                dangerouslySetInnerHTML={{ __html: html }}
            ></StyledDescription>
        </StyledSection>
    )
}

export default About
