"use client";

import Logo from "@/components/atoms/logo";
import { MdMenu } from "react-icons/md";

import css from "./style.module.scss";
import Link from "../../atoms/link";
import Button from "../../atoms/button";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "@/hooks/commons/use-click-outside";
import { usePathname } from "next/navigation";
import cn from "classnames";
import Container from "../../atoms/container";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const pathName = usePathname();

  useClickOutside(menuRef, hideMenu);

  const classNames = cn(
    css.root,
    {
      [css.root__open]: isOpen,
    },
    className,
  );

  function toggleMenu() {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  function hideMenu() {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    hideMenu();
  }, [pathName]);

  return (
    <nav className={classNames}>
      <Container className={css.navbar}>
        <Button className={css.toggle_btn} onClick={toggleMenu}>
          <MdMenu />
        </Button>
        <Logo className={css.logo} />

        <div
          className={`${css.menus} ${isOpen ? css.menus__open : ""}`}
          ref={menuRef}
        >
          <Link href="/">Home</Link>
          <Link href="/post">Posts</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </Container>
    </nav>
  );
}
