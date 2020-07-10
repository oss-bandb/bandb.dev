import React from "react"
import { colors } from "@configs"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { theme } from "@styles"

const StyledContainer = styled.header`
    display: flex;
    position: fixed;
    width: 100%;
    height: ${theme.navHeight};
    top: 0;
    margin: 0;
    padding: 15px 100px;
    background-color: ${colors.backgroundColor};
    z-index: 11;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.9em;
    letter-spacing: 0.2em;
`
const Logo = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 1.2em;
    letter-spacing: 0.2em;
`

const NavList = styled.ol`
    display: flex;
    justify-content: space-between;
    list-style: none;
`

const NavItem = styled.li`
    /* width: 100%; */
    /* position: relative; */
`
const NavLink = styled(Link)`
    padding: 0.7rem;
    color: ${colors.color};
    text-decoration: none;
`

const Navigation = () => {
    const data = useStaticQuery(graphql`
        {
            dataYaml {
                items {
                    name
                    to
                }
            }
        }
    `)
    const navItems = data.dataYaml.items

    return (
        <StyledContainer>
            <Nav>
                <Logo>
                    <NavLink to="/">Block & Block</NavLink>
                </Logo>
                <NavList>
                    {navItems.map(({ name, to }, i) => (
                        <NavItem key={name}>
                            <NavLink to={to}>{name}</NavLink>
                        </NavItem>
                    ))}
                </NavList>
            </Nav>
        </StyledContainer>
    )
}

export default Navigation
