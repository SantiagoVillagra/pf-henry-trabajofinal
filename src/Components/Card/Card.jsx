import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getShoeById } from "../../Redux/Actions";
import styles from "./Card.module.css";

export default function Card({ id, name, price, image, brand }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Clicked ID:", id); // Verifica si el ID es undefined
        if (id) {
            dispatch(getShoeById(id));
            navigate(`/detail/${id}`);
        } else {
            console.error("Invalid ID:", id);
        }
    };

    return (
        <div className={styles.Card}>
            <img src={image} alt={name} onClick={handleClick} />
            <p onClick={handleClick}>{brand}</p>
            <p onClick={handleClick}>{name}</p>
            <p>${price}</p>
            <button onClick={handleClick}>Ir al detalle</button>
            <br />
        </div>
    );
}