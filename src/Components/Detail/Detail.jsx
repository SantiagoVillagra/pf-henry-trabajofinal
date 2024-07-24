import sneakers from "../../mockDB/mockDB"
import { useParams } from "react-router-dom"
import styles from "./Detail.module.css"

export default function Detail() {

    const {ID} = useParams()
    const sneakerFilter = sneakers.filter(sneaker => {
        return(sneaker.ID === parseInt(ID))
    }
    )
    const sneakerDetail = sneakerFilter[0]

    return (
        <div className={styles.Detail}>
            <img src={sneakerDetail.image} alt={sneakerDetail.name} />
            <div>
                <p>{sneakerDetail.name}</p>
                <p>${sneakerDetail.price}</p>
                <p>{sneakerDetail.sport}</p>
                <p>Descripcion: {sneakerDetail.description}</p>
            </div>
        </div>
    )
}