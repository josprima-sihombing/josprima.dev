import { FieldValues, useController } from "react-hook-form";

import Typography from "@/components/atoms/typography";
import classNames from "classnames";
import { HTMLInputTypeAttribute } from "react";

import ErrorField from "../error-field";
import { FieldProps, RhfFieldProps } from "../field-props";
import css from "../style.module.scss";

type TextInputProps = FieldProps & {
  type?: HTMLInputTypeAttribute;
};

export default function TextInput<T extends FieldValues>(
  props: RhfFieldProps<T, TextInputProps>,
) {
  const { className, label, placeholder = "", type = "text", ...rest } = props;

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
        <input
          className={fieldClass}
          type={type}
          placeholder={placeholder}
          {...field}
        />
      </label>

      <ErrorField message={errors[rest.name]?.message?.toString()} />
    </div>
  );
}
