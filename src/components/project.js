import React from "react"
import styled from "styled-components"
import { theme } from "@styles"

const Content = styled.div`
    min-height: 300px;
`

const Head = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

const ProjectTitle = styled.span`
    font-weight: bold;
    font-size: 1.2em;
`

const ProjectRange = styled.span`
    font-size: 0.8em;
    font-weight: lighter;
    white-space: nowrap;
`

const SubTitle = styled.div`
    display: flex;
    margin-bottom: 12px;
    font-weight: lighter;
    font-size: 0.8em;
`

const ProjectDetails = styled.div`
    margin-bottom: 8px;
    text-align: justify;
    hyphens: auto;
`

const ProjectSkills = styled.div`
    display: flex;
`
const ProjectSkillList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-left: -6px;
`

const ProjectSkill = styled.li`
    background-color: ${theme.primaryColor};
    border-radius: 5px;
    text-align: center;
    padding: 4px 8px;
    float: left;
    margin: 4px 0 4px 6px;
`

const Project = ({ data }) => {
    const { frontmatter, html } = data.node
    const { title, customer, location, range, skills } = frontmatter
    return (
        <Content>
            <Head>
                <Title>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectRange>{range}</ProjectRange>
                </Title>
                <SubTitle>
                    {customer && <p>{customer},&nbsp;</p>}
                    <p>{location}</p>
                </SubTitle>
            </Head>
            <ProjectDetails
                dangerouslySetInnerHTML={{
                    __html: html,
                }}
            ></ProjectDetails>
            <ProjectSkills>
                <ProjectSkillList>
                    {skills &&
                        skills.map((skill, i) => {
                            return <ProjectSkill key={i}>{skill}</ProjectSkill>
                        })}
                </ProjectSkillList>
            </ProjectSkills>
        </Content>
    )
}

export default Project
