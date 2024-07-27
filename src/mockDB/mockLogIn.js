import users from "./mockUserData"

export default function logIn (userData) {

    const { email, password } = userData

    if (!email || !password) {
        window.alert("Faltan campos por completar")
        return
    }

    const existentUser = users.find(user => user.email === email)

    if (!existentUser) {
        window.alert("Usuario no registrado")
        return
    }

    if (existentUser.password !== password) {
        window.alert("La contraseña ingresada es incorrecta")
        return
    }

    window.alert("Log in exitoso")
    return ("flag")
}