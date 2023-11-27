import { CSSProperties } from "react";
import css from "./style.module.scss";
import classNames from "classnames";

export type ButtonVariantType = "contained" | "outlined";

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children?: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
  variant?: ButtonVariantType;
  isLoading?: boolean;
};

export default function Button({
  type = "button",
  children,
  className,
  onClick,
  style,
  variant = "contained",
  isLoading = false,
}: ButtonProps) {
  const cn = classNames(css.root, className, {
    [css.root__contained]: variant === "contained",
    [css.root__outlined]: variant === "outlined",
  });

  return (
    <button
      type={type}
      className={cn}
      onClick={onClick}
      style={style}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}
