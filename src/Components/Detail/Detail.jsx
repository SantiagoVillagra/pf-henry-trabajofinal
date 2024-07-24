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
            <img src={sneakerDetail.Image} alt={sneakerDetail.Name} />
            <div>
                <p>{sneakerDetail.Name}</p>
                <p>${sneakerDetail.Price}</p>
                <p>{sneakerDetail.Sport}</p>
                <p>Descripcion: {sneakerDetail.Description}</p>
            </div>
        </div>
    )
}