import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import styles from "./Detail.module.css";
import axios from "axios"

export default function Detail() {

    const { ID } = useParams();
    const [shoeDetail, setShoeDetail] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios(`https://e-commerse-fc.onrender.com/api/shoes/id/${ID}`)
            .then(({ data }) => {
                setShoeDetail(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching shoe details:", error);
                setLoading(false);
            });
    }, [ID]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!shoeDetail || !shoeDetail.id) {
        return <p>La zapatilla no fue encontrada.</p>;
    }
    const sizes = shoeDetail.sizes ? shoeDetail.sizes.map(size => size.value).join(', ') : 'No disponible';

    return (
        <div className={styles.Detail}>
            <img src={shoeDetail.image} alt={shoeDetail.name} />
            <div className={styles.DetailContent}>
                <h2>{shoeDetail.brand} {shoeDetail.name}</h2>
                <button className={styles.styedButton}>Añadir al carrito</button>
                <table border="1" className={styles.sneakerTable}>
                    <tbody>
                        <tr>
                            <td className={styles.boldTd}>Marca</td>
                            <td>{shoeDetail.brand}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Modelo</td>
                            <td>{shoeDetail.name}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Precio</td>
                            <td>$ {shoeDetail.price}</td>
                        </tr> 
                        <tr>
                            <td className={styles.boldTd}>Talles</td>
                            <td>{sizes || 'No disponible'}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Género</td>
                            <td>{shoeDetail.gender}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Deporte</td>
                            <td>{shoeDetail.sport}</td>
                        </tr>
                        <tr>
                            <td className={styles.boldTd}>Descripción</td>
                            <td className={styles.description}>{shoeDetail.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}