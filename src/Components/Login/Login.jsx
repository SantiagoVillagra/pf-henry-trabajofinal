import { useState } from "react"
import { Link } from "react-router-dom"
import validation from "./validations"

export default function Login() {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        validation({...userData, [event.target.name]: event.target.value}, setErrors, errors, event.target.name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        //*funcion que verifica acceso a la pagina -- Lo hace un controler desde el back?
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        placeholder="EMAIL"
                        onChange={handleChange}
                    />
                    <span>{errors.email}</span>
                </div>

                <div>
                    <label htmlFor=""></label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        placeholder="PASSWORD"
                        onChange={handleChange}
                    />
                    <span>{errors.password}</span>
                </div>
                <div>
                        <button type="submit">LOG IN</button>
                        <hr />
                        <p>or</p>
                        <Link to={"/signup"}>
                            <p>Sign up</p>
                        </Link>
                    </div>
            </form>
        </div>
    )
}