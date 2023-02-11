import * as yup from "yup"

export const formSchemaLogin = yup.object().shape({
    password: yup.string().required("Senha é obrigatória"),
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
})