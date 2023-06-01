import styled from "styled-components";
import { colors, breakpoints } from "../../utils/styles/theme";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { Button } from "../../utils/styles/generalStyles";

export const Header = styled.header`
  background-color: ${colors.bgSecondary};
`;

export const HeaderButton = styled(Button)`
  margin-right: 32px;
`;

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
`;

export const HeaderNav = styled.nav`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

export const LogoImg = styled(LogoIcon)`
  path {
    fill: ${colors.primary};
  }
`;

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
`;
