import { ButtonHTMLAttributes } from "react";
import { EButton, EButtonRadius, ETWSizes } from "../../lib/constants/enum";

export interface IDefaultButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  buttonType?: keyof typeof EButton;
  buttonSize?: keyof typeof ETWSizes;
  buttonRadius?: keyof typeof EButtonRadius;
}

export const DefaultButton: React.FC<IDefaultButton> = ({
  buttonText,
  buttonType = "default",
  buttonSize = "base",
  buttonRadius = "default",
  ...props
}) => {
  const getButtonType = () => {
    switch (buttonType) {
      case "error":
        return "bg-red-500 text-sm font-bold hover:bg-red-700";
      case "loading":
        return "bg-blue-700 text-sm font-bold cursor-not-allowed";
      case "warning":
        return "bg-orange-500 text-sm font-bold hover:bg-orange-700";
      default:
        return "bg-blue-500 text-sm font-bold hover:bg-blue-700";
    }
  };

  const getButtonSize = () => {
    switch (buttonSize) {
      case "xs":
        return "px-4 py-2 text-xs";
      case "sm":
        return "px-4 py-2 text-sm";
      case "lg":
        return "px-10 py-4 text-lg";
      case "xl":
        return "px-12 py-5 text-xl";
      case "2xl":
        return "px-16 py-6 text-2xl";
      default:
        return "px-6 py-3 text-base";
    }
  };

  const getRadius = () => {
    switch (buttonRadius) {
      case "full":
        return "rounded-full";
      case "xl":
        return "rounded-xl";
      case "lg":
        return "rounded-lg";
      case "md":
        return "rounded-md";
      case "sm":
        return "rounded-sm";
      case "default":
        return "rounded";
      default:
        return "rounded-none";
    }
  };

  const type = getButtonType();
  const size = getButtonSize();
  const borderRadius = getRadius();
  const custom = type + " " + size + " " + borderRadius;

  return (
    <button
      disabled={buttonType === "loading"}
      {...props}
      className={`font-bold rounded text-white transition-colors ${custom} w-full`}
    >
      {buttonType === "loading" ? "Loading..." : buttonText}
    </button>
  );
};
