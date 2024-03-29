import { ToastContainer } from "react-toastify"
import { Rotas } from "./routes"
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./contexts/authContext";
import { ProviderDash } from "./contexts/dashboardProvider";
import { Register } from "./components/Register/Register";


export const App = () => {
  return (
    <>
        <ToastContainer />
        <AuthProvider>
          <ProviderDash>
            <Rotas />
          </ProviderDash>
        </AuthProvider>
    </>
  )
}