import users from "./mockUserData"
import Swal from "sweetalert2"

export default function logIn (userData) {

    const { email, password } = userData

    if (!email || !password) {
        //window.alert("Faltan campos por completar")
        Swal.fire({
            title: "Faltan campos por completar",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
        return
    }

    const existentUser = users.find(user => user.email === email)

    if (!existentUser) {
        //window.alert("Usuario no registrado")
        Swal.fire({
            title: "Usuario no registrado",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
        return
    }

    if (existentUser.password !== password) {
        //window.alert("La contraseña ingresada es incorrecta")
        Swal.fire({
            title: "La contraseña ingresada es incorrecta",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
        return
    }

    //window.alert("Log in exitoso")
    Swal.fire({
        title: "Log in exitoso",
        showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
            `
        }
    });
    return (existentUser)
}