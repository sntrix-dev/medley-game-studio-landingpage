import { FC, ReactElement } from "react";
import styled from "styled-components";

interface ServiceCardProps {
  image: string;
  color: string;
  title: string;
  description: string;
  tagIcon: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  color,
  description,
  image,
  tagIcon,
  title,
}) => (
  <CardContainer className="w-[full] relative pb-8">
    <div
      style={{
        background: color,
      }}
      className="w-full h-0.5"
    />

    {/* Image */}
    <div className="w-full p-6 ">
      <div className="relative w-full h-full">
        <img
          src={image}
          alt={title}
          width="100%"
          height="100%"
          className="opacity-50"
        />
        <div className="absolute bottom-0 left-0">
          <img src={tagIcon} alt="" />
        </div>
      </div>
    </div>
    <div className="relative p-2">
      <div className="absolute top-0 left-0 -z-0">
        <img src="/images/icons/bg.svg" alt="" />
      </div>
      <h3 className="z-[2] relative text-white">{title}</h3>
    </div>
    <div className="p-4 text-white font-thin">
      <p className="leading-relaxed">{description}</p>
    </div>
  </CardContainer>
);

const CardContainer = styled.div`
  box-shadow: inset 0px 2px 0px #7b61ff;
  background: #20202e;
`;
