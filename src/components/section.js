import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem;
`

const SectionTitle = styled.h1`
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 600;
    font-size: 2em;
`

const Section = props => {
    const { title, id, className } = props
    return (
        <StyledSection id={id} className={className}>
            {title && <SectionTitle>{title}</SectionTitle>}
            {props.children}
        </StyledSection>
    )
}

Section.propTypes = {
    title: PropTypes.string,
}

export default Section
