import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import logoNav from "../../Assets/LogoNav_Mesa de trabajo 1 copia.png";
import signUp from "../../mockDB/mockSignUp";
import validation from "./validations";

import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // icons

export default function Signup() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        passwordRepeat: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        validation({ ...userData, [event.target.name]: event.target.value }, setErrors, errors, event.target.name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validation(userData, setErrors, errors);
        const flag = signUp(userData, errors);
        if (flag === "flag") {
            navigate("/login");
        }
    };

    return (
        <div className="card p-4 md:p-6 flex flex-column align-items-center">
            <form onSubmit={handleSubmit} className="flex flex-column align-items-center w-full">
                <img src={logoNav} alt="logo shopsport" className="mb-4 w-10rem" />

                <div className="w-full flex flex-column align-items-center mb-3">
                    <label htmlFor="username" className="mb-2">Nombre de usuario</label>
                    <InputText
                        id="username"
                        type="text"
                        name="username"
                        value={userData.username}
                        placeholder="Nombre de usuario..."
                        className="w-12rem"
                        onChange={handleChange}
                    />
                    {errors.username && <span className="p-error mt-2">{errors.username}</span>}
                </div>

                <div className="w-full flex flex-column align-items-center mb-3">
                    <label htmlFor="email" className="mb-2">Email</label>
                    <InputText
                        id="email"
                        type="email"
                        name="email"
                        value={userData.email}
                        placeholder="Email..."
                        className="w-12rem"
                        onChange={handleChange}
                    />
                    {errors.email && <span className="p-error mt-2">{errors.email}</span>}
                </div>

                <div className="w-full flex flex-column align-items-center mb-3">
                    <label htmlFor="password" className="mb-2">Contraseña</label>
                    <InputText
                        id="password"
                        type="password"
                        name="password"
                        value={userData.password}
                        placeholder="Contraseña..."
                        className="w-12rem"
                        onChange={handleChange}
                    />
                    {errors.password && <span className="p-error mt-2">{errors.password}</span>}
                </div>

                <div className="w-full flex flex-column align-items-center mb-3">
                    <label htmlFor="passwordRepeat" className="mb-2">Repeti contraseña</label>
                    <InputText
                        id="passwordRepeat"
                        type="password"
                        name="passwordRepeat"
                        value={userData.passwordRepeat}
                        placeholder="Repeti contraseña..."
                        className="w-12rem"
                        onChange={handleChange}
                    />
                    {errors.passwordRepeat && <span className="p-error mt-2">{errors.passwordRepeat}</span>}
                </div>

                <Button type="submit" label="Sign Up" icon="pi pi-user-plus" className="w-12rem mb-3" />

                <Divider align="center" className="w-full mb-3">
                    <b>OR</b>
                </Divider>

                <Link to="/login">
                    <Button label="Log In" icon="pi pi-user" className="w-12rem" />
                </Link>
            </form>
        </div>
    );
}