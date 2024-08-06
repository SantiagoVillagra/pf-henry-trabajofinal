import "primeicons/primeicons.css"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import styles from "./shop.module.css"
import { removeFromCart, addItem, takeItem } from "../../Redux/Actions"

export default function Shop() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)

    return (
        <div className={styles.ShopContainer}>
            <h1>Este es tu carrito de compras</h1>
            <div>
                {
                    !cart.length
                    ? <h3>Tu carrito está vacío</h3>
                    : cart.map(({ item, qty }) => {
                        console.log(item);
                        
                        return (
                            <div className={styles.item}>
                                <img src={item.image} alt={item.name} onClick={() => navigate(`/detail/${item.id}`)}/>
                                <h2>{item.name}</h2>
                                <h3>Precio un.: ${item.price}</h3>
                                <div className={styles.cantidad}>
                                    {
                                        qty > 1
                                        ? <span className="pi pi-minus" onClick={() => dispatch(takeItem(item))}></span>
                                        : <span className="pi pi-times" onClick={() => dispatch(removeFromCart(item))}></span>
                                    }
                                    <h4>Cant: {qty}</h4>
                                    <span className="pi pi-plus" onClick={() => dispatch(addItem(item))}></span>
                                </div>
                                <button onClick={() => dispatch(removeFromCart(item))}>QUITAR DEL CARRITO</button>
                                <h2>Subtotal: ${item.price * qty}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}