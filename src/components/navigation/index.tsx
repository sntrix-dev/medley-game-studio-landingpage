import { FC, useEffect, useRef, useState } from "react";
import { IconTextFiled } from "../../packages/design";
import { SearchIcon } from "../../packages/design/icons";
import { Logo } from "../logo";
import { Nav } from "./nav";
import { ToggleButton } from "../../packages/design/Button";
import Sidebar from "./sidebar";

export const Navbar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [scrolledUp, setScrolledUp] = useState<boolean>(false);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", (e) => {
        setScrolledUp(window.scrollY > 64);
      });
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    }
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`w-full fixed top-0 left-0 z-10 transition-all duration-300 ease-in-out ${
          isSidebarOpen || scrolledUp ? "bg-base" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between p-4">
          <Logo />
          <div className="lg:flex items-center space-x-10 hidden">
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
          <div className="lg:hidden">
            <ToggleButton
              open={isSidebarOpen}
              handleToggle={setIsSidebarOpen}
            />
          </div>
        </div>
      </header>
      <Sidebar show={isSidebarOpen} />
    </>
  );
};
