import TextField from '@mui/material/TextField';
import { iInput } from './@types';

const Input = ({ label, type, placeholder, register, errors }: iInput) => {
  return (
    <fieldset>
      <TextField variant="outlined" label={label} type={type} placeholder={placeholder} {...register} />
      {errors ? <p>{errors.message}</p> : null}
    </fieldset>
  )
}

export default Input