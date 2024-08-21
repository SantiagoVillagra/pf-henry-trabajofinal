// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import { Dropdown } from 'primereact/dropdown';
// import { MultiSelect } from 'primereact/multiselect';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { FileUpload } from 'primereact/fileupload';
// import { getAllShoes, updateShoe } from '../../../Redux/Actions'; // Asegúrate de tener esta acción
// import mockBrands from '../../../mockDB/mockBrands';
// import mockGenders from '../../../mockDB/mockGenders';
// import mockSports from '../../../mockDB/mockSports';
// import styles from './UpdateShoe.module.css'; // Asegúrate de importar el CSS

// // Relación de tallas
// const sizeMapping = {
//   '36': 1,
//   '37': 2,
//   '38': 3,
//   '39': 4,
//   '40': 5,
//   '41': 6,
//   '42': 7,
//   '43': 8,
//   '44': 9,
//   '45': 10,
//   '46': 11
// };

// export default function UpdateShoeForm() {
//   const dispatch = useDispatch();
//   const allShoes = useSelector(state => state.allShoes);
//   const [formData, setFormData] = useState({
//     name: '',
//     brand: '',
//     price: '',
//     gender: '',
//     sport: '',
//     image: null,
//     description: '',
//     stock: true,
//     sizes: []
//   });
//   const [selectedShoeId, setSelectedShoeId] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('idle'); // Agregado para controlar el estado de la carga

//   useEffect(() => {
//     if (selectedShoeId) {
//       const selectedShoe = allShoes.find(shoe => shoe.id === selectedShoeId);
//       if (selectedShoe) {
//         setFormData({ ...selectedShoe });
//       }
//     }
//   }, [selectedShoeId, allShoes]);

//   useEffect(() => {
//     dispatch(getAllShoes());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSizeChange = (e) => {
//     const selectedSizes = e.value;
//     setFormData({
//       ...formData,
//       sizes: selectedSizes.map((size) => sizeMapping[size])
//     });
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUploadStatus('pending'); // Cambiar estado a "pending" cuando comienza la carga
//     dispatch(updateShoe(formData)).finally(() => {
//       setUploadStatus('idle'); // Cambiar estado a "idle" cuando se complete la carga
//     });
//   };

//   return (
//     <div className={styles.formContainer}>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.pField}>
//           <label htmlFor="shoe">Selecciona la zapatilla a editar</label>
//           <Dropdown
//             id="shoe"
//             value={selectedShoeId}
//             options={allShoes.map(shoe => ({ label: shoe.name, value: shoe.id }))}
//             onChange={(e) => setSelectedShoeId(e.value)}
//             placeholder="Selecciona una zapatilla"
//             required
//           />
//         </div>
//         {selectedShoeId && (
//           <>
//             <div className={styles.pField}>
//               <label htmlFor="name">Nombre</label>
//               <InputText
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className={styles.pField}>
//               <label htmlFor="brand">Marca</label>
//               <Dropdown
//                 id="brand"
//                 name="brand"
//                 value={formData.brand}
//                 options={mockBrands}
//                 onChange={handleChange}
//                 placeholder="Selecciona una marca"
//                 required
//               />
//             </div>
//             <div className={styles.pField}>
//               <label htmlFor="price">Precio</label>
//               <InputText
//                 id="price"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 type="number"
//                 required
//               />
//             </div>
//             <div className={styles.pField}>
//               <label htmlFor="sizes">Talles</label>
//               <MultiSelect
//                 id="sizes"
//                 name="sizes"
//                 value={formData.sizes.map((sizeId) =>
//                   Object.keys(sizeMapping).find(
//                     (key) => sizeMapping[key] === sizeId
//                   )
//                 )}
//                 options={Object.keys(sizeMapping)}
//                 onChange={handleSizeChange}
//                 placeholder="Selecciona tallas"
//                 required
//               />
//             </div>
//             <div className={styles.pField}>
//               <label htmlFor="gender">Género</label>
//               <Dropdown
//                 id="gender"
//                 name="gender"
//                 value={formData.gender}
//                 options={mockGenders}
//                 onChange={handleChange}
//                 placeholder="Selecciona un género"
//                 required
//               />
//             </div>
//             <div className={styles.pField}>
//               <label htmlFor="sport">Deporte</label>
//               <Dropdown
//                 id="sport"
//                 name="sport"
//                 value={formData.sport}
//                 options={mockSports}
//                 onChange={handleChange}
//                 placeholder="Selecciona un deporte"
//                 required
//               />
//             </div>
           
//             <div className={styles.pField}>
//               <label htmlFor="description">Descripción</label>
//               <InputTextarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Añade la descripción..."
//                 rows={5}
//                 required
//               />
//             </div>
//             <div className={styles.pField}>
//               <label htmlFor="stock">Stock</label>
//               <Dropdown
//                 id="stock"
//                 name="stock"
//                 value={formData.stock}
//                 options={[
//                   { label: 'Sí', value: true },
//                   { label: 'No', value: false }
//                 ]}
//                 onChange={handleChange}
//                 placeholder="Selecciona stock"
//                 required
//               />
//             </div>
//             <Button type="submit" className={styles.pFieldButton}>
//               Guardar Cambios
//             </Button>
//             {uploadStatus === 'pending' && <p>Subiendo imagen...</p>} {/* Mostrar mensaje de carga */}
//           </>
//         )}
//       </form>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { getAllShoes, updateShoe } from '../../../Redux/Actions';
import { Image } from 'primereact/image';
import mockBrands from '../../../mockDB/mockBrands';
import mockGenders from '../../../mockDB/mockGenders';
import mockSports from '../../../mockDB/mockSports';
import Swal from 'sweetalert2';
import styles from './UpdateShoe.module.css';

export default function UpdateShoeForm() {
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

  const dispatch = useDispatch();
  const allShoes = useSelector(state => state.allShoes);
  const updateError = useSelector(state => state.updateError); // Obtener error del estado global

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    gender: '',
    sport: '',
    image: null,
    description: '',
    stock: true,
    sizes: {},
    enable: true,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle');

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);

  useEffect(() => {
    if (updateError) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: updateError,
      });
    }
  }, [updateError]);

  const handleSearch = () => {
    const foundShoe = allShoes.find(shoe =>
      shoe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (foundShoe) {
      setSelectedShoe(foundShoe);
      const inStockSizes = foundShoe.sizes.map(size => size.value)
      setFormData({ ...foundShoe, sizes: inStockSizes });
    } else {
      setSelectedShoe(null);
      Swal.fire({
        icon: 'info',
        title: 'No encontrado',
        text: 'No se encontró ninguna zapatilla con ese nombre.',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSizeChange = (size, value) => {
    setFormData({
      ...formData,
      sizes: {
        ...formData.sizes,
        [size]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUploadStatus('pending');
    dispatch(updateShoe(formData))
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Zapatilla actualizada con éxito.',
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al actualizar la zapatilla.',
        });
      })
      .finally(() => {
        setUploadStatus('idle');
      });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.pField}>
          <label htmlFor="search">Buscar zapatilla por nombre</label>
          <InputText
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Nombre de la zapatilla"
          />
          <Button label="Buscar" onClick={handleSearch} className={styles.searchButton} />
        </div>

        {selectedShoe && (
          <>
            <div className={styles.imagePreview}>
              <Image src={selectedShoe.image} alt={selectedShoe.name} width="100%" />
            </div>

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
              <div className={styles.sizeFieldContainer}>
                {Object.keys(sizeMapping).map(size => {
                    const isInFormData = formData.sizes.find(sizeForm => sizeForm === size)
                    return(
                  <div key={size}>
                    <label>{size}</label>
                    <InputNumber
                      value={isInFormData ? 1 : 0}
                      onValueChange={(e) => handleSizeChange(size, e.value)}
                      min={0}
                    />
                  </div>
                )}
                )}
              </div>
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
            <div className={styles.pField}>
              <label htmlFor="enable">Habilitado</label>
              <Dropdown
                id="enable"
                name="enable"
                value={formData.enable}
                options={[
                  { label: 'Sí', value: true },
                  { label: 'No', value: false }
                ]}
                onChange={handleChange}
                placeholder="Selecciona si está habilitado"
                required
              />
            </div>
            <Button type="submit" className={styles.pFieldButton}>
              Guardar Cambios
            </Button>
            {uploadStatus === 'pending' && <p>Subiendo imagen...</p>}
          </>
        )}
      </form>
    </div>
  );
}