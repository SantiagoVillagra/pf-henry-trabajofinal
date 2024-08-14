import "primeicons/primeicons.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./shop.module.css";
import { removeFromCart, addItem, takeItem } from "../../Redux/Actions";
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { useState } from "react";

export default function Shop() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);

    const itemTemplate = (product) => {
        return (
            <div className={styles.item}>
                <img
                    src={product.item.image}
                    alt={product.item.name}
                    onClick={() => navigate(`/detail/${product.item.id}`)}
                />
                <div className={styles.itemDetails}>
                    <h2>{product.item.name}</h2>
                    <h3>Precio por unidad: ${product.item.price}</h3>
                    <div className={styles.cantidad}>
                        {product.qty > 1 ? (
                            <i className="pi pi-minus" onClick={() => dispatch(takeItem(product.item))}></i>
                        ) : (
                            <i className="pi pi-times" onClick={() => dispatch(removeFromCart(product.item))}></i>
                        )}
                        <h4>Cant: {product.qty}</h4>
                        <i className="pi pi-plus" onClick={() => dispatch(addItem(product.item))}></i>
                    </div>
                    <Button
                        label="QUITAR DEL CARRITO"
                        onClick={() => dispatch(removeFromCart(product.item))}
                        className="p-button-danger"
                    />
                    <h2>Subtotal: ${product.item.price * product.qty}</h2>
                </div>
            </div>
        );
    };

    const calculateTotal = () => {
        return cart.reduce((acc, product) => acc + product.item.price * product.qty, 0);
    };



    return (
        <div>
        <div className={styles.shopContainer}>
            <DataScroller value={cart} itemTemplate={itemTemplate} rows={10} inline scrollHeight="500px"    className={ styles.DataScroller}/>
        </div>
        <div className={styles.totalContainer}>
                <p className={styles.totalText}>El total de tu compra es ${calculateTotal().toFixed(2)}</p>
                <Button
                    label="Finalizar Compra"
                    className="p-button-success"
                    onClick={() => navigate('/checkout')} // Redirige a la página de checkout o realiza alguna acción
                />
            </div>
        </div>

    );
}