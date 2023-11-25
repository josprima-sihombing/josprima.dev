import classNames from "classnames";

import css from "./style.module.scss";
import { CSSProperties } from "react";

type TypographyProps = {
  variant?:
    | "heading"
    | "sub-heading"
    | "body"
    | "caption"
    | "section-title"
    | "card-title"
    | "card-title-sm"
    | "label";
  className?: string;
  children: string | React.ReactNode;
  style?: CSSProperties;
};

export default function Typography({
  children,
  className,
  variant,
  style,
}: TypographyProps) {
  const cn = classNames(
    css.root,
    {
      [css.root__body]: variant === "body",
      [css.root__heading]: variant === "heading",
      [css.root__sub_heading]: variant === "sub-heading",
      [css.root__section_title]: variant === "section-title",
      [css.root__card_title]: variant === "card-title",
      [css.root__card_title_sm]: variant === "card-title-sm",
      [css.root__caption]: variant === "caption",
      [css.root__label]: variant === "label",
    },
    className,
  );

  let CustomTag = "p" as keyof JSX.IntrinsicElements;

  switch (variant) {
    case "heading":
      CustomTag = "h1";
      break;

    case "sub-heading":
      CustomTag = "h2";
      break;

    case "section-title":
      CustomTag = "h3";
      break;

    case "card-title":
      CustomTag = "h4";
      break;

    case "card-title-sm":
      CustomTag = "h5";
      break;

    case "caption":
      CustomTag = "span";
      break;

    case "label":
      CustomTag = "span";

    case "body":
    default:
      CustomTag = "p";
      break;
  }

  return (
    <CustomTag className={cn} style={style}>
      {children}
    </CustomTag>
  );
}
