import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Project } from "@components"
import { theme, device } from "@styles"

const StyledProjects = styled.div`
    display: flex;
    @media ${device.mediumDown} {
        display: block;
    }
`

const List = styled.ul`
    display: block;
    position: relative;
    width: max-content;
    z-index: 3;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-right: 16px;

    @media ${device.mediumDown} {
        display: flex;
        overflow-x: scroll;
    }
`

const StyledTabButton = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: transparent;
    height: 42px;
    padding: 0 20px 2px;
    border: 0;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-left: 2px solid ${theme.color50};
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
        color: ${theme.backgroundColor};
        background-color: ${theme.color};
    }

    &:focus {
        outline: none;
    }

    color: ${props => (props.isActive ? theme.color : theme.color50)};

    @media ${device.mediumDown} {
        border-left: 0;
        border-bottom: 2px solid ${theme.color50};
    }
`

const SelectionMarker = styled.span`
    display: block;
    background: ${theme.color};
    width: 2px;
    height: 42px;
    border-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.1s;
    z-index: 10;
    transform: translateY(
        ${props => (props.activeTabId > 0 ? props.activeTabId * 42 : 0)}px
    );

    @media ${device.mediumDown} {
        transform: translateX(
            ${props => (props.activeTabId > 0 ? props.activeTabId * 180 : 0)}px
        );
        height: 2px;
        width: 10px;
        top: auto;
        bottom: 0;
    }
`

const ProjectList = ({ projects, className }) => {
    const [activeTabId, setActiveTabId] = useState(0)
    const [tabFocus, setTabFocus] = useState(null)
    const [selectedProject, setSelectedProject] = useState(
        projects[activeTabId]
    )
    const tabs = useRef([])

    useEffect(() => setSelectedProject(projects[activeTabId]), [activeTabId])

    // Only re-run the effect if tabFocus changes
    useEffect(() => focusTab(), [tabFocus])

    const focusTab = () => {
        if (tabs.current[tabFocus]) {
            tabs.current[tabFocus].focus()
        } else {
            // If we're at the end, go to the start
            if (tabFocus >= tabs.current.length) {
                setTabFocus(0)
            }
            // If we're at the start, move to the end
            if (tabFocus < 0) {
                setTabFocus(tabs.current.length - 1)
            }
        }
    }
    return (
        <div className={className}>
            <StyledProjects>
                <List>
                    {projects.map((project, i) => {
                        const { title } = project.node.frontmatter
                        return (
                            <StyledTabButton
                                key={i}
                                isActive={activeTabId === i}
                                onClick={() => setActiveTabId(i)}
                            >
                                {title}
                            </StyledTabButton>
                            // <StyledProject key={i}>
                            //     <Project data={project} />
                            // </StyledProject>
                        )
                    })}
                    <SelectionMarker activeTabId={activeTabId} />
                </List>
                <Project data={selectedProject} />
            </StyledProjects>
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProjectList
