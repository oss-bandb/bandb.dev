import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import styled from "styled-components"
import { theme } from "@styles"

const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8em;
    font-weight: 500;
    text-transform: lowercase;
    white-space: nowrap;
    padding: 5px;
`

const LanguageList = styled.ol`
    display: flex;
    list-style: none;
    align-items: baseline;
`

const LanguageItem = styled.li`
    & + ::before {
        content: "|";
        padding: 0 3px;
    }
    & > a {
        color: ${props => (props.active ? theme.color50 : theme.color)};
    }
`

const Language = () => {
    return (
        <Container>
            <LanguageList>
                <IntlContextConsumer>
                    {({ languages, language: currentLocale }) =>
                        languages.map(language => (
                            <LanguageItem
                                key={language}
                                active={currentLocale === language}
                            >
                                <a onClick={() => changeLocale(language)}>
                                    {language}
                                </a>
                            </LanguageItem>
                        ))
                    }
                </IntlContextConsumer>
            </LanguageList>
        </Container>
    )
}

export default Language
