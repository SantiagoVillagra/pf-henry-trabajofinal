import { useNavigate } from "react-router-dom"
import styles from "../NavBar/NavBar.module.css"
import LogoNav from "../../Assets/LogoNav_Mesa de trabajo 1 copia.png"
import shop from "../../Assets/shoplogo.png"
import lupa from "../../Assets/lupalogo.png"
import loginlogo from "../../Assets/loginlogo.png"
import SearchBar from "../SearchBar/SearchBar"
import { useSelector } from "react-redux"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import 'primeicons/primeicons.css'; // Asegúrate de importar los estilos de PrimeIcons

import "./NavBar.module.css"

import React from 'react';

const Navbar = () => {

 const navigate = useNavigate()
 const loggedUserData = useSelector(state => state.loggedUserData)
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={LogoNav} alt="logo" className={styles.logo} onClick={() => navigate("/home")} />
            </div>
            <div className="navbar-actions">
                <SearchBar></SearchBar>
                <Button icon={<FaUser />} className="navbar-button"  onClick={() => {
            return loggedUserData.username ? navigate("/dashboard") : navigate("/login")
        }}/>
                <Button icon={<FaShoppingCart />} className="navbar-button"  onClick={() => navigate("/shop")}/>
            </div>
        </div>
    );
};

export default Navbar;






















// export default function Navbar() {

//     const navigate = useNavigate()
//     const loggedUserData = useSelector(state => state.loggedUserData)


//     return (
//         <div className={style.navbar}>

//         <img src={LogoNav} alt="logo" className={style.logo} onClick={() => navigate("/home")}  />

//         <div>
//             <SearchBar></SearchBar>
//         </div>
//         <div className={style.rigthCenter}>
//          <img src={lupa} alt="search" className={style.icon} onClick={() => navigate("/search")} />
//          <img src={loginlogo} alt="login" className={style.icon} onClick={() => {
//             return loggedUserData.username ? navigate("/dashboard") : navigate("/login")
//          }} />
//          <img src={shop} alt="shop" className={style.icon} onClick={() => navigate("/shop")} />

//         </div>

            
//         </div>
//     )
// }

// Navbar.jsx