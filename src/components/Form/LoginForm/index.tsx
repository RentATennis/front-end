import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import Input from '../../Input'
import { iFormLoginValues } from './@types'
import StyledLoginForm from './styles'
import { loginFormSchema } from './loginFormSchema'

const LoginForm = () => {

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset } = useForm<iFormLoginValues>({
      resolver: yupResolver(loginFormSchema)
    })

  const { userLogin } = useContext(UserContext)
    
  const submitForm: SubmitHandler<iFormLoginValues> = (formData) => {
    userLogin(formData)
    reset()
  }

  return (
    <StyledLoginForm onSubmit={handleSubmit(submitForm)}>
      <h1>Login</h1>
      <Input label='Email' type='email' placeholder='Email' register={register('email')} errors={errors.email} />
      <Input label='Senha' type='password' placeholder='Senha' register={register('password')} errors={errors.password} />
      <button type='submit'>Entrar</button>
      <p>Ainda não possui uma conta? Cadastre-se!</p>
      <Link to={'/register'}>Cadastrar</Link>
    </StyledLoginForm>
  )
}

export default LoginForm