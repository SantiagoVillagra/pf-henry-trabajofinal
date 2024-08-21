import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import logoNav from "../../Assets/LogoNav.png";
import signUp from "../../mockDB/mockSignUp";
import logIn from "../../mockDB/mockLogIn";
import validation from "./validations";
import styles from "./SignUp.module.css";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode"
import { loginUser } from "../../Redux/Actions";
import axios from "axios";
import "primeicons/primeicons.css"; // icons

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    validation(
      { ...userData, [event.target.name]: event.target.value },
      setErrors,
      errors,
      event.target.name
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    validation(userData, setErrors, errors);
    const flag = await signUp(userData, errors);
    console.log(flag)
    if (flag === "flag") {
      await logIn(userData)
      .then(({data: {token}}) =>{
          const decodedToken = jwtDecode(token)
          return decodedToken
      })
      .then(async ({id}) => {
        const user = await axios(`https://e-commerse-fc.onrender.com/api/users/${id}`)
        return user
      })
      .then(({data}) => {
          // const loginTime = new Date().getTime();
          // localStorage.setItem('loginTime', loginTime);
          // console.log(loginTime)
          const userData = {...data, wishList: !data.wishList? [] : data.wishList, shoppingHistory: !data.shoppingHistory ? [] : data.shoppingHistory, email: !data.email? "" : data.email, addresses: !data.addresses? [] : data.addresses}
          dispatch(loginUser(userData))
          navigate("/home")
      })
      .catch(error => {
          console.log(error.message)
      })
      navigate("/home")
    }
  };

  return (
    <div>
      <div
        className={`card p-4 md:p-6 flex flex-column align-items-center ${styles.signupContainer}`}
      >
        <form
          onSubmit={handleSubmit}
          className={`flex flex-column align-items-center w-full ${styles.signupForm}`}
        >
          <img
            src={logoNav}
            alt="logo shopsport"
            className={`mb-4 w-10rem ${styles.logo}`}
          />

          <div
            className={`w-full flex flex-column align-items-center mb-3 ${styles.inputGroup}`}
          >
            <label htmlFor="username" className={`mb-2 ${styles.label}`}>
              Nombre de usuario
            </label>
            <InputText
              id="username"
              type="text"
              name="username"
              value={userData.username}
              placeholder="Nombre de usuario..."
              className={`w-12rem ${styles.input}`}
              onChange={handleChange}
            />
            {errors.username && (
              <div className={`p-error mt-2 ${styles.errorContainer}`}>
                <span className={styles.error}>{errors.username}</span>
              </div>
            )}
          </div>

          <div
            className={`w-full flex flex-column align-items-center mb-3 ${styles.inputGroup}`}
          >
            <label htmlFor="email" className={`mb-2 ${styles.label}`}>
              Email
            </label>
            <InputText
              id="email"
              type="email"
              name="email"
              value={userData.email}
              placeholder="Email..."
              className={`w-12rem ${styles.input}`}
              onChange={handleChange}
            />
            {errors.email && (
              <div className={`p-error mt-2 ${styles.errorContainer}`}>
                <span className={styles.error}>{errors.email}</span>
              </div>
            )}
          </div>

          <div
            className={`w-full flex flex-column align-items-center mb-3 ${styles.inputGroup}`}
          >
            <label htmlFor="password" className={`mb-2 ${styles.label}`}>
              Contraseña
            </label>
            <InputText
              id="password"
              type="password"
              name="password"
              value={userData.password}
              placeholder="Contraseña..."
              className={`w-12rem ${styles.input}`}
              onChange={handleChange}
            />
            {errors.password && (
              <div className={`p-error mt-2 ${styles.errorContainer}`}>
                <span className={styles.error}>{errors.password}</span>
              </div>
            )}
          </div>

          <div
            className={`w-full flex flex-column align-items-center mb-3 ${styles.inputGroup}`}
          >
            <label htmlFor="passwordRepeat" className={`mb-2 ${styles.label}`}>
              Repeti contraseña
            </label>
            <InputText
              id="passwordRepeat"
              type="password"
              name="passwordRepeat"
              value={userData.passwordRepeat}
              placeholder="Repeti contraseña..."
              className={`w-12rem ${styles.input}`}
              onChange={handleChange}
            />
            {errors.passwordRepeat && (
              <div className={`p-error mt-2 ${styles.errorContainer}`}>
                <span className={styles.error}>{errors.passwordRepeat}</span>
              </div>
            )}
          </div>

          <Button
            type="submit"
            label="Sign Up"
            icon="pi pi-user-plus"
            className={styles.buttonLogin}
          />

          <Divider align="center" className="w-full mb-3">
            <b>OR</b>
          </Divider>

          <Link to="/login">
            <Button
              label="Log In"
              icon="pi pi-user"
              className={styles.buttonLogin}
            />
          </Link>
        </form>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
