import { FC } from "react";
import styled from "styled-components";
import { Button } from "../../../packages/design/Button";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../../packages/design/icons";
import { Nav } from "./nav";

export const Footer: FC = () => (
  <footer className="w-screen">
    <div className="w-full max-w-[1280px] mx-auto p-4">
      <div className="w-full grid grid-cols-2 gap-16 py-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-white text-left">
            Get updates on your <br /> favourite games
          </h1>
          <div className="flex items-center space-x-10">
            <text className="text-white">Ready to explore?</text>
            <Button>Get Started</Button>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-8">
          <section className="space-y-4">
            <Title>Services</Title>
            <NavContainer className="space-y-2">
              <Nav name="Our Stores" />
              <Nav name="Campaigns" />
              <Nav name="Tournaments" />
              <Nav name="Offline" />
            </NavContainer>
          </section>
          <section className="space-y-4">
            <Title>About</Title>
            <NavContainer className="space-y-2">
              <Nav name="Our Story" />
              <Nav name="Benefits" />
              <Nav name="Team" />
              <Nav name="Careers" />
            </NavContainer>
          </section>
          <section className="space-y-4">
            <Title>Help</Title>
            <NavContainer className="space-y-2">
              <Nav name="FAQs" />
              <Nav name="Contact Us" />
            </NavContainer>
          </section>
        </div>
      </div>

      <div className="flex items-center justify-between py-4">
        <div className="space-x-8">
          <Nav name="Terms & Conditions" />
          <Nav name="Privacy Policy" />
        </div>
        <div className="flex items-center space-x-4 text-grey">
          <FacebookIcon size={0.8} />
          <TwitterIcon size={0.8} />
          <InstagramIcon size={0.8} />
        </div>
      </div>

      <div className="flex items-center justify-center w-full p-2 text-grey/50">
        Copyright 2021 Medley
      </div>
    </div>
  </footer>
);

const Title = styled.h3`
  color: #bdc3ff;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: starting;
  flex-flow: column;
`;
