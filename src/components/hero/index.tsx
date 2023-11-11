import classNames from "classnames";
import Container from "../container";

import css from "./style.module.scss";
import { sourceSerif } from "@/fonts";

export default function HeroSection() {
  const cnTitle = classNames(css.section__title, sourceSerif.className);
  const cnSubTitle = classNames(css.section__sub_title, sourceSerif.className);

  return (
    <div className={css.root}>
      <Container className={css.section}>
        <p className={css.section__intro}>Hi, my name is</p>
        <h2 className={cnTitle}>Josprima Sihombing.</h2>
        <h3 className={cnSubTitle}>I build things for the web.</h3>
        <p className={css.section__description}>
          I specialize in translating design concepts into user-friendly
          interfaces. My passion lies in creating visually appealing and
          high-performance websites. With a keen eye for detail and a commitment
          to staying ahead in the dynamic world of web technologies, I am
          excited to collaborate and contribute to the ever-evolving landscape
          of the web. Let&lsquo;s embark on a journey to craft innovative and
          impactful online solutions together!
        </p>
      </Container>
    </div>
  );
}
