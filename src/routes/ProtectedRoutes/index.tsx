import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const token = localStorage.getItem('@RentATennis: Token')
  window.location.pathname

  return token ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes