import TextField from '@mui/material/TextField';
import { iInput } from './@types';
import StyledFieldset from './styles';

const Input = ({ label, type, placeholder, register, errors }: iInput) => {
  return (
    <StyledFieldset>
      <TextField variant="outlined" label={label} type={type} placeholder={placeholder} {...register} />
      {errors ? <p>{errors.message}</p> : null}
    </StyledFieldset>
  )
}

export default Input