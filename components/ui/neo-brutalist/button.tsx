import CoinImage from "@/components/coin-image";
import classNames from "classnames";

type ButtonType = {
  buttonText: string;
  rounded?: "none" | "md" | "full";
  size?: "sm" | "md" | "lg";
  color?:
    | "violet"
    | "pink"
    | "red"
    | "orange"
    | "yellow"
    | "lime"
    | "cyan"
    | "black"
    | "gray";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  shouldshowCoin?: boolean;
};

const NeoButton = ({
  buttonText = "Enabled",
  rounded = "none",
  size = "md",
  color = "cyan",
  disabled,
  className,
  onClick,
  type,
  shouldshowCoin = false,
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "border-black border-2 space-x-1.5",

        {
          "bg-violet-200 hover:bg-violet-300 active:bg-violet-400":
            color === "violet" && !disabled,
        },
        {
          "bg-pink-200 hover:bg-gray-200 active:bg-pink-400":
            color === "pink" && !disabled,
        },
        {
          "bg-red-200 hover:bg-red-300 active:bg-red-400":
            color === "red" && !disabled,
        },
        {
          "bg-orange-200 hover:bg-orange-300 active:bg-orange-400":
            color === "orange" && !disabled,
        },
        {
          "bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-400":
            color === "yellow" && !disabled,
        },
        {
          "bg-gray-200 hover:bg-gray-800 active:bg-lime-400":
            color === "lime" && !disabled,
        },
        {
          "bg-gray-800 hover:bg-gray-900 text-yellow-100 border border-white active:bg-gray-900":
            color === "black" && !disabled,
        },
        {
          "bg-gray-200 hover:bg-gray-300 active:bg-gray-400":
            color === "gray" && !disabled,
        },
        {
          "bg-cyan-200 hover:bg-cyan-300 active:bg-cyan-400":
            color === "cyan" && !disabled,
        },
        { "rounded-none": rounded === "none" },
        { "rounded-md": rounded === "md" },
        { "rounded-full": rounded === "full" },
        {
          "h-10 px-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:border-b-[1px]":
            size === "sm",
        },
        {
          "h-12 px-5 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:border-b-[1px]":
            size === "md",
        },
        {
          "h-14 px-5 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:border-b-[1px]":
            size === "lg",
        },
        {
          "border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]":
            disabled,
        },
        className
      )}
      disabled={disabled}
      type={type}
    >
      <h3>{buttonText}</h3>
      {shouldshowCoin ? <CoinImage height={20} width={20} /> : null}
    </button>
  );
};

export default NeoButton;
