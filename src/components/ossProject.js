import React, { forwardRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme } from "@styles"
import Img from "gatsby-image"
import { FormattedIcon } from "@components/icons"
import { splitGithubInfo } from "@utils"

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

const StyledDescription = styled.div`
    text-align: center;
`

const OssProjekt = forwardRef(({ ossProjekt }, ref) => {
        const [githubInfo, setGitHubInfo] = useState({
        stars: 0,
        forks: 0,
    })

    const teamLink = splitGithubInfo(ossProjekt.link)
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
    return (
        <StyledContainer ref={ref}>
            <StyledImage fluid={ossProjekt.image.childImageSharp.fluid} alt={ossProjekt.alt} />
            <StyledDescription
                    dangerouslySetInnerHTML={{ __html: ossProjekt.description }}
                ></StyledDescription>
            <StyledGitHubLink
                    href={ossProjekt.link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                >
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
                </StyledGitHubLink>
        </StyledContainer>
    )
})

OssProjekt.propTypes = {
    githubInfo: PropTypes.object,
}

export default OssProjekt
