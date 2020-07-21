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

const SkillsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
`

const Skill = styled.li`
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    color: ${theme.color};
    &:before {
        content: "-";
        position: relative;
        left: -6px;
        color: ${theme.color};
        line-height: 12px;
    }
`

const StyledContent = styled.div`
    padding-bottom: 45px;
    margin: 1.5em;
`

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const About = ({ data, profiles }) => {
    const { frontmatter, html } = data[0].node
    const { title, skills } = frontmatter
    return (
        <StyledSection title={title} id="about">
            <StyledContainer>
                <StyledProfiles>
                    {profiles.map((profile, i) => (
                        // Index as key is generally a bad idea, but shouldn't matter in this case
                        <Profile key={i} profile={profile} />
                    ))}
                </StyledProfiles>
                <StyledContent>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    <SkillsContainer>
                        {skills &&
                            skills.map((skill, i) => (
                                <Skill key={i}>{skill}</Skill>
                            ))}
                    </SkillsContainer>
                </StyledContent>
            </StyledContainer>
        </StyledSection>
    )
}

export default About
