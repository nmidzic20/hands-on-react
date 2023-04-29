import React from 'react'
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
    Hamburger as HamburgerWrapper,
    HamburgerButton,
    HamburgerImg,
    HamburgerMenu,
    HamburgerLink
} from "./HamburgerStyle";
import { CancelImg } from '../../utils/styles/generalStyles';

const Hamburger = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
  
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
    <HamburgerWrapper>
        <HamburgerButton onClick={() => { setOpen(!open); console.log("Clicked " + open); }}>
            {open ? <CancelImg/> : <HamburgerImg/>}
        </HamburgerButton>
        <HamburgerMenu open={open}>
            <li><HamburgerLink to="/">Home</HamburgerLink></li>
            <li><HamburgerLink to="/courses">Courses</HamburgerLink></li>
            <li><HamburgerLink to="/sign-in">Sign In</HamburgerLink></li>
            <li><HamburgerLink to="/register">Register</HamburgerLink></li>
        </HamburgerMenu>
    </HamburgerWrapper>
    )
}

export default Hamburger