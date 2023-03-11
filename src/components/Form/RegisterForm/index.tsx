import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm, SubmitHandler, Control, FieldValues } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import Input from '../../Input'
import InputCPF from '../../InputCPF'
import InputMobile from '../../InputMobile'
import { iFormRegisterValues } from './@types'
import { registerFormSchema } from './registerFormSchema'
import StyledRegisterForm from './styles'

const RegisterForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<iFormRegisterValues>({
    resolver: yupResolver(registerFormSchema)
  })

  const { userRegister } = useContext(UserContext)

  const submitForm: SubmitHandler<iFormRegisterValues> = (formData) => {
    userRegister(formData)
    reset()
  }

  return (
    <StyledRegisterForm onSubmit={handleSubmit(submitForm)}>
      <h1>Cadastro</h1>
      <Input label='Nome Completo' type='text' register={register('name')} errors={errors.name} />
      <InputCPF control={control as unknown as Control<FieldValues>} name="cpf" errors={errors} />
      <InputMobile control={control as unknown as Control<FieldValues>} name="celular" errors={errors} />
      <Input label='Email' type='email' register={register('email')} errors={errors.email} />
      <Input label='Senha' type='password' register={register('password')} errors={errors.password} />
      <button type='submit'>Cadastrar</button>
      <Link to={'/login'}>Voltar</Link>
    </StyledRegisterForm>
  )
}

export default RegisterForm