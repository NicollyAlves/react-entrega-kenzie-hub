import { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast }  from "react-toastify";

import { api } from "../services/Api";


export const DashContext = createContext({})

export const ProviderDash = ({children}) => {
    const token = localStorage.getItem("@TOKEN")

    const [ abrirModal, setAbrirModal ] = useState(false)
    const [ tech, setTech ] = useState([])
    const [ remove, setRemove ] = useState([])

    const navigate = useNavigate()

    const clean = () => {
        localStorage.clear()
        navigate("/") 
    }

    const createNewTech = async (data) => {
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

    const deleteTech = async (id) => {
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