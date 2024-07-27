import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import validation from "./validations"
import logIn from "../../mockDB/mockLogIn"
import styles from "../Login/Login.module.css"
import logoNav from "../../Assets/LogoNav_Mesa de trabajo 1 copia.png"

export default function Login() {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        //validation({...userData, [event.target.name]: event.target.value}, setErrors, errors, event.target.name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const flag = logIn(userData)
        flag === "flag" && navigate("/home")   
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <img src={logoNav} alt="logo shopsport" className={styles.logo} />
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
                    <button type="submit" className={styles.button}>LOG IN</button>
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
