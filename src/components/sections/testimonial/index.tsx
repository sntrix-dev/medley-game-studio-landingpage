import { FC } from "react";
import { Container, Section } from "..";
import { Title } from "../../../packages/design";
import { TestimonialCard } from "../../Cards";

export const TestimonialSection: FC = () => (
  <Section>
    <Container className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Title color="#F68E5F">TESTIMONIALS</Title>
        <h1 className="text-4xl font-bold text-white text-center">
          What our Customers <br /> are saying
        </h1>
      </div>
      <div className="w-full lg:w-[80%] mx-auto grid grid-cols-2 gap-4 mt-20">
        <TestimonialCard
          id={1}
          author="Charles Boyle"
          image="/images/testimonials/testimonial-1.png"
          content="My neighbor has one of these. She works as a gardener and she says its really awesome."
          designation="Graphic Designer"
          rating={5}
        />
        <TestimonialCard
          id={2}
          author="Mary Smith"
          image="/images/testimonials/testimonial-2.png"
          content="One of my hobbies is gaming.
          and when i'm hiking this works 
          great. Medley is ghetto."
          designation="3D Animator"
          rating={5}
        />
      </div>
    </Container>
  </Section>
);
