import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getShoeById } from '../../Redux/Actions'; // Ajusta la ruta según tu estructura de proyecto
import { Card as PrimeCard } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';  // O cualquier otro tema que prefieras
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import styles from './Card2.module.css'; // Ajusta la ruta según tu estructura de proyecto

export default function Card2({ id, name, price, image, brand }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        if (id) {
            dispatch(getShoeById(id));
            navigate(`/detail/${id}`);
        } else {
            console.error("Invalid ID:", id);
        }
    };

    const header = (
        <div className={styles['card-header']}>
            <img alt={name} src={image} onClick={handleClick} />
        </div>
    );

    const footer = (
        <div className={styles['card-footer']}>
            <Button label="Ir al detalle" onClick={handleClick} className={styles['card-button']} />
        </div>
    );

    return (
        <PrimeCard 
            className={styles.Card}
            header={header}
            footer={footer}
        >
            <div className={styles['card-content']}>
                <div className={styles['card-title']}>{name}</div>
                <div className={styles['card-subtitle']}>{brand}</div>
                <div className={styles['card-text']}>${price}</div>
            </div>
        </PrimeCard>
    );
}