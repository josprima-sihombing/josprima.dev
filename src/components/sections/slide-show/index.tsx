import css from "./style.module.scss";

type SlideShowProps = {
  children: React.ReactNode[] | React.ReactNode;
};

export default function SlideShow({ children }: SlideShowProps) {
  return (
    <div className={css.root}>
      <div className={css.slider}>{children}</div>
      <div className={css.slider}>{children}</div>
    </div>
  );
}
