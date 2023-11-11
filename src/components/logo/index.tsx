import css from "./style.module.scss";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return <h1 className={`${css.root} ${className}`}>Josprima.dev</h1>;
}
