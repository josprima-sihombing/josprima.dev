"use client";

import Container from "@/components/atoms/container";
import classNames from "classnames";
import dynamic from "next/dynamic";

import { useEffect, useRef, useState } from "react";
import css from "./style.module.scss";
import { ThreeSceneProps } from "./three-scene";

const ThreeScene = dynamic(() => import("./three-scene"), { ssr: false });

export default function HeroSection() {
  const cnTitle = classNames(css.section__title);
  const cnSubTitle = classNames(css.section__sub_title);

  const containerRef = useRef<HTMLDivElement>(null);
  const [sizes, setSizes] = useState<ThreeSceneProps["sizes"]>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setSizes({
      width: containerRef.current?.clientWidth || 0,
      height: containerRef.current?.clientHeight || 0,
    });
  }, [containerRef]);

  useEffect(() => {
    const resizeCallback = () => {
      setSizes({
        width: containerRef.current?.clientWidth || 0,
        height: containerRef.current?.clientHeight || 0,
      });
    };

    window.addEventListener("resize", resizeCallback);

    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);

  return (
    <div className={css.root} ref={containerRef}>
      <ThreeScene sizes={sizes} />
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
