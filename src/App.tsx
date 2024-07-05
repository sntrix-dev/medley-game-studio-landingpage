import React from "react";
import { Navbar } from "./components/navigation";
import { Footer } from "./components/navigation/footer";
import {
  AboutSection,
  BrandsSection,
  ExploreSection,
  HeroSection,
  ServiceSection,
  SubscribeSection,
  TestimonialSection,
} from "./components/sections";

function App() {
  return (
    <div className="bg-base w-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <ServiceSection />
      <AboutSection />
      <TestimonialSection />
      <ExploreSection />
      <SubscribeSection />
      <hr className="text-grey" />
      <Footer />
    </div>
  );
}

export default App;
