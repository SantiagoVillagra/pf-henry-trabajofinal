import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logoNav from "../../Assets/LogoNav_Mesa de trabajo 1 copia.png"
import styles from "./SignUp.module.css"
import signUp from "../../mockDB/mockSignUp"
import validation from "./validations"

export default function Signup() {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        username: "", 
        email: "",
        password: "",
        passwordRepeat: ""
    })

    const [ errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        validation({...userData, [event.target.name]: event.target.value}, setErrors, errors, event.target.name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        validation(userData, setErrors, errors)
        const flag = signUp(userData, errors)
        flag === "flag" && navigate("/login")
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <img src={logoNav} alt="logo shopsport" className={styles.logo} />
                <div>
                    <div>
                        <label htmlFor="username"></label>
                        <input 
                            type="text" 
                            name="username" 
                            value={userData.username} 
                            placeholder="USERNAME..."
                            onChange={handleChange}
                        />
                        <span>{errors.username}</span>
                        
                    </div>

                    <div>
                        <label htmlFor="email"></label>
                        <input 
                            type="email" 
                            name="email" 
                            value={userData.email} 
                            placeholder="EMAIL..."
                            onChange={handleChange}
                        />
                        <span>{errors.email}</span>
                        
                    </div>
                    
                    <div>
                        <label htmlFor="password"></label>
                        <input 
                            type="password" 
                            name="password" 
                            value={userData.password}
                            placeholder="PASSWORD..." 
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="passwordRepeat"></label>
                        <input 
                            type="password" 
                            name="passwordRepeat" 
                            value={userData.passwordRepeat}
                            placeholder="REPEAT PASSWORD..." 
                            onChange={handleChange}
                        />
                        <span>{errors.password}</span>
                        <br />
                        <span>{errors.passwordRepeat}</span>
                    </div>
                    <div>
                        <button type="submit">SIGN UP</button>
                        <hr />
                        <p>or</p>
                        <Link to={"/login"}>
                            <p>Log in</p>
                        </Link>
                    </div>
                </div>

            </form>
        </div>
    )
}