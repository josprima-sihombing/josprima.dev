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
import { Variants, motion } from "framer-motion";

type NavbarProps = {
  className?: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
    },
  },
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

  const menuClass = cn(css.menus, {
    [css.menus__open]: isOpen,
  });

  return (
    <nav className={classNames}>
      <Container className={css.navbar}>
        <Button
          className={css.toggle_btn}
          onClick={toggleMenu}
          variant="outlined"
        >
          <MdMenu />
        </Button>
        <Logo className={css.logo} />

        <motion.div
          className={menuClass}
          ref={menuRef}
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.div variants={item}>
            <Link href="/">Home</Link>
          </motion.div>
          <motion.div variants={item}>
            <Link href="/contact">Contact</Link>
          </motion.div>
        </motion.div>
      </Container>
    </nav>
  );
}
