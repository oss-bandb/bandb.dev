import React from "react"
import styled from "styled-components"
import { Section, Profile } from "@components"
import { Container, theme } from "@styles"

const StyledSection = styled(Section)`
    background-color: ${theme.colorAccent};
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
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
    margin: 1.5em;
`

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const About = ({ data, profiles }) => {
    const { frontmatter, html } = data[0].node
    const { title } = frontmatter
    return (
        <StyledSection title={title}>
            <StyledContainer>
                <StyledProfiles>
                    {profiles.map((profile, i) => (
                        // Index as key is generally a bad idea, but shouldn't matter in this case
                        <Profile key={i} profile={profile} />
                    ))}
                </StyledProfiles>
                <StyledDescription
                    dangerouslySetInnerHTML={{ __html: html }}
                ></StyledDescription>
            </StyledContainer>
        </StyledSection>
    )
}

export default About
