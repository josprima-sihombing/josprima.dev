"use client";

import classNames from "classnames";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import css from "./style.module.scss";

type LinkProps = {
  href: string;
  children: string | React.ReactNode;
};

export default function Link({ href, children }: LinkProps) {
  const pathName = usePathname();

  const cn = classNames(css.root, {
    [css.active]: pathName === href,
  });

  return (
    <NextLink href={href} className={cn}>
      {children}
    </NextLink>
  );
}
