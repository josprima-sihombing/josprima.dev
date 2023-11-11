import css from "./style.module.scss";

type InitialLetterAvatarProps = {
  name: string;
};

export default function InitialLetterAvatar({
  name,
}: InitialLetterAvatarProps) {
  return <div className={css.root}>{name.at(0)}</div>;
}
