import { useContext, useEffect } from "react";
import { SectionDashboard, Modal } from "./styles";
import logo from "../../assets/Logo.svg"
import { DashContext } from "../../contexts/dashboardProvider";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import lixeira from "../../assets/delete_FILL0_wght400_GRAD0_opsz48 1.svg"
import { ButtonModal } from "./styles";
import { AuthContext } from "../../contexts/authContext";

export const DashBoard = () => {

    const { clean, createNewTech, tech, deleteTech, abrirModal, setAbrirModal, getTechs } = useContext(DashContext)
    const { user } = useContext(AuthContext)

    const formSchema = yup.object().shape({
        title: yup.string().required("O título da tecnologia é obrigatório")
    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema)
    })

    useEffect(() => {
        getTechs()
    }, [tech])

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
            <main>
                <div>
                    <h2>Tecnologias</h2>
                    <button onClick={() => setAbrirModal(true)}>+</button>
                </div>
                <ul>
                    {tech?.map((tech) => (
                            <li key={tech.id} >
                                <h2>{tech.title}</h2>
                                <div>
                                    <h3>{tech.status}</h3>
                                    <img onClick={() => deleteTech(tech.id)}  src={lixeira} alt="Imagem de uma lixeira para apagar uma tecnologia" />
                                </div>
                            </li>
                    ))}
                    </ul>
            </main>

            { abrirModal && <Modal>
                <form onSubmit={handleSubmit(createNewTech)} >
                    <div>
                        <h2>Cadastrar Tecnologia</h2>
                        <button onClick={() => setAbrirModal(false)}>x</button>
                    </div>
                    <label>Nome</label>
                    <input type="text" {...register("title")} />
                    <label>Selecionar status</label>
                    <select {...register("status")} >
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <ButtonModal>Cadastrar Tecnologia</ButtonModal>
                </form>
            </Modal>}

        </SectionDashboard>
    )
}