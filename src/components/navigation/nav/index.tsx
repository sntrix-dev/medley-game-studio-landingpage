import { FC } from "react";
import { routes } from "../../../packages/constants";

interface NavProps {
  name: string;
  link?: string;
}
export const Nav: FC<NavProps> = ({ name, link = routes.home }) => (
  <a href={link} className="text-white w-max text-sm">
    {name}
  </a>
);
