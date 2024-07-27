import users from "./mockUserData"

export default function signUp (userData) {

    const { email, password } = userData

    if (!email || !password) {
        window.alert("Faltan campos por completar")
        return
    }

    const existentUser = users.find(user => user.email === email)

    if (existentUser) {
        window.alert("Este email corresponde a un usuario ya registrado")
        return
    }

    users.push({
        username: "",
        email: email,
        password: password,
        isadmin: false
    })
    console.log(users);
    window.alert("Registro exitoso")

    return ("flag")
}