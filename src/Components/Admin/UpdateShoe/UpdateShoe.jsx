import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateShoe } from '../../../Redux/Actions'; // Asegúrate de tener esta acción

export default function EditShoeForm({ shoeId }) {
    const dispatch = useDispatch();
    const shoe = useSelector(state => state.detail[shoeId]); // Ajusta según tu estructura de estado
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        price: '',
        gender: '',
        sport: '',
        description: '',
        stock: false,
        sizes: []
    });

    useEffect(() => {
        if (shoe) {
            setFormData({ ...shoe });
        }
    }, [shoe]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateShoe(formData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Brand:
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
            </label>
            {/* Agrega más campos según sea necesario */}
            <button type="submit">Guardar Cambios</button>
        </form>
    );
}