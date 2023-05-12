import { Button } from "../../utils/styles/generalStyles";
import { Link, useNavigate } from "react-router-dom";
import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoImg,
  HeaderLink,
  HeaderNav,
  HeaderButton,
} from "./HeaderStyle";
import Hamburger from "../Hamburger/Hamburger";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <LogoImg />
        </Link>
        <Hamburger />
        <HeaderNav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/courses">Courses</HeaderLink>
          <HeaderLink to="/profile">Profile</HeaderLink>
          <HeaderButton onClick={() => navigate("/sign-in")} isOutline>
            Sign In
          </HeaderButton>
          <Button onClick={() => navigate("/register")}>Register</Button>
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
