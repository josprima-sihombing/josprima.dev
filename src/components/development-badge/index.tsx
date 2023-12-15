import Typography from "../atoms/typography";
import css from "./style.module.scss";

export default function DevelopmentBadge() {
  return (
    <span className={css.root}>
      <Typography className={css.root__badge}>DEVELOPMENT</Typography>
    </span>
  );
}
