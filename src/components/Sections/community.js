import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { Section } from "@components"
import { theme } from "@styles"
import { FormattedIcon } from "@components/icons"

const StyledSection = styled(Section)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 15px;
`
const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    padding: 2rem 1.75rem;
    height: 100%;
    background-color: #232326;
`
const StyledDescription = styled.div`
    text-align: center;
`
const StyledImage = styled(Img)`
    width: 100%;
`
const StyledGitHubLink = styled.a`
    text-decoration: none;
    color: ${theme.color};
    padding: 10px;
`
const StyledGitHubInfo = styled.div`
    margin-top: 10px;
    & > span {
        display: inline-flex;
        align-items: flex-end;
        margin: 0 7px;
    }
    svg {
        display: inline-block;
        height: 22px;
        width: auto;
        margin-right: 5px;
        fill: ${theme.color};
    }
`

const Community = ({ data }) => {
    const { frontmatter, html } = data[0].node
    const { title, image } = frontmatter
    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    })

    useEffect(() => {
        fetch("https://api.github.com/repos/Team-Blox/GraphView")
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                })
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <StyledSection title={title} id="community">
            <StyledGrid>
                <StyledContainer>
                    <StyledImage
                        fluid={image.childImageSharp.fluid}
                        alt={name + " Freelance Android developer"}
                    />
                    <StyledDescription
                        dangerouslySetInnerHTML={{ __html: html }}
                    ></StyledDescription>

                    <StyledGitHubLink
                        href="https://github.com/Team-Blox/GraphView"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        {githubInfo.stars && githubInfo.forks && (
                            <StyledGitHubInfo>
                                <span>
                                    <FormattedIcon name="github" />
                                    <span>GitHub</span>
                                </span>
                                <span>
                                    <FormattedIcon name="star" />
                                    <span>
                                        {githubInfo.stars.toLocaleString()}
                                    </span>
                                </span>
                                <span>
                                    <FormattedIcon name="fork" />
                                    <span>
                                        {githubInfo.forks.toLocaleString()}
                                    </span>
                                </span>
                            </StyledGitHubInfo>
                        )}
                    </StyledGitHubLink>
                </StyledContainer>
            </StyledGrid>
        </StyledSection>
    )
}

Community.propTypes = {
    githubInfo: PropTypes.object,
}

export default Community
