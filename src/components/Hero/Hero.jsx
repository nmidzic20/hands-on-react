import HeroImage from "../../assets/images/landing.jpg"
import {Button} from "../../utils/styles/generalStyles";
import { useNavigate } from "react-router-dom";
import { 
  Hero as HeroWrapper,
  HeroImg,
  HeroContent, 
  HeroContentInner, 
  HeroFigure, 
  HeroOverlay, 
  HeroSubtitle, 
  HeroTextCard, 
  HeroTitle 
} from "./HeroStyle";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroWrapper>
      <HeroFigure>
        <HeroImg 
          src={HeroImage}
          alt="Speck Academy Hero"/>
      </HeroFigure>
      <HeroOverlay/>
      <HeroContent>
        <HeroContentInner>
          <HeroTextCard>
            <HeroTitle>Speck Academy 2023 powered by FOI</HeroTitle>
            <HeroSubtitle>
              Make a turnaround in your career or upgrade your current skill
              set with knowledge-based lessons from IT practice.
            </HeroSubtitle>
            <Button onClick={() => navigate("/courses")}>
              Explore courses
            </Button>
          </HeroTextCard>
        </HeroContentInner>
      </HeroContent>
    </HeroWrapper>
  )
}

export default Hero