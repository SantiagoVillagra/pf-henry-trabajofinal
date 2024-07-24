import styles from "./Card.module.css"
import { useNavigate } from "react-router-dom"

export default function Card({ID, name, price, image}) {

    const navigate = useNavigate()
    const onClick = (ID) => navigate(`/detail/${ID}`)

    return (
        <div className={styles.Card}>
            <img src={image} alt={name} onClick={() => onClick(ID)}/>
            <p onClick={() => onClick(ID)}>{name}</p>
            <p>{price}</p>
            <button>Ir al detalle</button>
        </div>
    )
}