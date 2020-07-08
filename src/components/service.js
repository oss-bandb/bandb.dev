import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    padding: 2rem 1.75rem;
    height: 100%;
    background-color: #232326;
`

const Service = ({ service }) => {
    console.log("service", service)
    return (
        <StyledContainer>
            <p><strong>{service.key}</strong></p>
            <p>{service.description}</p>
        </StyledContainer>
    )
}

export default Service
