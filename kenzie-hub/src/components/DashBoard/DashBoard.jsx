import { api } from "../../services/Api";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionDashboard } from "./styles";
import logo from "../../assets/Logo.svg"

export const DashBoard = ({ user, setUser }) => {

        const token = localStorage.getItem("@TOKEN")

        
        useEffect(() => {
            api.get("/profile", {
                headers: {
                        'Authorization': `Token ${token}`
                    }
                })
                .then((res) => {
                    setUser(res.data)
                    console.log(res.data);
                    console.log(res);
                })
                .catch(err => {
                    console.error("ops! ocorreu um erro" + err);
                })
            }, [])
            
            const navigate = useNavigate()
            
            if(!token) {
                window.location.assign("/")
            }
            const clean = () => {
                localStorage.clear()
                navigate("/") 
            }    


            return (
                <SectionDashboard>
                    <nav>
                        <img src={logo} alt="Imagem da Logo da Kenzie Hub" />
                            <button onClick={() => clean()} >Sair</button>
                    </nav> 

                    <div>
                        <h2>Olá, {user.name}</h2>
                        <h3>{user.course_module}</h3>
                    </div>

                    <section>
                        <h2>Que pena! Estamos em desenvolvimento :(</h2>
                        <h3>Nossa aplicação está em desenvolvimento, em breve teremos novidades</h3>
                    </section>
                </SectionDashboard>
            )
        }
        
        
        
        