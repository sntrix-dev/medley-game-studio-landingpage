import { FC } from "react";
import { IconTextFiled } from "../../../packages/design";
import { ChevronRightIcon } from "../../../packages/design/icons";
import { Logo } from "../../logo";

export const SubscribeSection: FC = () => (
  <section className="w-screen">
    <div className="w-full max-w-[1280px] mx-auto p-4 py-8 flex items-center justify-between">
      <Logo />
      <div className="w-[25rem]">
        <IconTextFiled
          bg="bg-[#292945]"
          icon={<ChevronRightIcon />}
          placeholder="Email address"
        />
      </div>
    </div>
  </section>
);
