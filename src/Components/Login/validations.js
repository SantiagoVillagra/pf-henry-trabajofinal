
export default function validation(userData, setErrors, errors, propiedad) {

    if (propiedad === "email") {
        if (!userData.email) {
            setErrors({...errors, email: "Debe completar este campo"})
        } else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
            setErrors({...errors, email: ""})
    
            if (userData.email.length > 35) {
                setErrors({...errors, email: "El email no puede tener más de 35 carácteres"})
            }
        } else {
            setErrors({...errors, email: "Email inválido"})
        }
    }

    if (propiedad === "password") {
        if (userData.password.length < 6 || userData.password.length > 10) {
            setErrors({...errors, password: "La contraseña debe tener entre 6 y 10 carácteres"})
        } else if ((/\d/.test(userData.password))) {
            setErrors({...errors, password: ""})
        } else setErrors({...errors, password: "La contraseña debe contener al menos un número"})
    }
    
    return 
}