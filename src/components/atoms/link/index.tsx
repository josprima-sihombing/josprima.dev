"use client";

import NextLink from "next/link";
import css from "./style.module.scss";
import { usePathname } from "next/navigation";
import classNames from "classnames";

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
