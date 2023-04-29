import styled from "styled-components";
import { colors, breakpoints } from "../../utils/styles/theme"
import {ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg"
import {ReactComponent as LogoIcon } from "../../assets/images/logo.svg"
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  background-color: ${colors.bgSecondary};
`

export const HeaderInner = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 0;
    max-width: 930px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1280px;
  }
`
// export const HamburgerButton = styled.button`
//   z-index: 10;
//   outline: none;
//   border: none;
//   background-color: ${colors.bgPrimary};

//   &:hover {
//     cursor: pointer;
//   }
// `

// export const HamburgerImg = styled(HamburgerIcon)`
//   display: block;
//   width: 32px;
//   height: 32px;

//   @media screen and (${breakpoints.desktop}) {    
//     display: none;
//   }
// `

// export const HamburgerLink = styled(NavLink)`
//   transition: color 0.3s ease-out;

//   &.active {
//     color: ${colors.primary};
//     font-weight: 600;
//   }
  
//   &:hover {
//     color: ${colors.primary};
//   }
// `

// export const SideMenuItems = styled.ul`

//   list-style: none;
//   display: flex;
//   flex-flow: column nowrap;
//   position: fixed;
//   transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
//   transition: transform 0.3s ease-in-out;
//   top: 0;
//   right: 0;
//   height: 100vh;
//   width: 300px;
//   padding-top: 3.5rem;
//   border: 2px solid green;
//   z-index: 5;
//   background-color: ${colors.bgSecondary};

//   li {
//     padding: 18px 10px;
//   }
// `

export const HeaderNav = styled.nav`
  display: none;

  @media screen and (${breakpoints.desktop}) {
  display: flex;
  align-items: center;
  }
`

export const LogoImg = styled(LogoIcon)`
  path {
    fill: ${colors.primary};
  }
`

export const HeaderLink = styled(NavLink)`
  margin-right: 32px;
  line-height: 80px;
  transition: color 0.3s ease-out;

  &.active {
    color: ${colors.primary};
    font-weight: 600;
  }
  
  &:hover {
    color: ${colors.primary};
  }
`

