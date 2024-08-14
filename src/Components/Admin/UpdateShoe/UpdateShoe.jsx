import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';
import { getAllShoes, updateShoe } from '../../../Redux/Actions'; // Asegúrate de tener esta acción
import mockBrands from '../../../mockDB/mockBrands';
import mockGenders from '../../../mockDB/mockGenders';
import mockSports from '../../../mockDB/mockSports';
import styles from './UpdateShoe.module.css'; // Asegúrate de importar el CSS

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

export default function UpdateShoeForm() {
  const dispatch = useDispatch();
  const allShoes = useSelector(state => state.allShoes);
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
  const [selectedShoeId, setSelectedShoeId] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle'); // Agregado para controlar el estado de la carga

  useEffect(() => {
    if (selectedShoeId) {
      const selectedShoe = allShoes.find(shoe => shoe.id === selectedShoeId);
      if (selectedShoe) {
        setFormData({ ...selectedShoe });
      }
    }
  }, [selectedShoeId, allShoes]);

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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
    dispatch(updateShoe(formData)).finally(() => {
      setUploadStatus('idle'); // Cambiar estado a "idle" cuando se complete la carga
    });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.pField}>
          <label htmlFor="shoe">Selecciona la zapatilla a editar</label>
          <Dropdown
            id="shoe"
            value={selectedShoeId}
            options={allShoes.map(shoe => ({ label: shoe.name, value: shoe.id }))}
            onChange={(e) => setSelectedShoeId(e.value)}
            placeholder="Selecciona una zapatilla"
            required
          />
        </div>
        {selectedShoeId && (
          <>
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
              Guardar Cambios
            </Button>
            {uploadStatus === 'pending' && <p>Subiendo imagen...</p>} {/* Mostrar mensaje de carga */}
          </>
        )}
      </form>
    </div>
  );
}