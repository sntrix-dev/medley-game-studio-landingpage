import { FC } from "react";
import styled from "styled-components";
import { Container } from "..";
import { ConsoleIcon, PlayIcon } from "../../../packages/design/icons";

interface ItemProps {
  title: string;
  content: string;
}

export const AboutSection: FC = () => {
  const Item: FC<ItemProps> = ({ content, title }) => (
    <div className="w-full flex space-x-4 text-white items-start">
      <div className="w-9 h-9 bg-grey rounded-full flex items-center justify-center">
        <ConsoleIcon />
      </div>
      <div className="w-[calc(100%-3rem)] space-y-2">
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );

  return (
    <section className="w-full lg:h-screen lg:max-h-[600px] my-10">
      <Container className="w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[calc(60%-2rem)_40%] gap-8 p-4">
          <div className="relative w-full overflow-hidden ">
            <img
              src="/images/banners/cod-1.jpg"
              alt=""
              width="100%"
              height="100%"
            />
            <Button className="w-20 h-20 flex items-center justify-center absolute bottom-[calc(50%-(5rem/2))] left-[calc(50%-(5rem/2))] p-0 rounded-full text-white">
              <PlayIcon />
            </Button>
            <Overlay className="w-full h-full absolute top-0 left-0" />
          </div>
          <div className="space-y-8">
            <h1 className="text-2xl lg:text-4xl font-bold text-white text-left">
              We are the Best Game
              <br /> Distributors for all Gamers.
            </h1>
            <div className="space-y-4">
              <Item
                title="Title Goes Here"
                content="Find wholesale prices and suppliers of video games, consoles, and game accessories."
              />
              <Item
                title="Title Goes Here"
                content="Find wholesale prices and suppliers of video games, consoles, and game accessories."
              />
              <Item
                title="Title Goes Here"
                content="Find wholesale prices and suppliers of video games, consoles, and game accessories."
              />
              <Item
                title="Title Goes Here"
                content="Find wholesale prices and suppliers of video games, consoles, and game accessories."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Button = styled.button`
  background: linear-gradient(267.28deg, #7b61ff 24%, #aa82ff 73.95%);
`;

const Overlay = styled.div`
  background: radial-gradient(
      53.49% 53.49% at 50.07% 50%,
      rgba(28, 28, 40, 0) 0%,
      rgba(28, 28, 40, 0.7) 100%
    ),
    url(346630.jpg);
`;
