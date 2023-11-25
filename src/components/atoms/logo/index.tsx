import Link from "next/link";
import css from "./style.module.scss";
import classNames from "classnames";
import stringToCharacter from "@/utils/string-to-character";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  const cn = classNames(css.root, className);

  const chars = stringToCharacter("Josprima.dev");

  return (
    <Link href="/" className={cn}>
      {chars.map((char) => (
        <span key={char}>{char}</span>
      ))}
    </Link>
  );
}
