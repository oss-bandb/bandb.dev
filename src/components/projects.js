import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import { ProjectList, ProjectSwiper, Section } from "@components"
import { theme, device } from "@styles"

const Content = styled(Section)`
    background-color: ${theme.secondaryColor};
    margin-top: 0;
    @media ${device.mediumUp} {
        display: flex;
        justify-content: Center;
        align-items: center;
    }
`
const ProjectsTitle = styled.h2`
    text-align: center;
    padding: 24px 0;
`

const StyledProjectList = styled(ProjectList)`
    @media ${device.mediumDown} {
        display: none;
    }
`

const StyledProjectSwiper = styled(ProjectSwiper)`
    display: none;
    @media ${device.mediumDown} {
        display: block;
    }
`
const Projects = ({ projects }) => {
    return (
        <Content>
            <ProjectsTitle>
                <FormattedMessage id="about.projectsTitle" />
            </ProjectsTitle>
            <StyledProjectList projects={projects} />
            <StyledProjectSwiper projects={projects} />
        </Content>
    )
}

export default Projects
