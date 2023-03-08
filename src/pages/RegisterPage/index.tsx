import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Logo from '../../components/Logo'
import { StyledContainer } from '../../styles/container'
import { iFormRegisterValues } from './@types'

const RegisterPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<iFormRegisterValues>()

  const submitForm: SubmitHandler<iFormRegisterValues> = (formData) => {
    console.log(formData)
  }

  return (
    <section>
      <StyledContainer>
        <Logo />
        <form onSubmit={handleSubmit(submitForm)}>
          <h1>Cadastro</h1>
          <Input label='Nome Completo' type='text' placeholder='Nome Completo' register={register('name')} errors={errors.name} />
          <Input label='CPF' type='text' placeholder='CPF' register={register('cpf')} errors={errors.cpf} />
          <Input label='Celular' type='text' placeholder='Celular' register={register('celular')} errors={errors.celular} />
          <Input label='Email' type='email' placeholder='Email' register={register('email')} errors={errors.email} />
          <Input label='Senha' type='password' placeholder='Senha' register={register('password')} errors={errors.password} />
          <button type='submit'>Cadastrar</button>
          <Link to={'/login'}>Voltar</Link>
        </form>
      </StyledContainer>
    </section>
  )
}

export default RegisterPage