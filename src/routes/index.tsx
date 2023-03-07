import { Route, Routes } from "react-router-dom"
import { ShopProvider } from "../contexts/ShopContext/ShopContext"
import Dashboard from "../pages/Dashboard"
import LandingPage from "../pages/LandingPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ShopProvider><Dashboard /></ShopProvider>}/>
    </Routes>
  );
};

export default ApplicationRoutes;
