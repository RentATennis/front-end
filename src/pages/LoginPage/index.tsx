import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Logo from '../../components/Logo'
import { StyledContainer } from '../../styles/container'
import { iFormLoginValues } from './@types'



const LoginPage = () => {

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset } = useForm<iFormLoginValues>()
  
  const submitForm: SubmitHandler<iFormLoginValues> = (formData) => {
    console.log(formData)
    reset()
  }

  return (
    <section>
      <StyledContainer>
        <Logo />
        <form onSubmit={handleSubmit(submitForm)}>
          <h1>Login</h1>
          <Input label='Email' type='email' placeholder='Email' register={register('email')} errors={errors.email} />
          <Input label='Senha' type='password' placeholder='Senha' register={register('password')} errors={errors.password} />
          <button type='submit'>Entrar</button>
          <p>Ainda não possui uma conta? Cadastre-se!</p>
          <Link to={'/register'}>Cadastrar</Link>
        </form>
      </StyledContainer>
    </section>
  )
}

export default LoginPage