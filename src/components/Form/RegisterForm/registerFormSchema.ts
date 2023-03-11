import * as yup from "yup"

export const registerFormSchema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    cpf: yup.string().required('CPF é obrigatório'),
    celular: yup.string().required('Celular é obrigatório'),
    email: yup
        .string()
        .required('Email é obrigatório')
        .email('Email inválido'),
    password: yup
        .string()
        .required('Senha é obrigatória')
        .matches(/.{4,}/, 'Deve conter ao menos 4 caracteres'),
})