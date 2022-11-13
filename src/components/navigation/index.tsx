import { FC } from "react";
import { IconTextFiled } from "../../packages/design";
import { SearchIcon } from "../../packages/design/icons";
import { Logo } from "../logo";
import { Nav } from "./nav";

export const Navbar: FC = () => (
  <header className="w-screen fixed top-0 left-0 z-10">
    <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between p-4">
      <Logo />

      <div className="flex items-center space-x-10">
        <nav className="flex items-center space-x-8">
          <Nav name="Home" />
          <Nav name="About" />
          <Nav name="Privacy Policy" />
          <Nav name="Our Shop" />
        </nav>
        <div className="max-w-[15rem]">
          <IconTextFiled icon={<SearchIcon />} placeholder="Search" />
        </div>
      </div>
    </div>
  </header>
);
