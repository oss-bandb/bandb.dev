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
    z-index: 10;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateX(${props => (props.open ? 0 : 100)}vw);
    visibility: ${props => (props.open ? "visible" : "hidden")};

    @media screen and (${device.largeDown}) {
        display: flex;
    }
`

const Sidebar = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${theme.lightGrey};
    padding: 50px;
    width: 50vw;
    height: 100%;
    position: relative;
    right: 0;
    margin-left: auto;
    /* font-family: ${fonts.SFMono}; */
    /* box-shadow: -10px 0px 30px -15px ${colors.shadowNavy}; */
    /* ${media.thone`padding: 25px;`};
    ${media.phablet`width: 75vw;`};
    ${media.tiny`padding: 10px;`}; */
    @media screen and (${device.smallDown}) {
        width: 75vw;
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
const Menu = ({ navItems, open }) => {
    return (
        <StyledContainer
            open={open}
            tabIndex={open ? 1 : -1}
            aria-hidden={!open}
        >
            <Sidebar>
                <NavList>
                    {navItems.map(({ name, to }, i) => (
                        <li key={name}>
                            <NavLink to={to}>{name}</NavLink>
                        </li>
                    ))}
                </NavList>
            </Sidebar>
        </StyledContainer>
    )
}

export default Menu
