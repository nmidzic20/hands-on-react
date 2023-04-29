import styled from "styled-components";
import { colors, breakpoints } from "../../utils/styles/theme"
import {ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg"
import { NavLink } from "react-router-dom";

export const Hamburger = styled.div`

    @media screen and (${breakpoints.desktop}) {    
        display: none;
    }
`

export const HamburgerButton = styled.button`
    z-index: 10;
    position: relative; //neccessary for z-index to work, since this is now part of div (Hamburger)!
    outline: none;
    border: none;
    background-color: ${colors.bgPrimary};

    &:hover {
        cursor: pointer;
    }
`

export const HamburgerImg = styled(HamburgerIcon)`
    display: block;
    width: 32px;
    height: 32px;
`

export const HamburgerLink = styled(NavLink)`
    transition: color 0.3s ease-out;

    &.active {
        color: ${colors.primary};
        font-weight: 600;
    }

    &:hover {
        color: ${colors.primary};
    }
`

export const HamburgerMenu = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    border: 2px solid green;
    z-index: 5;
    background-color: ${colors.bgSecondary};

    li {
    padding: 18px 10px;
    }
`