import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { getAllShoes, deleteShoe } from "../../../Redux/Actions";
import Swal from "sweetalert2";
import styles from "./Delete.module.css";

export default function DeleteShoe() {
  const dispatch = useDispatch();
  const allShoes = useSelector(state => state.allShoes);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [searchedShoe, setSearchedShoe] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm) {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filtered = allShoes.filter(shoe =>
        shoe.name.toLowerCase().includes(lowercasedFilter)
      );
      setFilteredShoes(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredShoes([]);
      setShowSuggestions(false);
    }
  }, [searchTerm, allShoes]);

  const handleSelectSuggestion = (shoeName) => {
    setSearchTerm(shoeName);
    setShowSuggestions(false);
    const foundShoe = allShoes.find(shoe => shoe.name === shoeName);
    setSearchedShoe(foundShoe);
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
          setSearchedShoe(null);
          setSearchTerm("");
        }
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <div className="p-field">
          <h1 className={styles.centered}>Buscar zapatilla para eliminar</h1>

          <div className={styles.centered}>
            <InputText
              id="shoe"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Busqueda"
              required
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            />
            <Button
              type="button"
              onClick={() => handleSelectSuggestion(searchTerm)}
              className={styles.searchButton}
            >
              Buscar
            </Button>
          </div>

          {showSuggestions && filteredShoes.length > 0 && (
            <ul className={styles.suggestionsList}>
              {filteredShoes.map((shoe) => (
                <li
                  key={shoe.id}
                  className={styles.suggestionItem}
                  onMouseDown={() => handleSelectSuggestion(shoe.name)}
                >
                  {shoe.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {searchedShoe && (
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <h4>Zapatilla encontrada:</h4>
            <p>{searchedShoe.name}</p>
            <img
              src={searchedShoe.image}
              alt={searchedShoe.name}
              style={{ maxWidth: "200px", height: "auto" }}
            />
            <div className={styles.centered}>
              <Button
                type="submit"
                className={styles.deleteButton}
                style={{ marginTop: "10px" }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // Evita que se envíe el formulario al presionar Enter
                  }
                }}
              >
                Eliminar zapatilla
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}