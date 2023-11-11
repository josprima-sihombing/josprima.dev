"use client";

import { MdWarning } from "react-icons/md";

import css from "./style.module.scss";
import Typography from "../typography";

export default function DestroyButton() {
  const getRandomDeg = () => {
    return `${Math.floor(Math.random() * 360)}deg`;
  };

  const getRandomDuration = () => {
    return `${Math.random() * (10 - 2) + 2}s`;
  };

  const handleClick = () => {
    const elements = document.querySelectorAll(
      "a, p, h1, h2, h3, h4, h5, h6, span",
    );

    elements.forEach((element: HTMLElement) => {
      element.style.transition = `all ${getRandomDuration()} ease-in`;
      element.style.transform = `rotate(${getRandomDeg()})`;
    });
  };

  return (
    <button onClick={handleClick} type="button" className={css.root}>
      <Typography>
        <MdWarning />
        Destroy
      </Typography>
    </button>
  );
}
