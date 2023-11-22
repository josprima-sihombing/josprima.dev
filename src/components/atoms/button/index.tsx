import { CSSProperties } from "react";
import css from "./style.module.scss";

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children?: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
};

export default function Button({
  type = "button",
  children,
  className,
  onClick,
  style,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${css.root} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
