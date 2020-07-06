import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    padding: 50px 0px;
    max-width: 1000px;
`

const SectionTitle = styled.h2`
    margin-bottom: 60px;
    text-align: center;
    font-weight: 600;
`

const Section = ({ children, title }) => (
    <StyledSection>
        <SectionTitle>{title}</SectionTitle>
        <div>{children}</div>
    </StyledSection>
)

Section.propTypes = {
    title: PropTypes.string,
}

export default Section
