import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { Section } from "@components"
import { theme } from "@styles"
import { FormattedIcon } from "@components/icons"
import scrollReveal from "@utils/scrollreveal"
import { splitGithubInfo } from "@utils"
import { config } from "@configs"

const StyledSection = styled(Section)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
    background-color: ${theme.secondaryColor};
    max-width: 800px;
    min-width: 400px;
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
    const { title, image, alt, link } = frontmatter
    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    })

    const teamLink = splitGithubInfo(link)
    useEffect(() => {
        fetch("https://api.github.com/repos/" + teamLink)
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

    const reveal = useRef(null)
    useEffect(
        () => scrollReveal.reveal(reveal.current, config.scrollReveal()),
        []
    )

    return (
        <StyledSection title={title} id="community">
            <StyledContainer>
                <StyledImage fluid={image.childImageSharp.fluid} alt={alt} />
                <StyledDescription
                    dangerouslySetInnerHTML={{ __html: html }}
                ></StyledDescription>
                <StyledGitHubLink
                    href={link}
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
                                <span>{githubInfo.stars.toLocaleString()}</span>
                            </span>
                            <span>
                                <FormattedIcon name="fork" />
                                <span>{githubInfo.forks.toLocaleString()}</span>
                            </span>
                        </StyledGitHubInfo>
                    )}
                </StyledGitHubLink>
            </StyledContainer>
        </StyledSection>
    )
}

Community.propTypes = {
    githubInfo: PropTypes.object,
}

export default Community
