"use client";

import classNames from "classnames";
import css from "./character.module.scss";
import { useCallback, useEffect, useRef } from "react";

export default function Character() {
  const leftEyesRef = useRef<HTMLDivElement>(null);
  const rightEyesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);

  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    if (
      !leftEyesRef.current ||
      !rightEyesRef.current ||
      !characterRef.current ||
      !containerRef.current
    ) {
      return;
    }

    let x = "50%";

    const sideSize =
      (containerRef.current.clientWidth - characterRef.current.clientWidth) / 2;

    if (e.clientX < sideSize) {
      x = "-50% - 15px";
    } else if (
      e.clientX >= sideSize &&
      e.clientX <= containerRef.current.clientWidth - sideSize
    ) {
      x = "-50%";
    } else {
      x = "-50% + 15px";
    }

    leftEyesRef.current.style.transform = `translate(calc(${x}), -50%)`;
    rightEyesRef.current.style.transform = `translate(calc(${x}), -50%)`;
  }, []);

  const mouseLeaveHandler = useCallback(() => {
    if (!leftEyesRef.current || !rightEyesRef.current) {
      return;
    }
    leftEyesRef.current.style.transform = `translate(-50%, -50%)`;
    rightEyesRef.current.style.transform = `translate(-50%, -50%)`;
  }, []);

  useEffect(() => {
    containerRef.current?.addEventListener("mousemove", mouseMoveHandler);
    containerRef.current?.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      containerRef.current?.removeEventListener("mousemove", mouseMoveHandler);
      containerRef.current?.removeEventListener(
        "mouseleave",
        mouseLeaveHandler,
      );
    };
  }, []);

  return (
    <div ref={containerRef} className={css.wrapper}>
      <div ref={characterRef} className={css.character}>
        <div className={classNames(css.eyes, css.eyes__left)}>
          <div ref={leftEyesRef} />
        </div>
        <div className={classNames(css.eyes, css.eyes__right)}>
          <div ref={rightEyesRef} />
        </div>
        <div className={classNames(css.eyebrows, css.eyebrows__left)}></div>
        <div className={classNames(css.eyebrows, css.eyebrows__right)}></div>
        <div className={css.mouth}></div>
      </div>
    </div>
  );
}
