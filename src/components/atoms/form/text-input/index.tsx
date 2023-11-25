import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import css from "./style.module.scss";
import classNames from "classnames";
import Typography from "../../typography";

type TextInputProps = {
  className?: string;
  label?: string;
  placeholder?: string;
};

export type RhfTextInputProps<T extends FieldValues> = TextInputProps &
  UseControllerProps<T>;

export default function TextInput<T extends FieldValues>(
  props: RhfTextInputProps<T>,
) {
  const { className, label, placeholder = "", ...rest } = props;

  const classList = classNames(css.root, className);

  const {
    field,
    formState: { errors },
  } = useController<T>(rest);

  return (
    <div className={classList}>
      <label>
        <Typography variant="label">{label}</Typography>
        <input type="text" placeholder={placeholder} {...field} />
      </label>

      <div className={css.root__error}>
        <span>{errors[rest.name]?.message?.toString()}</span>
      </div>
    </div>
  );
}
