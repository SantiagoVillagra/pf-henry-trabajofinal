import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./SearchBar.module.css"
import mockDB from "../../mockDB/mockDB";

export default function SearchBar(){

    const navigate = useNavigate()
       
    const [searchShoe, setSearchShoe] = useState('');
    const [filteredShoes, setFilteredShoes] = useState(mockDB);



    const handleChange = (event) =>{
        setSearchShoe(event.target.value)
    }

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/search?query=${encodeURIComponent(searchShoe)}`);
    };


  

return(
    <div className={styles.container}>
        <div className={styles.inputSearchContainer} >
        <input type="search"  value={searchShoe} placeholder="Busca tu modelo" onChange={handleChange}  className={styles.inputSearch}/>
        <button onClick={handleSearch}  className={styles.botonSearch}>Buscar</button>
        </div>
        
    </div>
)



}