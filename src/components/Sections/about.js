import React from "react"
import styled from "styled-components"
import { Section, Profile } from "@components"
import { theme } from "@styles"

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
    return (
        <StyledSection title={title} id="about">
            <StyledProfiles>
                {profiles.map((profile, i) => (
                    // Index as key is generally a bad idea, but shouldn't matter in this case
                    <Profile key={i} profile={profile} />
                ))}
            </StyledProfiles>
            <StyledDescription
                dangerouslySetInnerHTML={{ __html: html }}
            ></StyledDescription>
        </StyledSection>
    )
}

export default About
