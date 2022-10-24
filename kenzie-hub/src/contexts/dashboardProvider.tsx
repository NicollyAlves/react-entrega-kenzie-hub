import { useState, createContext, useEffect, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast }  from "react-toastify";

import { api } from "../services/Api";

export interface IChildren {
    children: ReactNode
}

export interface ITechs {
    id: string,
    title: string,
    status: string,
    created_at: string,
    updated_at: string
}

export interface IData {
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    techs: ITechs[]
    works: [],
    created_at: string, 
    updated_at: string,
    avatar_url: null,
}

export interface IDashContext {
    clean(): void,
    getTechs(): void
    deleteTech(id: string): Promise<void>,
    createNewTech(data: IPostTech): Promise<void>,
    tech: ITechs[] | undefined,
    abrirModal: boolean,
    setAbrirModal: React.Dispatch<React.SetStateAction<boolean>>
    setTech: React.Dispatch<React.SetStateAction<ITechs[] | undefined>>
}

export interface IPostTech{
    title: string,
    status: string,
    techs: ITechs[]
}


export const DashContext = createContext<IDashContext>({} as IDashContext)

export const ProviderDash = ({children}: IChildren) => {
    const token = localStorage.getItem("@TOKEN")
    
    const [ abrirModal, setAbrirModal ] = useState(false)
    const [ tech, setTech ] = useState<ITechs[] | undefined >()
    const [ remove, setRemove ] = useState([])
    
    const navigate = useNavigate()
    
    const clean = () => {
        localStorage.clear()
        navigate("/") 
    }
    
    const createNewTech = async (data: IPostTech) => {
        try {
            await api.post("/users/techs", data, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            setAbrirModal(false)
            toast.success("Tecnologia criada com sucesso!", {
                autoClose: 2000,
                style: {backgroundColor:"#343B41",
                color:"white",
                borderRadius:"5px", 
            }
            
        })
            setTech(data.techs)
        } catch (error) {
            toast.error("Ops! Algo deu errado", {
                autoClose: 2000,
                style: {backgroundColor:"#343B41",
                        color:"white",
                        borderRadius:"5px", 
                        }
            })
            console.log(error);
        }
    }

    const getTechs = async () => {
        const response = await api.get("/profile", {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        setTech(response.data.techs)
    }

    useEffect(() => {
        getTechs()
    }, [ abrirModal, remove])

    const deleteTech = async (id: string) => {
        try {
            await api.delete(`/users/techs/${id}`, {
                headers: {
                    "Authorization": `Token ${token}`
                }
            })
            setRemove([])
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <DashContext.Provider value={{
                                        abrirModal, setAbrirModal, tech, setTech, getTechs,
                                        clean, createNewTech, deleteTech}} >
            {children}
        </DashContext.Provider>
    )
}

export function useDashContext(): IDashContext {
    const context = useContext(DashContext)

    return context
}