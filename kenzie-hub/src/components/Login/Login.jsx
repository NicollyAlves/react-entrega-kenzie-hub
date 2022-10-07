import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/Api"
import { Button, ButtonRegister, SectionLogin } from "./styles"
import { toast } from "react-toastify"
import logo from "../../assets/Logo.svg"




export const Login = ({user, setUser}) => {

    const formSchema = yup.object().shape({
        password: yup.string().required("Senha é obrigatória"),
        email: yup.string().required("Email é obrigatório").email("Email inválido"),
    })
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })
    
    const navigate = useNavigate()
    
    const onSubmitFunction = async (user) => {
        const response = await api.post("/sessions", {...user})
        .then(res => {
            console.log(res);
            localStorage.clear()
            setUser(res.data.user)
            localStorage.setItem("@TOKEN", res.data.token)
            localStorage.setItem("@USERID", res.data.user.id)
            navigate("/dashboard")
        })
        .catch(err => {
            console.log(err);
            toast.error("Ops! Algo deu errado", {
                autoClose: 2000,
                style: {backgroundColor:"#343B41",
                        color:"white", 
                        maxWidth:"200px",
                        borderRadius:"5px", 
                        }
            })
        })
        console.log(user);
        return response
    }
    
    return (
        <SectionLogin>
            <img src={logo} alt="Imagem da Logo da Kenzie Hub"></img>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h2>Login</h2>
    
                <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />
                <span>{errors.email?.message}</span>
                </div>
    
                <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="password" {...register("password")} />
                <span>{errors.password?.message}</span>
                </div>
    
                <Button type="submit">Entrar</Button>
    
                <p>Ainda não possui uma conta?</p>
    
                <Link to={"/register"} >
                    <ButtonRegister type="submit" >Cadastre-se</ButtonRegister>
                </Link>
            </form>
        </SectionLogin>
    )
}