import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getShoeById } from '../../Redux/Actions'; // Asegúrate de ajustar la ruta según la estructura de tu proyecto
import { Card as PrimeCard } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';  // o cualquier otro tema que prefieras
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import styles from "./Card2.module.css"; // Asegúrate de ajustar la ruta según la estructura de tu proyecto

export default function Card({ id, name, price, image, brand }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedUserData = useSelector(state => state.loggedUserData);

    const handleClick = () => {
        console.log("Clicked ID:", id); // Verifica si el ID es undefined
        if (id) {
            dispatch(getShoeById(id));
            navigate(`/detail/${id}`);
        } else {
            console.error("Invalid ID:", id);
        }
    };

    const header = (
        <img alt={name} src={image} onClick={handleClick} style={{ cursor: 'pointer' }} />
    );

    const footer = (
        <span>
            <Button label="Ir al detalle" icon="pi pi-info-circle" onClick={handleClick} />
        </span>
    );

    return (
        <PrimeCard title={name} subTitle={`$${price}`} header={header} footer={footer} className={styles.Card}>
            <p>{brand}</p>
            {loggedUserData.username && !loggedUserData.isadmin && (
                <>
                    <span className="pi pi-bookmark"></span>
                    <span className="pi pi-bookmark-fill"></span>
                </>
            )}
        </PrimeCard>
    );
}