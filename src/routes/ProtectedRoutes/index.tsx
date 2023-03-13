import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const ProtectedRoutes = () => {
  const {user, loading} = useContext(UserContext)
  if (loading) {
    return <h1>Tenis Rodando</h1>
  }
  
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes