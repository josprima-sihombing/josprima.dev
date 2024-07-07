"use client";

import Logo from "@/components/atoms/logo";
import { MdMenu } from "react-icons/md";

import cn from "classnames";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "../../atoms/button";
import Container from "../../atoms/container";
import Link from "../../atoms/link";
import Sidebar from "../sidebar";
import css from "./style.module.scss";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const pathName = usePathname();

  const classNames = cn(
    css.root,
    {
      [css.root__open]: isOpen,
    },
    className,
  );

  function openMenu() {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  function hideMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    hideMenu();
  }, [pathName]);

  const menuClass = cn(css.menus, {
    [css.menus__open]: isOpen,
  });

  const menus = [
    <Link key="home" href="/">
      Home
    </Link>,
    <Link key="contact" href="/contact">
      Contact
    </Link>,
  ];

  return (
    <nav className={classNames}>
      <Container className={css.navbar}>
        <Button
          className={css.toggle_btn}
          onClick={openMenu}
          variant="outlined"
        >
          <MdMenu />
        </Button>
        <Logo className={css.logo} />

        <div className={menuClass} ref={menuRef}>
          {menus}
        </div>
      </Container>

      <Sidebar hideMenu={hideMenu} isOpen={isOpen}>
        {menus}
      </Sidebar>
    </nav>
  );
}
