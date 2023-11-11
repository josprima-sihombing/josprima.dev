import css from "./style.module.scss";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  type = "button",
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${css.root} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
