import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  type?: string;
  setValue?: any;
}

export const FormInputText = ({
  name,
  control,
  label,
  type,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          margin="dense"
          size="medium"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          type={type ? type : "text"}
          variant="outlined"
        />
      )}
    />
  );
};
