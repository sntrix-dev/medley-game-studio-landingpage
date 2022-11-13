import { FC } from "react";

interface TitleProps {
  children: string | JSX.Element | JSX.Element[];
  color?: string;
}

export const Title: FC<TitleProps> = ({ children, color = "currentColor" }) => (
  <div
    style={{
      color: color,
    }}
    className="w-[20rem] flex items-center space-x-2"
  >
    <span
      style={{
        backgroundColor: color,
      }}
      className="h-0.5  w-full rounded-full"
    />
    <h3 className="uppercase  font-medium text-sm w-max whitespace-nowrap">
      {children}
    </h3>
    <span
      style={{
        backgroundColor: color,
      }}
      className="h-0.5  w-full rounded-full"
    />
  </div>
);
