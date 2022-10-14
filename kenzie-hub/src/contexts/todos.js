import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast }  from "react-toastify";

import { api } from "../services/Api";


export const HomeContext = createContext({})

export const ProviderHome = ({children}) => {
    const [ user, setUser ] = useState([])
    const [abrirModal, setAbrirModal] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if(!token) {
            navigate("/")
        }
        
    }, [])
    
    const onSubmitLogin = async (user) => {
        const response = await api.post("/sessions", {...user})
        .then(res => {
            localStorage.clear()
            setUser(res.data.user)
            localStorage.setItem("@TOKEN", res.data.token)
            localStorage.setItem("@USERID", res.data.user.id)
            navigate("/dashboard")
        })
        .catch(err => {
            toast.error("Ops! Algo deu errado", {
                autoClose: 2000,
                style: {backgroundColor:"#343B41",
                        color:"white",
                        borderRadius:"5px", 
                        }
            })
        })
        return response
    }

    const onSubmitRegister = (data) => {
        try {
            api.post("/users", data)
            .then((res) => {
                console.log(res.data)
                toast.success("Conta criada com sucesso!", {
                    autoClose: 2000,
                    style: {backgroundColor:"#343B41",
                            color:"white",
                            borderRadius:"5px",
                        }
                    })
                })
                navigate("/", {replace: true})
            } catch (error) {
                console.log(error);
            }
        } 
        
    const token = localStorage.getItem("@TOKEN")

    const RenderDashBoard = () => {
        useEffect(() => {
            api.get("/profile", {
                headers: {
                        'Authorization': `Token ${token}`
                    }
                })
                .then((res) => {
                    setUser(res.data)
                })
                .catch(err => err)
            }, [])
        }
    RenderDashBoard()

    const uploadDash = () => {
        api.get("/profile", {
            headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then((res) => {
                setUser(res.data)
            })
            .catch(err => err)
        }
        
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
            .then(res => {
                console.log(res.data);
                uploadDash()
            })
            
        } catch (error) {
            console.log(error);
        }
        
        }
    

    const deleteTech = async (id) => {
        try {
            await api.delete(`/users/techs/${id}`, {
                headers: {
                    "Authorization": `Token ${token}`
                }
            })
            uploadDash()
            
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <HomeContext.Provider value={{  onSubmitLogin, onSubmitRegister, 
                                        user, setUser,
                                        abrirModal, setAbrirModal,
                                        clean, createNewTech, deleteTech}} >
            {children}
        </HomeContext.Provider>
    )
}