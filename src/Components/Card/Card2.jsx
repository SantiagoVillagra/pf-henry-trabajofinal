import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    const loggedUserData = useSelector(state => state.loggedUserData);

    const handleClick = () => {
        if (id) {
            dispatch(getShoeById(id));
            navigate(`/detail/${id}`);
        } else {
            console.error("Invalid ID:", id);
        }
    };

    const header = (
        <img alt={name} src={image} onClick={handleClick} className={styles['card-header']} />
    );

    const footer = (
        <span>
            <Button label="Ir al detalle"  onClick={handleClick} className={styles['card-button']} />
        </span>
    );

    return (
        <PrimeCard 
            title={name} 
            subTitle={`$${price}`} 
            header={header} 
            footer={footer} 
            className={styles.Card}
        >
            {/* <div className={styles['card-content']}>
                <p className={styles['card-title']}>{name}</p>
                <p className={styles['card-subtitle']}>{brand}</p> */}
                {/* {loggedUserData.username && !loggedUserData.isadmin && (
                    <>
                        <span className="pi pi-bookmark"></span>
                        <span className="pi pi-bookmark-fill"></span>
                    </>
                )} */}
            {/* </div> */}
        </PrimeCard>
    );
}