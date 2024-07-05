import { FC } from "react";
import { IconTextFiled } from "../../../packages/design";
import { ChevronRightIcon } from "../../../packages/design/icons";
import { Logo } from "../../logo";

export const SubscribeSection: FC = () => (
  <section className="w-full">
    <div className="w-full max-w-[1280px] mx-auto p-4 py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <Logo />
      <div className="w-full lg:w-[25rem]">
        <IconTextFiled
          bg="bg-[#292945]"
          icon={<ChevronRightIcon />}
          placeholder="Email address"
        />
      </div>
    </div>
  </section>
);
