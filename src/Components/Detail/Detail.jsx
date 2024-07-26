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
            <div className={styles.DetailContent}>
                <h2>{sneakerDetail.brand} {sneakerDetail.name}</h2>
                <button>Añadir al carrito</button>
                <table border="1" className={styles.sneakerTable}>
                    <tbody>
                        <tr>
                            <td className={styles.boldTd}>Marca</td>
                            <td>{sneakerDetail.brand}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Modelo</td>
                            <td>{sneakerDetail.name}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Precio</td>
                            <td>$ {sneakerDetail.price}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Talles</td>
                            <td>{sneakerDetail.size.join(', ')}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Género</td>
                            <td>{sneakerDetail.gender}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Deporte</td>
                            <td>{sneakerDetail.sport}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Descripción</td>
                            <td className={styles.description}>{sneakerDetail.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}