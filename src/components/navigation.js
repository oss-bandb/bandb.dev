import React from "react"
import { Navigation as NavigationConfig, Colors } from "@configs"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  flex-direction: column;
`
/* background-color: ${Colors.backgorundColor}; */

const NavList = styled.ol`
  list-style: none;
`

const Navigation = () => {
  return (
    <div>
      <Nav>
        <NavList>
          {NavigationConfig.map(({ name, to }, i) => (
            <li>
              <Link to={to}>{name}</Link>
            </li>
          ))}
        </NavList>
      </Nav>
    </div>
  )
}

export default Navigation
