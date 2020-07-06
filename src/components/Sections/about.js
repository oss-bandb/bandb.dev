import React from "react"
import styled from "styled-components"
import { Section, Profile } from "@components"
import { theme } from "@styles"

const StyledSection = styled(Section)`
    background-color: ${theme.colorAccent};
    width: 100%;
`

const StyledProfiles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const StyledDescription = styled.div`
    padding-bottom: 45px;
    font-weight: 600;
    font-size: 1.1rem;
`

const About = ({ data, profiles }) => {
    console.log("data", data)
    console.log("profiles", profiles)
    const { html } = data[0].node
    const { title } = html
    return (
        <StyledSection title={title}>
            <StyledDescription>
                {profiles.map((profile, i) => (
                    // Index as key is generally a bad idea, but shouldn't matter in this case
                    <Profile key={i} profile={profile} />
                ))}
            </StyledDescription>
            <StyledDescription
                dangerouslySetInnerHTML={{ __html: html }}
            ></StyledDescription>
        </StyledSection>
    )
}

export default About
