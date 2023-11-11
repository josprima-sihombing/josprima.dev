import classNames from "classnames";
import css from "./style.module.scss";

type GridProps = {
  className?: string;
  column?: number;
  gap?: string;
  children: React.ReactNode;
};

export default function Grid({
  className,
  children,
  column = 2,
  gap = "18px",
}: GridProps) {
  const cn = classNames(css.root, className);

  return (
    <div
      className={cn}
      style={{
        gap,
        gridTemplateColumns: `repeat(${column}, 1fr)`,
        rowGap: "32px",
      }}
    >
      {children}
    </div>
  );
}
