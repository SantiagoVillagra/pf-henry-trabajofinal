import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import mockDB from "../../mockDB/mockDB";
import { useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';


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
        <div>
            <ul>
                {filteredShoes.map(shoe => (
                    <li key={shoe.ID}>
                        <h2>{shoe.name}</h2>
                        <p>{shoe.brand}</p>
                        <img src={shoe.image} alt={shoe.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}