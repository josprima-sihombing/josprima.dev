import Character from "@/components/character";
import HeroSection from "@/components/sections/hero";
import LatestPost from "@/components/sections/latest-post";
import SlideShow from "@/components/sections/slide-show";
import Image from "next/image";

export default function Home() {
  const logos = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
      alt: "babel",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      alt: "css",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg",
      alt: "eslint",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
      alt: "express",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      alt: "flutter",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
      alt: "git",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
      alt: "github",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg",
      alt: "gulp",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      alt: "html",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      alt: "jest",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      alt: "nextjs",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      alt: "sass",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      alt: "tailwind",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      alt: "typescript",
    },
  ];

  return (
    <>
      <Character />
      {/* <HeroSection /> */}
      <LatestPost />
      <SlideShow>
        {logos.map((logo) => (
          <Image
            key={logo.url}
            src={logo.url}
            width={60}
            height={60}
            alt={logo.alt}
          />
        ))}
      </SlideShow>
    </>
  );
}
