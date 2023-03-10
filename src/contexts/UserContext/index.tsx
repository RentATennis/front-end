import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { iFormLoginValues } from "../../components/Form/LoginForm/@types"
import { api } from "../../services/api"
import { iUser, iUserContext, iUserProvider } from "./@types"

export const UserContext = createContext({} as iUserContext)

const UserProvider = ({ children }: iUserProvider) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<iUser | null>(null)
  const navigate = useNavigate()

  async function userLogin(formData: iFormLoginValues) {
    try {
      setLoading(true)
      const response = await api.post<iUser>('/login', formData)
      setUser(response.data)
      localStorage.setItem('@RentATennis: Token', response.data.accessToken)
      toast.success('Login realizado com sucesso!')
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userLogin
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider