import { FC } from "react";
import { Title } from "../../../packages/design";
import { Button } from "../../../packages/design/Button";

export const ExploreSection: FC = () => (
  <section className="w-screen h-[calc(100vh-6.5rem)] overflow-hidden">
    <div className="w-full h-full max-w-[1280px] mx-auto p-4 flex flex-col relative justify-center">
      <div className="space-y-10">
        <div className="space-y-4 relative z-[1]">
          <Title color="#F68E5F">EXPLORE A NEW DIMENSION</Title>
          <h1 className="text-4xl font-bold text-white text-left">
            Ready to unlock your <br /> potentials in a world <br /> of fun?
          </h1>
        </div>
        <div>
          <Button>Join for Free!</Button>
        </div>
      </div>
      <div className="w-[65vw] absolute right-0 z-0">
        <img
          src="/images/banners/cta-1.png"
          width="100%"
          height="100%"
          alt=""
        />
      </div>
    </div>
  </section>
);
