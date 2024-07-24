import { useNavigate } from "react-router-dom"
import puma from "../../Assets/ShoeLanding_Mesa de trabajo 1 copia.jpg"
import LogoNav from "../../Assets/LogoNav_Mesa de trabajo 1 copia.png"
import style from "../Landing/Landing.module.css"

export default function Landing() {

    const navigate = useNavigate()

    return (
        <div>
            <header className= {style.header}>
                <img src={LogoNav} alt="logo" className={style.logo} />
            </header>
          
            <h1 className={style.h1}>Bienvenido a TU tienda de calzado deportivo </h1>
            <img src= {puma} alt="banner puma" className={style.ShoeLanding} />
            <div className={style.centradoButton}>

            <button onClick={() => navigate("/home")} className= {style.button}>Comenzar</button>
            </div>
        </div>
    )
}