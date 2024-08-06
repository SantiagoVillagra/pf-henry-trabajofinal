import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logIn from "../../mockDB/mockLogIn";
import { loginUser } from "../../Redux/Actions";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { GoogleLogin } from "@react-oauth/google";
import logoNav from "../../Assets/LogoNav_Mesa de trabajo 1 copia.png";
import axios from "axios";

import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css'; // PrimeFlex

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const loggedUser = logIn(userData);
        if (loggedUser) {
            dispatch(loginUser(loggedUser));
            navigate("/home");
        }
    };

    const handleLoginSuccess = async (response) => {
        console.log("entro al handleSuccess");
        
        console.log(response.credential);
        try {
          const res = await axios.post('http://localhost:3001/auth/', {
            token: response.credential,
          });
          console.log(res.data);
          // Aquí puedes manejar el estado de autenticación del usuario en tu frontend
        } catch (error) {
          console.error('Error al enviar el token al backend', error);
        }
      };
    
      const handleLoginFailure = (response) => {
        console.error('Error al iniciar sesión con Google', response);
      }

    return (
        <div className="card">
            <form onSubmit={handleSubmit} className="flex flex-column md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="email" className="w-6rem">Email</label>
                        <InputText
                            id="email"
                            type="email"
                            name="email"
                            value={userData.email}
                            placeholder="EMAIL"
                            className="w-12rem"
                            onChange={handleChange}
                        />
                        <span className="p-error">{errors.email}</span>
                    </div>

                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="password" className="w-6rem">Password</label>
                        <InputText
                            id="password"
                            type="password"
                            name="password"
                            value={userData.password}
                            placeholder="PASSWORD"
                            className="w-12rem"
                            onChange={handleChange}
                        />
                        <span className="p-error">{errors.password}</span>
                    </div>

                    <Button type="submit" label="Login" icon="pi pi-user" className="w-10rem mx-auto mt-3" />

                    <div>
                        <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={handleLoginFailure}
                        />
                    </div>

                </div>

                <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>OR</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div>
                 
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Link to={"/signup"}>
                        <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem" />
                    </Link>
                </div>
            </form>
        </div>
    );
}