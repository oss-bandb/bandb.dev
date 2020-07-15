import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { theme, device } from "@styles"

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: ${theme.lightGrey};
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 32px;

    @media ${device.smallDown} {
        flex-direction: column;
    }

    & * {
        padding: 8px 0;
    }
`

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 48px;
`

const CopyrightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colorAccent};
    padding: 0.8em;
`

const LinkList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const LinkItem = styled.li`
    &:first-child {
        padding-bottom: 4px;
    }
    &:not(:first-child) {
        padding: 4px 0;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.color};
`

const Title = styled.h4`
    font-size: 1.2em;
    padding-bottom: 8px;
`

const Brand = styled.h3`
    font-size: 1.4em;
`

const Footer = () => {
    const startCopyrightYear = "2019"
    const currentCopyrightYear = new Date().getFullYear()
    return (
        <FooterContainer>
            <InfoContainer>
                <ColumnContainer>
                    <Title>Block & Block</Title>
                    <div>Your freelance developer team.</div>
                </ColumnContainer>
                <ColumnContainer>
                    <Title>Useful Links</Title>
                    <LinkList>
                        <LinkItem>
                            <StyledLink to="#home">Home</StyledLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledLink to="#about">About</StyledLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledLink to="#services">Services</StyledLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledLink to="impressum.html">Imprint</StyledLink>
                        </LinkItem>
                    </LinkList>
                </ColumnContainer>
                <ColumnContainer>
                    <Title>Contact</Title>
                    <div>Block &amp; Block Software Engineering GbR</div>
                    <div>
                        Werringser Straße 36b <br />
                        58706 Menden <br />
                        NRW, Germany
                    </div>
                    <div>
                        <strong>contact@bandb.dev</strong>
                    </div>
                </ColumnContainer>
            </InfoContainer>
            <CopyrightContainer>
                <div>
                    &copy; {startCopyrightYear} - {currentCopyrightYear}{" "}
                    <strong>Block &amp; Block</strong>. All Rights Reserved.
                </div>
                <div> Designed by Block &amp; Block</div>
            </CopyrightContainer>
        </FooterContainer>
    )
}

export default Footer
