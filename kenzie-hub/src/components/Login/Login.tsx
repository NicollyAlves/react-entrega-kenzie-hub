import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, SectionLogin } from "./styles"
import logo from "../../assets/Logo.svg"
import { formSchemaLogin } from "../../validations/loginUser"
import { IUserLogin, useUserLoginContext } from "../../contexts/authContext"

export const Login = () => {

    const { loginUser } = useUserLoginContext()
    
    const { register, handleSubmit, formState: { errors } } = useForm<IUserLogin>({
        resolver: yupResolver(formSchemaLogin)
    })
        
    return (
        <SectionLogin>
            <img src={logo} alt="Imagem da Logo da Kenzie Hub"></img>
            <form onSubmit={handleSubmit(loginUser)}>
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
                    Cadastre-se
                </Link>
            </form>
        </SectionLogin>
    )
}