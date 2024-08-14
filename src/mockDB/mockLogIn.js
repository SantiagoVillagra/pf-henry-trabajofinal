import axios from "axios";
import alertSwal from "../funcs/alertSwal";

export default async function logIn (userData) {

    const { email, password } = userData

    if (!email || !password) {
        alertSwal("Faltan campos por completar")
        return
    }

    try {
        var existentUser = await axios.post(`https://e-commerse-fc.onrender.com/api/auth/login`, userData)
        console.log(existentUser)
    } catch ({response: {data}}) {
        const {message} = data

        message === "Invalid email" ? alertSwal("Email no registrado") : alertSwal("Contraseña incorrecta")
        return
    }

    alertSwal("Log in exitoso")
    
    return (existentUser)
}