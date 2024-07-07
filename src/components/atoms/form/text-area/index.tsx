import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import Typography from "@/components/atoms/typography";
import classNames from "classnames";
import { FieldProps, RhfFieldProps } from "../field-props";

import ErrorField from "../error-field";
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

      <ErrorField message={errors[rest.name]?.message?.toString()} />
    </div>
  );
}
