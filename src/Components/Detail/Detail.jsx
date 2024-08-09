import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import styles from './Detail.module.css';
import { addToCart, addItem } from '../../Redux/Actions';
import Review from '../Reviews/Reviews';

export default function Detail() {
    const { ID } = useParams();
    const [shoeDetail, setShoeDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const alreadyInCart = cart.find(cartItem => cartItem.item.id === parseInt(ID));
    const [reviews, setReviews] = useState([]);

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

    const handleAddReview = (review) => {
        setReviews([...reviews, review]);
    };

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    if (!shoeDetail || !shoeDetail.id) {
        return <p>La zapatilla no fue encontrada.</p>;
    }

    const sizes = shoeDetail.sizes ? shoeDetail.sizes.map(size => size.value).join(', ') : 'No disponible';

    return (
        <div className={styles.container}>
            <Card title={shoeDetail.brand} className={styles.productCard}>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageContainer}>
                        <img
                            src={shoeDetail.image}
                            alt={shoeDetail.name}
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.detailsContainer}>
                        <h2>{shoeDetail.name}</h2>
                        {
                            alreadyInCart ? 
                            <>
                                <h3>Este producto ya está en el carrito:</h3>
                                <Button 
                                    label="Añadir otro"
                                    icon="pi pi-plus"
                                    className={styles.styledButton}
                                    onClick={() => dispatch(addItem(shoeDetail))}
                                />
                                <span>Cantidad: {alreadyInCart.qty}</span>
                            </>
                            : <Button 
                                label="Añadir al carrito"
                                icon="pi pi-shopping-cart"
                                className={styles.styledButton}
                                onClick={() => dispatch(addToCart(shoeDetail))}
                            />
                        }
                        <table className={styles.sneakerTable}>
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
                <Review reviews={reviews} onSubmit={handleAddReview} />
            </Card>
        </div>
    );
}