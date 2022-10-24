import { createContext, useContext, useState } from "react";
import { api } from "../services/Api";
import { toast } from "react-toastify";
import { IData, IChildren } from "./dashboardProvider";
import { useNavigate } from "react-router-dom";
import AuthProvider from "./authContext";

export const RegisterContext = createContext<IUserRegisterContext>({} as IUserRegisterContext)

export interface IUserRegister {
    email: string,
    password: string,
    pass_confirm: string,
    name: string,
    bio: string,
    contact: string,
    course_module: string,
}

export interface IUserRegisterContext{
    registerUser(data: IUserRegister): Promise<void>
}

const RegisterProvider = ({ children }: IChildren) => {
    //const {setUser} = useContext<IData>(AuthProvider)
    const [ userRegister, setUserRegister ] = useState<IUserRegister>()

    const navigate = useNavigate()

    async function registerUser(data: IUserRegister): Promise<void>{
        try {
            console.log("oi");
            
            const response = await api.post('/users', data)
            const { user: userResponse } = response.data
            
            setUserRegister(userResponse)
            console.log(data);
            
            const toNavigate = '/login';
            
            navigate(toNavigate, { replace: true });
            
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

export function useUserRegisterContext(): IUserRegisterContext {
    const context = useContext(RegisterContext)

    return context
}

export default RegisterProvider
