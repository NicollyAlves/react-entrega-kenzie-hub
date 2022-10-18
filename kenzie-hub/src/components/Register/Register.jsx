import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { SectionRegister } from "./styles"
import logo from "../../assets/Logo.svg"
import { useContext } from "react"
import { HomeContext } from "../../contexts/todos"
import { formSchemaRegister } from "../../validations/registerUser"
import { AuthContext } from "../../contexts/authContext"


export const Register = () => {

    const { registerUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchemaRegister)
    })

    return (

        <SectionRegister>
            <nav>
                <img src={logo} alt="Imagem da Logo da Kenzie Hub" />
                <Link to={"/"}>
                    Voltar    
                </Link>
            </nav>

            <form onSubmit={handleSubmit(registerUser)}>
                <h2>Crie sua conta</h2>
                <p>Rápido e grátis, vamos nessa</p>

                <div>
                <label htmlFor="">Nome</label>
                <input type="text" id="nomeRegister"
                placeholder="Digite aqui seu nome" {...register("name")} />
                    <span>{errors.name?.message}</span>   
                
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" id="emailRegister"
                    placeholder="Digite aqui seu email" {...register("email")} />
                    <span>{errors.email?.message}</span>   
                </div>

                <div>
                <label htmlFor="">Senha</label>
                <input type="text" id="passRegister"
                placeholder="Digite aqui sua senha" {...register("password")} />
                    <span>{errors.password?.message}</span>   
                
                </div>

                <div>
                <label htmlFor="">Confirmar Senha</label>
                <input type="text" id="passConfirm"
                placeholder="Digite aqui sua senha novamente" {...register("pass_confirm")} />
                    <span>{errors.pass_confirm?.message}</span>   
                
                </div>

                <div>
                <label htmlFor="">Bio</label>
                <input type="text" id="bioRegister"
                placeholder="Fale sobre você" {...register("bio")} />
                    <span>{errors.bio?.message}</span>   

                </div>

                <div>
                <label htmlFor="">Contato</label>
                <input type="tel" id="contatoRegister"
                placeholder="Opção de contato" {...register("contact")} />
                    <span>{errors.contact?.message}</span>   
                
                </div>

                <div>
                <label htmlFor="">Selecionar</label>
                <select {...register("course_module")} id="select">
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
                </select>
                </div>

                <button type="submit" >Cadastrar</button>
            </form>
        </SectionRegister>
    )
}