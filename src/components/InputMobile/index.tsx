import { TextField } from "@mui/material"
import TextMask from "react-text-mask"
import { Controller, Control, FieldValues } from "react-hook-form"
import { StyledFieldset, StyledErrorMessage } from "./styles"

interface PhoneInputProps {
  control: Control<FieldValues>;
  name: string;
  errors?: any;
}

function InputMobile({ control, name, errors }: PhoneInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => {
        const { ref, ...rest } = field;
        return (
          <TextMask
            {...rest}
            mask={["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/,]}
            guide={false}
            id={name}
            render={(ref: any, props: any) => (
              <StyledFieldset>
                <TextField
                  inputRef={ref}
                  {...props}
                  variant="outlined"
                  label="Celular"
                  fullWidth
                  error={errors?.[name] ? true : false}
                />
                {errors?.[name] && (
                  <StyledErrorMessage>{errors[name].message}</StyledErrorMessage>
                )}
              </StyledFieldset>
            )}
          />
        )
      }}
    />
  )
}

export default InputMobile