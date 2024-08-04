import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { addToCart, addItem } from "../../Redux/Actions"
import styles from "./Detail.module.css";
import axios from "axios"

export default function Detail() {

    const { ID } = useParams();
    
    const [shoeDetail, setShoeDetail] = useState({})
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const alreadyInCart = cart.find(cartItem => cartItem.item.id === parseInt(ID))
    

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
                {
                alreadyInCart ? 
                <>
                    <h3>Este producto ya está en el carrito:</h3>
                    <button onClick={() => dispatch(addItem(shoeDetail))} className={styles.styedButton}>Añadir otro</button>
                    <span>Cantidad: {(cart.find(cartItem => cartItem.item.id === parseInt(ID))).qty}</span>
                </>
                : <button onClick={() => dispatch(addToCart(shoeDetail))} className={styles.styedButton}>Añadir al carrito</button>
                }
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