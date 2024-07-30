import users from "./mockUserData"
import Swal from "sweetalert2";

export default function signUp (userData, errors) {

    const { email, password, passwordRepeat, username } = userData

    if (!email || !password || !passwordRepeat || !username) {
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

    if (existentUser) {
        //window.alert("Este email corresponde a un usuario ya registrado")
        Swal.fire({
            title: "Este email corresponde a un usuario ya registrado",
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

    const arrayErrors = Object.values(errors)
    const thereAreErrors = arrayErrors.find((error) => error !== "")

    if (thereAreErrors) {
        //window.alert("Completa los campos según las condiciones especificadas")
        Swal.fire({
            title: "Completa los campos según las condiciones especificadas",
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
    

    users.push({
        username: username,
        email: email,
        password: password,
        isadmin: false
    })
    console.log(users);
    //window.alert("Registro exitoso")
    Swal.fire({
        title: "Registro exitoso",
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

    return ("flag")
}