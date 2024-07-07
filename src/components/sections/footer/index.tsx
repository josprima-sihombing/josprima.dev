import cn from "classnames";
import Container from "../../atoms/container";
import css from "./style.module.scss";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const classNames = cn(css.root, className);

  return (
    <footer className={classNames}>
      <Container>
        <p>Josprima.dev&copy;2023</p>
      </Container>
    </footer>
  );
}
