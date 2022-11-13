import { FC } from "react";
import styled from "styled-components";
import { Title } from "../../../packages/design";
import { Button } from "../../../packages/design/Button";
import { ArrowDownIcon } from "../../../packages/design/icons";

export const HeroSection: FC = () => (
  <section className="w-screen h-screen relative z-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-screen h-screen -z-50 overflow-hidden">
      <img
        src="/images/banners/lambo-1.jpg"
        width="100%"
        height="100%"
        alt=""
        className="z-0"
      />
      <OverlayUp className="absolute top-0 left-0 z-[2] -rotate-180 w-screen h-screen" />
      <OverlayDown className="absolute bottom-0 left-0 z-[2] w-screen h-screen" />
    </div>
    <div className="max-w-[1280px] w-full h-full mx-auto">
      <div className="z-[10] w-full h-full flex items-center justify-center flex-col space-y-8">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <Title color="white">GAMEWORLD DISTRIBUTORS</Title>

          <h1 className="text-4xl font-bold text-white text-center">
            Connecting Players & <br /> Games in an Immersive environment.
          </h1>
        </div>

        <Button className=" py-2 px-10 font-medium text-white rounded-full">
          Become a Member for Free!
        </Button>
      </div>

      <button className="flex items-center space-x-4 text-white absolute top-[90%] left-[calc(50%-(7.145rem/2))]">
        <span>Scroll down</span>
        <span>
          <ArrowDownIcon />
        </span>
      </button>
    </div>
  </section>
);

const OverlayUp = styled.div`
  background: linear-gradient(
    360deg,
    rgba(28, 28, 40, 0.8) 0%,
    rgba(28, 28, 40, 0) 77.78%
  );
`;

const OverlayDown = styled.div`
  background: linear-gradient(360deg, #1c1c28 0%, rgba(28, 28, 40, 0) 77.78%);
`;
