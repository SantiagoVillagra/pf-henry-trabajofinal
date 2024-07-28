import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./SearchBar.module.css"
import mockDB from "../../mockDB/mockDB";
import { InputText} from "primereact/inputtext";
import { Button } from "primereact/button";

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
        {/* <div className={styles.inputSearchContainer} >
        <input type="search"  value={searchShoe} placeholder="Busca tu modelo" onChange={handleChange}  className={styles.inputSearch}/>
        <button onClick={handleSearch} disabled={!searchShoe.trim()}  className={styles.botonSearch}>Buscar</button>
        </div> */}
        

        <div className={styles.inputSearchContainer}>
    <InputText type="search"  value={searchShoe} placeholder="Busca tu modelo" onChange={handleChange}  className={styles.inputSearch} />
    <Button onClick={handleSearch} disabled={!searchShoe.trim()}  className={styles.botonSearch} icon="pi pi-search"/>

</div>
    </div>
)



}