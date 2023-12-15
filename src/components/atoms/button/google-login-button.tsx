"use client";

import { FcGoogle } from "react-icons/fc";
import css from "./style.module.scss";
import classNames from "classnames";
import { useSupabase } from "@/contexts/supabase-context";

type GoogleLoginButtonProps = {};

export default function GoogleLoginButton({}: GoogleLoginButtonProps) {
  const supabase = useSupabase();
  const cn = classNames(css.root, css.root__google);

  const handleOnClick = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <button type="button" className={cn} onClick={handleOnClick}>
      <FcGoogle />
      Login with Google
    </button>
  );
}
