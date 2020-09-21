import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import scrollReveal from "@utils/scrollreveal"
import { config } from "@configs"
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
        <Content>
            <ProjectsTitle ref={el => reveal.current.push(el)}>
                <FormattedMessage id="about.projectsTitle" />
            </ProjectsTitle>
            <div ref={el => reveal.current.push(el)}>
                <StyledProjectList projects={projects} />
                <StyledProjectSwiper projects={projects} />
            </div>
        </Content>
    )
}

export default Projects
