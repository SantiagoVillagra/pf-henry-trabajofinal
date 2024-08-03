import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail() {
    const { ID } = useParams();
    const sneakerDetail = useSelector(state => state.detail); // Accede a detail

    // Asegúrate de que el detalle se encuentra correctamente
    console.log("Detail component ID:", ID);
    console.log("Sneaker Detail:", sneakerDetail);

    if (!sneakerDetail || sneakerDetail.id !== parseInt(ID)) {
        return <p>La zapatilla no fue encontrada.</p>;
    }

    const sizes = sneakerDetail.sizes.map(size => size.value).join(', ');

    return (
        <div className={styles.Detail}>
            <img src={sneakerDetail.image} alt={sneakerDetail.name} />
            <div className={styles.DetailContent}>
                <h2>{sneakerDetail.brand} {sneakerDetail.name}</h2>
                <button className={styles.styedButton}>Añadir al carrito</button>
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
                            <td>{sizes || 'No disponible'}</td>
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
    );
}