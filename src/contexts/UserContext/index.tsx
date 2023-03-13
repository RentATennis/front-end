import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { iFormLoginValues } from "../../components/Form/LoginForm/@types"
import { iFormRegisterValues } from "../../components/Form/RegisterForm/@types"
import { api } from "../../services/api"
import { iUser, iUserContext, iUserProvider } from "./@types"

export const UserContext = createContext({} as iUserContext)

const UserProvider = ({ children }: iUserProvider) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<iUser | null>(null)
  const navigate = useNavigate()

  // AutoLogin desabilitado para correção

  // useEffect(() => {
  //   const autoLogin = async () => {
  //     const token = localStorage.getItem('@RentATennis: Token')
  //     const userId = localStorage.getItem('@RentATennis: UserID')
  //     if (token) {
  //       try {
  //         const config = {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Bearer ${token}`
  //           }
  //         }
  //         const response = await api.get<iUser>(`/users/${userId}`, config)
  //         setUser(response.data)
  //         navigate('dashboard')
  //       } catch (error) {
  //         localStorage.removeItem('@RentATennis: Token')
  //         localStorage.removeItem('@RentATennis: UserID')
  //       }
  //     }
  //   }
  //   autoLogin()
  // }, [])

  async function userLogin(formData: iFormLoginValues) {
    try {
      setLoading(true)
      const response = await api.post<iUser>('/login', formData)
      setUser(response.data)
      localStorage.setItem('@RentATennis: Token', response.data.accessToken)
      localStorage.setItem('@RentATennis: UserID', response.data.user.id);
      toast.success('Login realizado com sucesso!')
      navigate('/dashboard')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data === 'Incorrect password') {
          toast.error('Senha incorreta')
        } else {
          toast.error('Usuário não encontrado')
        }
      }
    } finally {
      setLoading(false);
    }
  }

  async function userRegister(formData: iFormRegisterValues) {
    try {
      setLoading(true)
      const response = await api.post<iUser>('/register', formData)
      localStorage.setItem('@RentATennis: Token', response.data.accessToken)
      localStorage.setItem('@RentATennis: UserID', response.data.user.id);
      toast.success('Cadastro realizado com sucesso!')
      navigate('/dashboard')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data === 'Email already exists') {
          toast.error('Email já existe')
        } else {
          console.error(error);
        }
      }
    } finally {
      setLoading(false)
    }
  }

  function userLogout() {
    setUser(null);
    localStorage.removeItem('@RentATennis: Token')
    localStorage.removeItem('@RentATennis: UserID')
    navigate('/')
    toast.success('Logout realizado com sucesso!')
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userLogin,
        userRegister,
        userLogout
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider