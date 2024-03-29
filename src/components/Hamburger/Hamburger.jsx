import React from "react";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Hamburger as HamburgerWrapper,
  HamburgerButton,
  HamburgerImg,
  HamburgerMenu,
  HamburgerLink,
  HamburgerCancelWrapper,
} from "./HamburgerStyle";
import { CancelImg } from "../../utils/styles/generalStyles";
import { AuthContext } from "../../context/AuthContext";

const Hamburger = ({ signOut }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const { isLoggedIn } = useContext(AuthContext);
  const { isAdmin } = useContext(AuthContext);

  return (
    <HamburgerWrapper>
      <HamburgerButton onClick={() => setOpen(!open)}>
        {open ? (
          <HamburgerCancelWrapper>
            <CancelImg />
          </HamburgerCancelWrapper>
        ) : (
          <HamburgerImg />
        )}
      </HamburgerButton>
      <HamburgerMenu open={open}>
        <li>
          <HamburgerLink to="/">Home</HamburgerLink>
        </li>
        <li>
          <HamburgerLink to="/courses">Courses</HamburgerLink>
        </li>
        <li>
          {isLoggedIn && isAdmin && (
            <HamburgerLink to="/profile">Profile</HamburgerLink>
          )}
        </li>
        <li>
          <HamburgerLink
            to="/sign-in"
            onClick={() => {
              isLoggedIn ? signOut() : navigate("/sign-in");
            }}
          >
            {isLoggedIn ? "Sign Out" : "Sign In"}
          </HamburgerLink>
        </li>
        <li>
          {!isLoggedIn && (
            <HamburgerLink to="/register">Register</HamburgerLink>
          )}
        </li>
      </HamburgerMenu>
    </HamburgerWrapper>
  );
};

export default Hamburger;
