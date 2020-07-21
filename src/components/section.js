import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem;
    margin-top: 5rem;
`

const SectionTitle = styled.h1`
    margin-bottom: 3rem;
    text-align: center;
    font-weight: 600;
    font-size: 2em;
`

const Content = styled.div`
    max-width: 1000px;
`

const Section = props => {
    const { title, id, className } = props

    return (
        <StyledSection id={id} className={className}>
            {title && <SectionTitle>{title}</SectionTitle>}
            <Content>{props.children}</Content>
        </StyledSection>
    )
}

Section.propTypes = {
    title: PropTypes.string,
}

export default Section
