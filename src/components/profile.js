import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    background-color: #232326;
    min-width: 275px;
    max-width: 275px;
    min-height: 375px;
    max-height: 375px;
`

const Profile = ({ profile }) => {
    const { name, title, social } = profile.node.frontmatter
    console.log("profile", profile)
    return (
        <StyledContainer>
            <div>
                    <img
                        src="./../img/dennis_image.jpg"
                        class="img-fluid"
                        alt="Dennis Block - Freelance Android developer"
                    />
                </div>
            <p>
                {name} <span class="degree">{title}</span>
            </p>
            <div>
                <a
                    href="https://github.com/DennisBlock"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a
                    href="https://www.xing.com/profile/Dennis_Block4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fab fa-xing"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/dennis-block-5383a318a/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                    href="./assets/Lebenslauf_Freelance_DennisBlock.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="far fa-file-pdf"></i>
                </a>
            </div>
        </StyledContainer>
    )
}

export default Profile
