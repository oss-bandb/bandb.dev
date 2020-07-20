import React, { forwardRef } from "react"
import styled from "styled-components"
import { theme } from "@styles"

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    padding: 2rem 1.75rem;
    height: 100%;
    background-color: ${theme.secondaryColor};
`

const StyledTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
`

const Service = forwardRef(({ service }, ref) => {
    return (
        <StyledContainer ref={ref}>
            <StyledTitle>{service.key}</StyledTitle>
            <p>{service.description}</p>
        </StyledContainer>
    )
})

export default Service
