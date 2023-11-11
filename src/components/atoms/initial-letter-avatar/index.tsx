import getRandom from "@/utils/get-random";
import css from "./style.module.scss";

type InitialLetterAvatarProps = {
  name: string;
};

const bgColors = ["#CCFBFE", "#CDD6DD", "#CDCACC", "#CDACA1", "#CD8987"];

export default function InitialLetterAvatar({
  name,
}: InitialLetterAvatarProps) {
  const bgColor = getRandom(bgColors);

  return (
    <div
      className={css.root}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {name.at(0)}
    </div>
  );
}
