import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { theme, device } from "@styles"

const StyledContainer = styled.div`
    position: fixed;
    display: none;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: ${props =>
        props.menuOpen ? `rgba(10, 10, 10, 0.75)` : `transparent`};
    visibility: ${props => (props.menuOpen ? "visible" : "hidden")};
    z-index: 10;

    @media ${device.largeDown} {
        display: flex;
    }
`
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.9em;
    letter-spacing: 0.2em;
    z-index: 12;
`

const Sidebar = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${theme.lightGrey};
    padding: 50px;
    width: 40vw;
    height: 100%;
    position: relative;
    right: 0;
    margin-left: auto;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? "visible" : "hidden")};

    @media ${device.smallDown} {
        width: 50vw;
    }
`

const NavList = styled.ol`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
`

const NavLink = styled(Link)`
    padding: 0.7rem;
    color: ${theme.color};
    text-decoration: none;
`
const Menu = ({ navItems, menuOpen, toggleMenu }) => {
    return (
        <StyledContainer
            menuOpen={menuOpen}
            tabIndex={menuOpen ? 1 : -1}
            aria-hidden={!menuOpen}
        >
            <Sidebar
                menuOpen={menuOpen}
                tabIndex={menuOpen ? 1 : -1}
                aria-hidden={!menuOpen}
            >
                <Nav>
                    <NavList>
                        {navItems.map(({ name, to }, i) => (
                            <li key={name}>
                                <NavLink to={to} onClick={toggleMenu}>
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </NavList>
                </Nav>
            </Sidebar>
        </StyledContainer>
    )
}

export default Menu
