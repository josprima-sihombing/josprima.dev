import { Variants, motion } from "framer-motion";

import { useToast } from "@/contexts/toast-context";
import Typography from "../typography";
import css from "./style.module.scss";

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.4,
    },
  },
};

export default function Toast() {
  const { toast } = useToast();

  if (!toast?.message) {
    return null;
  }

  return (
    <motion.div
      className={css.root}
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <div className={css.toast}>
        <Typography variant="label" className={css.toast__message}>
          {toast?.message}
        </Typography>
      </div>
    </motion.div>
  );
}
