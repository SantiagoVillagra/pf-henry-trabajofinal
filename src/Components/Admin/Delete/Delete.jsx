import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { getAllShoes, deleteShoe } from "../../..//Redux/Actions";
import Swal from "sweetalert2";
import styles from "./Delete.module.css";

export default function DeleteShoe() {
  const dispatch = useDispatch();
  const allShoes = useSelector(state => state.allShoes);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedShoe, setSearchedShoe] = useState(null);

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);

  const handleSearch = () => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const foundShoe = allShoes.find(shoe =>
      shoe.name.toLowerCase().includes(lowercasedFilter)
    );
    setSearchedShoe(foundShoe || null);

    if (!foundShoe) {
      Swal.fire({
        icon: "error",
        title: "No encontrado",
        text: "No se encontró ninguna zapatilla con ese nombre.",
      });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (searchedShoe) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: `Eliminarás la zapatilla: ${searchedShoe.name}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminarla",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteShoe(searchedShoe.id));
          Swal.fire(
            "Eliminado!",
            "La zapatilla ha sido eliminada.",
            "success"
          );
          setSearchedShoe(null); // Clear the searched shoe after deletion
          setSearchTerm(""); // Clear the search term
        }
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <div className="p-field">
          {/* <label htmlFor="shoe" className={styles.SearchTittle}>Buscar zapatilla para eliminar</label> */}
          <h1 className={styles.centered}>Buscar zapatilla para eliminar</h1>
          
          <div className={styles.centered}>
            <InputText
              id="shoe"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Busqueda"
              required
            />
            <Button type="button" onClick={handleSearch} className={styles.searchButton}>Buscar</Button>
          </div>
        </div>

        {searchedShoe && (
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <h4>Zapatilla encontrada:</h4>
            <p>{searchedShoe.name}</p>
            <img src={searchedShoe.image} alt={searchedShoe.name} style={{ maxWidth: "200px", height: "auto" }} />
           <div className={styles.centered}>
            <Button type="submit" className={styles.deleteButton} style={{ marginTop: '10px' }}>
              Eliminar zapatilla
            </Button>

           </div>
          </div>
        )}
      </form>
    </div>
  );
}