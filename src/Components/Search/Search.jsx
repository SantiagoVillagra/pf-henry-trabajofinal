import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./Search.module.css";

export default function Search() {
    const searchedShoes = useSelector(state => state.searchedShoes);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className={styles.cardSearch}>
            {searchedShoes.length === 0 ? (
                <p>No se encontraron productos.</p>
            ) : (
                searchedShoes.map(({ id, name, price, image, brand }) => (
                    <div key={id} onClick={() => handleClick(id)}>
                        <Card
                            id={id}
                            brand={brand}
                            name={name}
                            price={price}
                            image={image}
                        />
                    </div>
                ))
            )}
        </div>
    );
}