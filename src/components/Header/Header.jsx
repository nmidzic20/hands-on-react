import {Button} from "../../utils/styles/generalStyles";
import { Link, useNavigate } from "react-router-dom";
import { 
    Header as HeaderWrapper, 
    HeaderInner, 
    LogoImg, 
    HeaderLink, 
    HeaderNav, 
    // HamburgerButton,
    // HamburgerImg,
    // SideMenuItems,
    // HamburgerLink
} from "./HeaderStyle";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";

const Header = () => {

    const navigate = useNavigate();

    //const [open, setOpen] = useState(false);

    return (
        <HeaderWrapper>
            <HeaderInner>
                <Link to="/">
                    <LogoImg/>
                </Link>
                <Hamburger></Hamburger>
                <HeaderNav>
                    <HeaderLink to="/">Home</HeaderLink>
                    <HeaderLink to="/courses">Courses</HeaderLink>
                    <Button onClick={() => navigate("/register")}>
                        Register
                    </Button>
                </HeaderNav>
            </HeaderInner>
        </HeaderWrapper>
    );
}

export default Header