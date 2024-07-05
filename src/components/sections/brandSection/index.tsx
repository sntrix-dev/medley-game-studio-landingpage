import { FC } from "react";
import styled from "styled-components";

export const BrandsSection: FC = () => (
  <section className="w-full overflow-hidden">
    <div className="max-w-[1280px] w-full mx-auto flex items-center justify-center gap-x-8 gap-y-4 p-4">
      <ImageContainer>
        <Image src="/images/brands/steam.svg" alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src="/images/brands/microsoft.svg" alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src="/images/brands/x-box.svg" alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src="/images/brands/play-station.svg" alt="" />
      </ImageContainer>
      <ImageContainer>
        <Image src="/images/brands/play.svg" alt="" />
      </ImageContainer>
    </div>
  </section>
);

const ImageContainer = styled.div`
  width: 10rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
