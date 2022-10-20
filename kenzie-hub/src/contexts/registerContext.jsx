import { createContext } from "react";
import { api } from "../services/Api";
import { toast } from "react-toastify";

export const RegisterContext = createContext({})

const RegisterProvider = ({ children }) => {


    async function registerUser(data) {
        try {
            await api.post('/users', data)

            toast.success("Cadastro realizado com sucesso", {
                    autoClose: 2000,
                    style: {backgroundColor:"#343B41",
                            color:"white",
                            borderRadius:"5px", 
                            }
            })
    
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <RegisterContext.Provider value={{registerUser}}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterProvider
