import { Dispatch, FC } from "react";

interface ToggleButtonProps {
  open: boolean;
  handleToggle: Dispatch<React.SetStateAction<boolean>>;
}

const ToggleButton: FC<ToggleButtonProps> = ({ handleToggle, open }) => {
  return (
    <button
      className={`w-6 h-6 flex items-center justify-center transition-all ease-in-out flex-col relative ${
        open ? "gap-0" : "gap-2"
      }`}
      onClick={() => handleToggle((prevState) => !prevState)}
    >
      <span
        className={`bg-white h-0.5 w-full block transition-all ease-in-out  ${
          open ? "rotate-45 absolute" : ""
        }`}
      />
      <span
        className={`bg-white h-0.5 w-full block  ${
          open ? "hidden absolute" : ""
        }`}
      />
      <span
        className={`bg-white h-0.5 w-full block transition-all ease-in-out  ${
          open ? "-rotate-45 absolute" : ""
        }`}
      />
    </button>
  );
};

export default ToggleButton;
