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
import { useEffect } from "react";

const Header = ({ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }) => {
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/");
  }

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <LogoImg />
        </Link>
        <Hamburger
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
          signOut={signOut}
        />
        <HeaderNav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/courses">Courses</HeaderLink>
          {isLoggedIn && isAdmin && (
            <HeaderLink to="/profile">Profile</HeaderLink>
          )}
          <HeaderButton
            onClick={() => {
              isLoggedIn ? signOut() : navigate("/sign-in");
            }}
            isOutline
          >
            {isLoggedIn ? "Sign Out" : "Sign In"}
          </HeaderButton>
          {!isLoggedIn && (
            <Button onClick={() => navigate("/register")}>Register</Button>
          )}
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
