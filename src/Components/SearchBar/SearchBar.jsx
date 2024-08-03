import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import styles from "./SearchBar.module.css";
import mockDB from "../../mockDB/mockDB";
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css'; // Asegúrate de importar los estilos de PrimeIcons
import { Button } from "primereact/button";
import {FaSearch} from 'react-icons/fa'


export default function SearchBar() {
    const navigate = useNavigate();
    
    // Estado para manejar la visibilidad de la barra de búsqueda
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const [searchShoe, setSearchShoe] = useState('');
    const [filteredShoes, setFilteredShoes] = useState(mockDB);

    const handleChange = (event) => {
        setSearchShoe(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();

        const filteredItems = mockDB.filter(shoe => 
            shoe.name.toLowerCase().includes(searchShoe.toLowerCase())
        );

        if (filteredItems.length === 0) {
            Swal.fire({
                title: "No se encontraron resultados",
                showClass: {
                    popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                    `
                },
                hideClass: {
                    popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                    `
                }
            });
        } else {
            navigate(`/search?query=${encodeURIComponent(searchShoe)}`);
        }
    };

    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputSearchContainer}>
                {isSearchBarVisible && (
                    <InputText 
                        className="search-input" 
                        placeholder="Buscar..." 
                        value={searchShoe} 
                        onChange={handleChange} 
                        onKeyDown={handleKeyDown} // Detecta la tecla Enter
                    />
                )}
                <Button 
                    icon={<FaSearch />} 
                    className="navbar-button" 
                    onClick={toggleSearchBar} 
                />
            </div>
        </div>
    );
}