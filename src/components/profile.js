import React, { forwardRef } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import { theme, device } from "@styles"
import { FormattedIcon } from "@components/icons"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 300px;
    padding: 15px;

    @media ${device.smallDown} {
        &:not(:last-child) {
            padding-bottom: 32px;
        }
    }
`

const StyledName = styled.p`
    font-size: 1.6em;
    font-weight: 700;
`

const Degree = styled.span`
    font-size: 0.8rem;
`

const StyledImage = styled(Img)`
    border-radius: 50%;
    width: 100%;
    margin-bottom: 30px;
`

const StyledResumeButton = styled.a`
    padding: 5px;
    background-color: transparent;
    border: 2px solid ${theme.color};
    border-radius: 5px;
    font-size: 1.2em;
    width: 50%;
    color: ${theme.color};
    text-decoration: none;
    text-align: center;
    margin: 10px;
`

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
`

const SocialLink = styled.a`
    margin: 0.6em;

    svg {
        height: 1em;
        width: auto;
        fill: ${theme.color};
    }
`

const Profile = forwardRef(({ profile }, ref) => {
    const {
        name,
        degree,
        image,
        resume,
        social,
        alt,
    } = profile.node.frontmatter
    return (
        <StyledContainer ref={ref}>
            <StyledImage fluid={image.childImageSharp.fluid} alt={alt} />
            <StyledName>
                {name} <Degree>{degree}</Degree>
            </StyledName>
            {/* TODO: i18n */}
            <StyledResumeButton href={resume.publicURL}>
                Resume
            </StyledResumeButton>

            <SocialLinks>
                {social.map(({ link, icon }, index) => (
                    <SocialLink key={index} href={link}>
                        <FormattedIcon name={icon} />
                    </SocialLink>
                ))}
            </SocialLinks>
        </StyledContainer>
    )
})

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default Profile
