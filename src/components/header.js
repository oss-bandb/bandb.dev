import React from "react"
import styled from "styled-components"
import { Navigation } from "@components"


const StyledNavItem = styled.div`
  padding-right: 0.7rem;
`

const Header = () => {
  return (
    <header>
      <Navigation />
    </header>
  )
}

export default Header
