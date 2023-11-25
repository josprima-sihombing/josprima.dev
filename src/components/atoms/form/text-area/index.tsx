import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import classNames from "classnames";
import Typography from "@/components/atoms/typography";
import { FieldProps, RhfFieldProps } from "../field-props";

import css from "../style.module.scss";

export default function TextArea<T extends FieldValues>(
  props: RhfFieldProps<T, FieldProps>,
) {
  const { className, label, placeholder = "", ...rest } = props;

  const {
    field,
    formState: { errors },
    fieldState,
  } = useController<T>(rest);

  const classList = classNames(css.root, className);

  const fieldClass = classNames({
    [css.error]: fieldState.error?.message ? true : false,
  });

  return (
    <div className={classList}>
      <label>
        <Typography variant="label">{label}</Typography>
        <textarea
          className={fieldClass}
          cols={30}
          rows={10}
          placeholder={placeholder}
          {...field}
        />
      </label>

      <div className={css.root__error}>
        <span>{errors[rest.name]?.message?.toString()}</span>
      </div>
    </div>
  );
}
