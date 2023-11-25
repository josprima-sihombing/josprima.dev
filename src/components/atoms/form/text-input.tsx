import { Control, Controller } from "react-hook-form";

type TextInputProps = {
  control: Control;
  name: string;
  defaultValue?: string;
};

export default function TextInput({
  control,
  name,
  defaultValue,
}: TextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field, formState: { errors } }) => {
        return (
          <div>
            <input type="text" {...field} />
            <div>
              <span>{errors[name]?.message?.toString()}</span>
            </div>
          </div>
        );
      }}
    />
  );
}
