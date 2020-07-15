import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 50px 0px;
    width: 100%;
`

const SectionTitle = styled.h1`
    margin-bottom: 60px;
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
