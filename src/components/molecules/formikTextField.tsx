import { TextField, TextFieldProps } from "@material-ui/core";
import { FormikValues, useFormikContext } from "formik";
import { FC } from "react";

export interface FormikTextFieldProps extends Omit<TextFieldProps, "name"> {
  name: string;
}

const FormikTextField: FC<FormikTextFieldProps> = ({ name, ...props }) => {
  const {
    errors,
    handleBlur,
    handleChange,
    touched,
    values,
  } = useFormikContext<FormikValues>();

  const hasError = !!errors[name] && !!touched[name];

  return (
    <TextField
      fullWidth
      variant="outlined"
      id={name}
      name={name}
      value={values[name]}
      onBlur={handleBlur}
      onChange={handleChange}
      error={hasError}
      helperText={hasError && errors[name]}
      {...props}
    />
  );
};

export default FormikTextField;
