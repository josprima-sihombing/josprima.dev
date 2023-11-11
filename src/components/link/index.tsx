"use client";

import NextLink from "next/link";
import css from "./style.module.scss";
import { usePathname } from "next/navigation";

type LinkProps = {
  href: string;
  children: string | React.ReactNode;
};

export default function Link({ href, children }: LinkProps) {
  const pathName = usePathname();

  return (
    <NextLink
      href={href}
      className={`${css.root} ${pathName === href ? css.active : ""}`}
    >
      {children}
    </NextLink>
  );
}
