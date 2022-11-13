import { FC, HTMLAttributes, ReactElement } from "react";

interface IconTextFiledProps extends HTMLAttributes<HTMLInputElement> {
  icon: ReactElement<any, any>;
  bg?: string;
}

export const IconTextFiled: FC<IconTextFiledProps> = ({
  icon,
  bg = "bg-white",
  ...props
}) => (
  <div
    className={`w-full ${bg} rounded-full overflow-hidden flex items-center space-x-2 p-1.5`}
  >
    <input
      {...props}
      className="outline-none px-4 w-[calc(100%-2.25rem)] text-sm font-light bg-base/0"
    />
    <button className="w-7 h-7 bg-primary flex items-center justify-center text-white rounded-full">
      {icon}
    </button>
  </div>
);
