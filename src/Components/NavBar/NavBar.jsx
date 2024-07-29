import { useNavigate } from "react-router-dom"
import style from "../NavBar/NavBar.module.css"
import LogoNav from "../../Assets/LogoNav_Mesa de trabajo 1 copia.png"
import shop from "../../Assets/shoplogo.png"
import lupa from "../../Assets/lupalogo.png"
import loginlogo from "../../Assets/loginlogo.png"
import SearchBar from "../SearchBar/SearchBar"
import { useSelector } from "react-redux"

export default function Navbar() {

    const navigate = useNavigate()
    const loggedUserData = useSelector(state => state.loggedUserData)

    console.log(loggedUserData);

    return (
        <div className={style.navbar}>

        <img src={LogoNav} alt="logo" className={style.logo} onClick={() => navigate("/home")}  />

        <div>
            <SearchBar></SearchBar>
        </div>
        <div className={style.rigthCenter}>
         <img src={lupa} alt="search" className={style.icon} onClick={() => navigate("/search")} />
         <img src={loginlogo} alt="login" className={style.icon} onClick={() => {
            return loggedUserData.username ? navigate("/dashboard") : navigate("/login")
         }} />
         <img src={shop} alt="shop" className={style.icon} onClick={() => navigate("/shop")} />

        </div>

            
        </div>
    )
}