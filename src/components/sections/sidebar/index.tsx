"use client";

import Link from "@/components/atoms/link";
import useClickOutside from "@/hooks/commons/use-click-outside";
import { Variants, motion } from "framer-motion";
import { useRef } from "react";

import css from "./style.module.scss";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    display: "none",
  },
  show: {
    opacity: 1,
    x: 0,
    display: "flex",
    transition: {
      ease: "linear",
      duration: 0.2,
    },
  },
};

const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    display: "none",
  },
  show: {
    opacity: 1,
    x: 0,
    display: "flex",
    transition: {
      ease: "linear",
      duration: 0.1,
    },
  },
};

type SidebarProps = {
  isOpen: boolean;
  hideMenu: () => void;
  children: React.ReactNode | React.ReactNode[];
};

export default function Sidebar({ isOpen, hideMenu, children }: SidebarProps) {
  const menuRef = useRef(null);

  useClickOutside(menuRef, hideMenu);

  return (
    <div>
      <motion.div
        className={css.root}
        ref={menuRef}
        variants={containerVariants}
        initial="hidden"
        animate={isOpen ? "show" : "hidden"}
      >
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </motion.div>

      <motion.div
        className={css.overlay}
        variants={overlayVariants}
        initial="hidden"
        animate={isOpen ? "show" : "hidden"}
      />
    </div>
  );
}
