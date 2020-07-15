import React, { useState } from "react"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Link, useStaticQuery, graphql } from "gatsby"
import { theme, device } from "@styles"
import { Menu } from "@components"

const StyledContainer = styled.header`
    display: flex;
    position: fixed;
    width: 100%;
    height: ${theme.navHeight};
    top: 0;
    margin: 0;
    padding: 15px 100px;
    background-color: ${theme.backgroundColor};
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
    z-index: 12;
`
const Brand = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 1.2em;
    letter-spacing: 0.2em;
    white-space: nowrap;
`

const NavList = styled.ol`
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media screen and (${device.largeDown}) {
        display: none;
    }
`

const NavLink = styled(Link)`
    padding: 0.7rem;
    color: ${theme.color};
    text-decoration: none;
`

const HamburgerContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    background-color: transparent;
    border: 0;
    padding: 15px;
    width: ${theme.hamburgerMenu.width};
    height: ${theme.hamburgerMenu.height};

    @media screen and (${device.largeDown}) {
        display: flex;
    }
`

const HamburgerBox = styled.div`
    position: relative;
    display: inline-block;
`

const Hamburger = styled.div`
    width: ${theme.hamburgerMenu.width};
    height: ${theme.hamburgerMenu.lineHeight};
    background: ${props => (props.open ? `transparent` : theme.color)};
    border-radius: 4px;
    transition: all 0.5s ease-in-out;

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: auto;
        right: 0;
        width: ${theme.hamburgerMenu.width};
        height: ${theme.hamburgerMenu.lineHeight};
        background: #fff;
        border-radius: 4px;
        transition: all 0.5s ease-in-out;
    }

    &::before {
        transform: ${props =>
            props.open ? `rotate(45deg)` : `translateY(10px)`};
    }

    &::after {
        transform: ${props =>
            props.open ? `rotate(-45deg)` : `translateY(-10px)`};
    }
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
    const [open, setOpen] = useState(false)
    const navItems = data.dataYaml.items

    const toggleMenu = () => {
        console.log("toggle")
        setOpen(!open)
    }

    return (
        <StyledContainer>
            <Nav>
                <Brand>
                    <NavLink to="/">Block &amp; Block</NavLink>
                </Brand>

                <TransitionGroup component={null}>
                    <CSSTransition classNames="fade" timeout={0}>
                        <HamburgerContainer onClick={toggleMenu}>
                            <HamburgerBox>
                                <Hamburger open={open} />
                            </HamburgerBox>
                        </HamburgerContainer>
                    </CSSTransition>
                </TransitionGroup>

                <NavList>
                    {navItems.map(({ name, to }, i) => (
                        <li key={name}>
                            <NavLink to={to}>{name}</NavLink>
                        </li>
                    ))}
                </NavList>
            </Nav>
            <Menu navItems={navItems} open={open} />
        </StyledContainer>
    )
}

export default Navigation
