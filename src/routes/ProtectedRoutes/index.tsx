import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import RotatingShoe from '../../components/RotatingShoe/RotatingShoe'
import { UserContext } from '../../contexts/UserContext'

const ProtectedRoutes = () => {
  const {user, loading} = useContext(UserContext)
  if (loading) {
    return <RotatingShoe/>
  }
  
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes