import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea"; // Corrige aquí
import { createShoe } from "../../Redux/Actions";
import mockBrands from "../../mockDB/mockBrands";
import mockGenders from "../../mockDB/mockGenders";
import mockSports from "../../mockDB/mockSports";

// Relación de tallas
const sizeMapping = {
  '36': 1,
  '37': 2,
  '38': 3,
  '39': 4,
  '40': 5,
  '41': 6,
  '42': 7,
  '43': 8,
  '44': 9,
  '45': 10,
  '46': 11
};

export default function Create() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    gender: "",
    sport: "",
    image: "",
    description: "",
    stock: true,
    sizes: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSizeChange = (e) => {
    const selectedSizes = e.value;
    setFormData({
      ...formData,
      sizes: selectedSizes.map(size => sizeMapping[size])
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createShoe(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="p-field">
          <label htmlFor="name">Nombre</label>
          <InputText id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="p-field">
          <label htmlFor="brand">Marca</label>
          <Dropdown 
            id="brand" 
            name="brand" 
            value={formData.brand} 
            options={mockBrands} 
            onChange={handleChange} 
            placeholder="Selecciona una marca"
            required 
          />
        </div>
        <div className="p-field">
          <label htmlFor="price">Precio</label>
          <InputText 
            id="price" 
            name="price" 
            value={formData.price} 
            onChange={handleChange} 
            type="number" 
            required 
          />
        </div>
        <div className="p-field">
          <label htmlFor="sizes">Talles</label>
          <MultiSelect 
            id="sizes" 
            name="sizes" 
            value={formData.sizes.map(sizeId => Object.keys(sizeMapping).find(key => sizeMapping[key] === sizeId))} 
            options={Object.keys(sizeMapping)} 
            onChange={handleSizeChange} 
            placeholder="Selecciona tallas"
            required 
          />
        </div>
        <div className="p-field">
          <label htmlFor="gender">Genero</label>
          <Dropdown 
            id="gender" 
            name="gender" 
            value={formData.gender} 
            options={mockGenders} 
            onChange={handleChange} 
            placeholder="Selecciona un genero"
            required 
          />
        </div>
        <div className="p-field">
          <label htmlFor="sport">Deporte</label>
          <Dropdown 
            id="sport" 
            name="sport" 
            value={formData.sport} 
            options={mockSports} 
            onChange={handleChange} 
            placeholder="Selecciona un deporte"
            required 
          />
        </div>
        <div className="p-field">
          <label htmlFor="image">Imagen</label>
          <InputText id="image" name="image" value={formData.image} onChange={handleChange} required />
        </div>
        <div className="p-field">
          <label htmlFor="description">Descripcion</label>
          <InputTextarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Añade la descripcion..."
            rows={5}
            required
          />
        </div>
        <div className="p-field">
          <label htmlFor="stock">Stock</label>
          <Dropdown
            id="stock"
            name="stock"
            value={formData.stock}
            options={[{label: 'Si', value: true}, {label: 'No', value: false}]}
            onChange={handleChange}
            placeholder="Selecciona stock"
            required
          />
        </div>
        <Button type="submit">Enviar formulario</Button>
      </form>
    </div>
  );
}