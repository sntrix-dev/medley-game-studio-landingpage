import { FC } from "react";
import styled from "styled-components";
import { Title } from "../../../packages/design";
import { ServiceCard } from "../../Cards";

export const ServiceSection: FC = () => (
  <section className="w-creen h-screen relative">
    <RadialBlur className="-left-[10%]" />
    <RadialBlur className="-right-[10%]" />
    <div className="max-w-[1280px] w-full h-full mx-auto flex flex-col items-center justify-center space-y-20">
      <div className="flex flex-col items-center space-y-4">
        <Title color="#F68E5F">What we do</Title>
        <h1 className="text-4xl font-bold text-white text-center">
          Meeting the needs of players <br /> across the world
        </h1>
      </div>

      <div className="w-full grid grid-cols-3 gap-10">
        <ServiceCard
          color="#61FFD9"
          description="List of carefully selected, verified, high quality suppliers in different regions worldwide."
          image="/images/meetings/meeting-1.jpg"
          tagIcon="/images/icons/game.svg"
          title="Video Game Suppliers"
        />
        <ServiceCard
          color="#7B61FF"
          description="Find wholesale prices and suppliers of video games, consoles, and game accessories."
          image="/images/meetings/meeting-2.jpg"
          tagIcon="/images/icons/whole-sale.svg"
          title="Wholesale Marketplace"
        />
        <ServiceCard
          color="#FF616A"
          description="Release dates and information on upcoming or recently released video games."
          image="/images/meetings/meeting-3.jpg"
          tagIcon="/images/icons/future.svg"
          title="Future Releases"
        />
      </div>
    </div>
  </section>
);

const RadialBlur = styled.div`
  background: linear-gradient(267.28deg, #7b61ff 24%, #aa82ff 73.95%);
  opacity: 0.2;
  filter: blur(100px);
  border-radius: 999px;
  opacity: 0.2;
  position: absolute;
  width: 35rem;
  height: 35rem;
  bottom: 25%;
  z-index: 0;
`;
