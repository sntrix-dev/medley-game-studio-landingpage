import { FC } from "react";
import { IconTextFiled } from "../../../packages/design";
import { SearchIcon } from "../../../packages/design/icons";
import { Nav } from "../nav";

interface SidebarProps {
  show: boolean;
}

const Sidebar: FC<SidebarProps> = ({ show }) => {
  return (
    <div
      className={`h-[calc(100vh-64px)] w-full fixed bottom-0 z-50 bg-base px-4 py-10 block lg:hidden transition-all duration-300 ease-in-out ${
        show ? "right-0" : "-right-[110%]"
      }`}
    >
      <div className="w-full">
        <IconTextFiled icon={<SearchIcon />} placeholder="Search" />
      </div>
      <nav className="flex flex-col gap-6 mt-10">
        <Nav name="Home" />
        <Nav name="About" />
        <Nav name="Privacy Policy" />
        <Nav name="Our Shop" />
      </nav>
    </div>
  );
};

export default Sidebar;
