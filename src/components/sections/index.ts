import { BrandsSection } from "./brandSection";
import { HeroSection } from "./heroSection";
import { ServiceSection } from "./service"
import { SubscribeSection } from "./subscribe";
import { ExploreSection } from "./explore";
import { TestimonialSection } from "./testimonial";
import { AboutSection } from "./About-Us";
import styled from "styled-components";

export {
    HeroSection,
    BrandsSection,
    ServiceSection,
    SubscribeSection,
    ExploreSection,
    TestimonialSection,
    AboutSection
}

export const Section = styled.section`
width: 100vw;
height: 100vh;
max-height: 600px
`;

export  const Container = styled.div`
max-width: 1280px;
margin-left: auto;
margin-right: auto;
width: 100%;
height: 100%;
`;