import {Button} from "../../utils/styles/generalStyles";
import { Link, useNavigate } from "react-router-dom";
import { 
    Header as HeaderWrapper, 
    HeaderInner, 
    Hamburger, 
    LogoImg, 
    HeaderLink, 
    HeaderNav 
} from "./HeaderStyle";

const Header = () => {

    const navigate = useNavigate();

    return (
        <HeaderWrapper>
            <HeaderInner>
                <Link to="/">
                    <LogoImg/>
                </Link>
                <Hamburger/>
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