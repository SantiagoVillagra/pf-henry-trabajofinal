import "primeicons/primeicons.css"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import styles from "./shop.module.css"
import { removeFromCart, addItem, takeItem } from "../../Redux/Actions"
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { useState } from "react";


export default function Shop() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);

    const listTemplate = (product) => {
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

    return (
        <div className={styles.ShopContainer}>
            <h1>Este es tu carrito de compras</h1>
            <DataView
                value={cart}
                layout="list"
                itemTemplate={listTemplate}
                emptyMessage="Tu carrito está vacío"
            />
        </div>
    );
}