import classNames from "classnames";
import css from "./style.module.scss";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  const cn = classNames(css.root, className);

  return <div className={cn}>{children}</div>;
}
