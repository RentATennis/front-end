import { iInput } from '../Input/@types'
import { StyledInputMask, StyledFieldset } from './styles'

const InputCPF = ({ label, type, placeholder, register, errors }: iInput) => {
  return (
    <StyledFieldset>
      <StyledInputMask mask="999.999.999-99" type={type} placeholder={placeholder} {...register} />
      {errors && <p>{errors.message}</p>}
    </StyledFieldset>
  );
};
export default InputCPF