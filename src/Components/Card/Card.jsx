import styles from "./Card.module.css"
import { useNavigate } from "react-router-dom"



export default function Card({ID, name, price, image, brand}) {

    const navigate = useNavigate()
    const onClick = (ID) => navigate(`/detail/${ID}`)

    return (
        <div className={styles.Card}>
            <img src={image} alt={name} onClick={() => onClick(ID)}/>
            <p onClick={() => onClick(ID)}>{brand}</p>
            <p onClick={() => onClick(ID)}>{name}</p>
            <p>${price}</p>
            <button onClick={() => onClick(ID)}>Ir al detalle</button>
            <br />
           
        </div>
    )
}