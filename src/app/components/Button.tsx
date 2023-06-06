"use client";
import { clsx } from "clsx";
interface ButtonProps {
  widthFull?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  name: string;
  onClick?: () => void;
  disabled: boolean;
  danger?: boolean;
  secondary?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  widthFull,
  type,
  name,
  onClick,
  disabled,
  danger,
  secondary,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={clsx(
        "py-1.5 px-2 rounded-md hover:bg-hover font-semibold outline-none",
        widthFull && "w-full",
        danger && "bg-red-500 hover:bg-red-600 focus-visible:outline-red-600",
        secondary && "bg-gray hover:bg-gray/50 focus-visible:outline-gray",
        !danger &&
          !secondary &&
          "bg-primary hover:bg-primary focus-visible:outline-primary"
      )}
    >
      {name}
    </button>
  );
};

export default Button;
