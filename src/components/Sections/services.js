import React from "react"
import styled from "styled-components"
import { Section, Service } from "@components"

const StyledSection = styled(Section)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const StyledGrid = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 15px;
`

const Services = ({ data }) => {
    const { title, content } = data[0].node.frontmatter
    return (
        <StyledSection title={title}>
            <StyledGrid>
                {content.map((service, i) => (
                    // Index as key is generally a bad idea, but shouldn't matter in this case
                    <Service key={i} service={service} />
                ))}
            </StyledGrid>
        </StyledSection>
    )
}

export default Services
