import { ProviderHome } from "./contexts/todos"
import { ToastContainer } from "react-toastify"
import { Rotas } from "./routes"
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./contexts/authContext";


export const App = () => {
  return (
    <>
        <ToastContainer />
        <AuthProvider>
          <ProviderHome>
            <Rotas />
          </ProviderHome>
        </AuthProvider>
    </>
  )
}