import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { getAllShoes, deleteShoe } from "../../Redux/Actions";

export default function DeleteShoe() {
  const dispatch = useDispatch();
  const allShoes = useSelector(state => state.allShoes);
  const [selectedShoeId, setSelectedShoeId] = useState(null);

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);

  const handleDelete = (e) => {
    e.preventDefault();
    if (selectedShoeId) {
      dispatch(deleteShoe(selectedShoeId));
    }
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <div className="p-field">
          <label htmlFor="shoe">Selecciona la zapatilla a eliminar</label>
          <Dropdown 
            id="shoe" 
            value={selectedShoeId} 
            options={allShoes.map(shoe => ({ label: shoe.name, value: shoe.id }))}
            onChange={(e) => setSelectedShoeId(e.value)} 
            placeholder="Selecciona una zapatilla"
            required 
          />
        </div>
        <Button type="submit">Eliminar zapatilla</Button>
      </form>
    </div>
  );
}