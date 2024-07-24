import styles from "./Card.module.css"
import { useNavigate } from "react-router-dom"

export default function Card({ID, Name, Price, Image}) {

    const navigate = useNavigate()
    const onClick = (ID) => navigate(`/detail/${ID}`)

    return (
        <div className={styles.Card}>
            <img src={Image} alt={Name} onClick={() => onClick(ID)}/>
            <p onClick={() => onClick(ID)}>{Name}</p>
            <p>{Price}</p>
        </div>
    )
}