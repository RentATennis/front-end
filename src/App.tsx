import { ToastContainer } from "react-toastify"
import UserProvider from "./contexts/UserContext"
import ApplicationRoutes from "./routes"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <UserProvider>
        <ApplicationRoutes />
      </UserProvider>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default App
