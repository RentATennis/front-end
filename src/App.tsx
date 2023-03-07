import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Dashboard />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
