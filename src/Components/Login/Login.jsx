import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode"
import logIn from "../../mockDB/mockLogIn";
import { loginUser } from "../../Redux/Actions";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { GoogleLogin } from "@react-oauth/google";
import logoNav from "../../Assets/LogoNav.png";
import axios from "axios";
import alertSwal from "../../funcs/alertSwal"
import styles from "./Login.module.css"
import Footer from "../Footer/Footer";

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        await logIn(userData)
        .then(({data: {token}}) =>{
            const decodedToken = jwtDecode(token)
            console.log(decodedToken)
            return decodedToken
        })
        .then(async ({id}) => {
          console.log(id)
          const user = await axios(`https://e-commerse-fc.onrender.com/api/users/${id}`)
          console.log(user)
          return user
        })
        .then(({data}) => {
            console.log(data);
            const userData = {...data, wishList: !data.wishList? [] : data.wishList, shoppingHistory: !data.shoppingHistory ? [] : data.shoppingHistory, email: !data.email? "" : data.email, addresses: !data.addresses? [] : data.addresses}
            dispatch(loginUser(userData))
            navigate("/home")
        })
        .catch(error => {
            console.log(error.message)
        })

    };

    const handleLoginSuccess = async (response) => {
        console.log("entro al handleSuccess");
        
        console.log(response.credential);

        try {
          await axios.post(`https://e-commerse-fc.onrender.com/api/auth/google`, {
            token: response.credential,
          })
          .then(({data}) => {
            const {token} = data
            const decodedToken = jwtDecode(token)
            return decodedToken
          })
          .then(async ({id}) => {
            const user = await axios(`https://e-commerse-fc.onrender.com/api/users/${id}`)
            console.log(user)
            return user
          })
          .then(({data}) => {
            const userData = {...data, wishList: !data.wishList? [] : data.wishList, shoppingHistory: !data.shoppingHistory ? [] : data.shoppingHistory}
            dispatch(loginUser(userData))
            alertSwal("Log in exitoso")
            navigate("/home")
          })
          
          // Aquí puedes manejar el estado de autenticación del usuario en tu frontend
        } catch (error) {
          console.error('Error al enviar el token al backend', error);
        }
      };
    
      const handleLoginFailure = (response) => {
        console.error('Error al iniciar sesión con Google', response);
      }

    return (
        <div>
        <div className={styles.background}>

      
        <div className={styles.logInContainer}>
            <form onSubmit={handleSubmit} className="flex flex-column md:flex-row align-items-center justify-content-center">
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <img src={logoNav} alt="logo shopsport" className={`mb-4 w-10rem ${styles.logo}`} />
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="email" className="w-6rem">Email</label>
                        <InputText
                            id="email"
                            type="email"
                            name="email"
                            value={userData.email}
                            placeholder="Email"
                            className="w-12rem"
                            onChange={handleChange}
                        />
                        <span className="p-error">{errors.email}</span>
                    </div>

                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="password" className="w-6rem">Contraseña</label>
                        <InputText
                            id="password"
                            type="password"
                            name="password"
                            value={userData.password}
                            placeholder="Contraseña"
                            className="w-12rem"
                            onChange={handleChange}
                        />
                        <span className="p-error">{errors.password}</span>
                    </div>

                    <Button type="submit" label="Login" icon="pi pi-user" className={styles.button} />

                    <div>
                        <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={handleLoginFailure}
                            className={styles.googleButton}
                        />
                    </div>
                </div>

                
                <Divider align="center" className="w-full mb-3">
                    <b>OR</b>
                </Divider>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Link to={"/signup"}>
                        <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className={styles.button} />
                    </Link>
                </div>
            </form>
        </div>
        </div>
<div>
    <Footer></Footer>
</div>
        </div>
    );
}