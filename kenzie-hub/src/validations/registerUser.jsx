import * as yup from "yup"

export const formSchemaRegister = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O email é obrigatório").email("Email inválido"),
    password: yup.string().required("A senha é obrigatória").matches(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
    pass_confirm: yup.string().required("A senha é obrigatória").oneOf([yup.ref("password")], "Confirmação de senha deve ser igual a senha"),
    bio: yup.string().required("A bio é obrigatória"),
    contact: yup.string().required("A opção de contato é obrigatória"),
})