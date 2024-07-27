import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import signUp from "../../mockDB/mockSignUp"
import validation from "./validations"

export default function Signup() {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [ errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        //validation({...userData, [event.target.name]: event.target.value}, setErrors, errors, event.target.name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const flag = signUp(userData)
        flag === "flag" && navigate("/login")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
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
                        <span>{errors.password}</span>
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