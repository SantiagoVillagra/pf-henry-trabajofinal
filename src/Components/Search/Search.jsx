import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import mockDB from "../../mockDB/mockDB";
import { useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';
import Card from "../Card/Card";
import styles from "./Search.module.css"



function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Search() {

    const [filteredShoes, setFilteredShoes] = useState(mockDB);
    const { searchProduct } = useParams(); // Obtener el parámetro de la URL
    const query = useQuery().get('query'); // Obtener el parámetro de la URL

    useEffect(() => {
        if (query) {
            setFilteredShoes(mockDB.filter(shoe =>
                shoe.name.toLowerCase().includes(query.toLowerCase())
            ));
        } else {
            setFilteredShoes(mockDB);
        }
    }, [query]);


    return (
        <div className={styles.cardSearch} >
                {filteredShoes.map(({ID, name, price, image, brand}) => (
                    <Card
                    key={ID}
                    ID={ID}
                    brand={brand}
                    name={name}
                    price={price}
                    image={image}
                  />
                ))}
           
        </div>
    );
}