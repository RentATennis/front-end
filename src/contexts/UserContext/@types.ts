import { ReactNode } from "react"
import { iFormLoginValues } from "../../components/Form/LoginForm/@types"
import { iFormRegisterValues } from "../../components/Form/RegisterForm/@types"

export interface iUserProvider {
  children: ReactNode
}

export interface iUserContext {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  user: iUser | null
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>
  userLogin: (formData: iFormLoginValues) => Promise<void>
  userRegister: (formData: iFormRegisterValues) => Promise<void>
  userLogout: () => void
}

export interface iUser {
  accessToken?: string;
  user?: {
    email: string;
    name: string;
    cpf: string;
    celular: string;
    id: string;
  },
  email?: string;
  name?: string;
  cpf?: string;
  celular?: string;
  id?: string;
}
