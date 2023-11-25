import css from "./style.module.scss";

type ErrorFieldProps = {
  message?: string;
};

export default function ErrorField({ message }: ErrorFieldProps) {
  return <span className={css.root}>{message}</span>;
}
