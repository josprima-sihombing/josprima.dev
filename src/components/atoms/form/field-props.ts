import { FieldValues, UseControllerProps } from "react-hook-form";

export type FieldProps = {
  className?: string;
  label?: string;
  placeholder?: string;
};

export type RhfFieldProps<T extends FieldValues, K> = K & UseControllerProps<T>;
