
import { useSelector, useDispatch } from "react-redux"
import styles from "./shop.module.css"
import { removeFromCart, addItem, takeItem } from "../../Redux/Actions"

export default function Shop() {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    return (
        <div>
            <p>Este es tu carrito de compras</p>
            {
                !cart.length
                ? <p>Tu carrito está vacío</p>
                : cart.map(({ item, qty }) => {
                    console.log(typeof(qty));
                    
                    return (
                        <div className={styles.item}>
                            <img src={item.image} alt={item.name} />
                            <div className={styles.cantidad}>
                                {
                                    qty > 1
                                    ? <button onClick={() => dispatch(takeItem(item))}>-</button>
                                    : <button onClick={() => dispatch(removeFromCart(item))}>x</button>
                                }
                                <p>Cant: {qty}</p>
                                <button onClick={() => dispatch(addItem(item))}>+</button>
                            </div>
                            <button onClick={() => dispatch(removeFromCart(item))}>Quitar del carrito</button>
                        </div>
                    )
                })
            }
        </div>
    )
}