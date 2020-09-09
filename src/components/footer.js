import React from "react"
import styled from "styled-components"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import { theme, device } from "@styles"
import { config } from "@configs"

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: ${theme.secondaryColor};
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
    background-color: ${theme.primaryColor};
    padding: 0.8em;
    text-align: center;
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

const Title = styled.h3`
    font-size: 1.2em;
    padding-bottom: 8px;
`

const Brand = styled.h3`
    font-size: 1.4em;
`

const Footer = ({ links }) => {
    const intl = useIntl()
    const startCopyrightYear = "2019"
    const currentCopyrightYear = new Date().getFullYear()
    return (
        <FooterContainer>
            <InfoContainer>
                <ColumnContainer>
                    <Title>
                        <FormattedMessage id="branding" />
                    </Title>
                    <div>
                        <FormattedMessage id="title" />
                    </div>
                </ColumnContainer>
                <ColumnContainer>
                    <Title>
                        <FormattedMessage id="footer.usefulLinks.title" />
                    </Title>
                    <LinkList>
                        {config.footer.links.map(element => {
                            const link = links.find(
                                link => link.key === element
                            )
                            return (
                                <LinkItem key={link.key}>
                                    <StyledLink to={link.to}>
                                        {link.name}
                                    </StyledLink>
                                </LinkItem>
                            )
                        })}
                    </LinkList>
                </ColumnContainer>
                <ColumnContainer>
                    <Title>
                        <FormattedMessage id="footer.contact.title" />
                    </Title>
                    <div>
                        <FormattedMessage id="footer.contact.name" />
                    </div>
                    <div>
                        <FormattedMessage id="footer.contact.street" /> <br />
                        <FormattedMessage id="footer.contact.city" /> <br />
                        <FormattedMessage id="footer.contact.land" />
                    </div>
                    <div>
                        <strong>{config.contactMail}</strong>
                    </div>
                </ColumnContainer>
            </InfoContainer>
            <CopyrightContainer>
                <div>
                    &copy; {startCopyrightYear} - {currentCopyrightYear}{" "}
                    <strong>
                        <FormattedMessage id="branding" />
                    </strong>
                    . All Rights Reserved.
                </div>
                <div>
                    Designed by <FormattedMessage id="branding" />
                </div>
            </CopyrightContainer>
        </FooterContainer>
    )
}

export default Footer
