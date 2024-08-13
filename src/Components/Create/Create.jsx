import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from 'primereact/fileupload'; // Importar FileUpload
import { createShoe } from "../../Redux/Actions";
import mockBrands from "../../mockDB/mockBrands";
import mockGenders from "../../mockDB/mockGenders";
import mockSports from "../../mockDB/mockSports";
import styles from "./Create.module.css"; // Asegúrate de importar el CSS

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
    name: '',
    brand: '',
    price: '',
    gender: '',
    sport: '',
    image: null,
    description: '',
    stock: true,
    sizes: []
  });
  const [uploadStatus, setUploadStatus] = useState('idle'); // Agregado para controlar el estado de la carga

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
      sizes: selectedSizes.map((size) => sizeMapping[size])
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUploadStatus('pending'); // Cambiar estado a "pending" cuando comienza la carga
    dispatch(createShoe(formData)).finally(() => {
      setUploadStatus('idle'); // Cambiar estado a "idle" cuando se complete la carga
    });
  };

  const handleImageUpload = (e) => {
    const file = e.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file
    }));
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.pField}>
          <label htmlFor="name">Nombre</label>
          <InputText
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.pField}>
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
        <div className={styles.pField}>
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
        <div className={styles.pField}>
          <label htmlFor="sizes">Talles</label>
          <MultiSelect
            id="sizes"
            name="sizes"
            value={formData.sizes.map((sizeId) =>
              Object.keys(sizeMapping).find(
                (key) => sizeMapping[key] === sizeId
              )
            )}
            options={Object.keys(sizeMapping)}
            onChange={handleSizeChange}
            placeholder="Selecciona tallas"
            required
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="gender">Género</label>
          <Dropdown
            id="gender"
            name="gender"
            value={formData.gender}
            options={mockGenders}
            onChange={handleChange}
            placeholder="Selecciona un género"
            required
          />
        </div>
        <div className={styles.pField}>
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
        <div className={styles.pField}>
          <label htmlFor="image">Imagen</label>
          <FileUpload
            name="image"
            accept="image/*"
            maxFileSize={1000000}
            customUpload
            auto
            uploadHandler={handleImageUpload}
            chooseLabel="Seleccionar Imagen"
            className={styles.pFieldButton}
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="description">Descripción</label>
          <InputTextarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Añade la descripción..."
            rows={5}
            required
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="stock">Stock</label>
          <Dropdown
            id="stock"
            name="stock"
            value={formData.stock}
            options={[
              { label: 'Sí', value: true },
              { label: 'No', value: false }
            ]}
            onChange={handleChange}
            placeholder="Selecciona stock"
            required
          />
        </div>
        <Button type="submit" className={styles.pFieldButton}>
          Enviar formulario
        </Button>
        {uploadStatus === 'pending' && <p>Subiendo imagen...</p>} {/* Mostrar mensaje de carga */}
      </form>
    </div>
  );
}