import classNames from "classnames";
import css from "./style.module.scss";

type RowProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Row({ className, children }: RowProps) {
  const cn = classNames(css.root, className);

  return <div className={cn}>{children}</div>;
}
