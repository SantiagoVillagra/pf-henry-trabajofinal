import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userInfoChange } from '../../Redux/Actions';

export default function UserConfig() {
    const loggedUserData = useSelector(state => state.loggedUserData);
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        username: loggedUserData.username,
        email: loggedUserData.email,
        addresses: loggedUserData.addresses
    });

    const handleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSave = () => {
        dispatch(userInfoChange(loggedUserData.id, userData));
        setIsEditing(false);
      };

    return (
        <div>
            <Card title="Tus datos">
                <h2>Usuario: {loggedUserData.username}</h2>
                <p>Email: {loggedUserData.email}</p>
                <p>Dirección de envío: {loggedUserData.addresses}</p>
                <Button onClick={handleClick}>Cambia tu información</Button>
            </Card>

            {isEditing && (
                <Card title="Modificar Datos">
                    <div className="p-field">
                        <label htmlFor="username">Usuario</label>
                        <InputText
                            id="username"
                            name="username"
                            value={userData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="email">Email</label>
                        <InputText
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="addresses">Dirección de envío</label>
                        <InputText
                            id="addresses"
                            name="addresses"
                            value={userData.addresses}
                            onChange={handleChange}
                        />
                    </div>
                    <Button onClick={handleSave}>Guardar</Button>
                </Card>
            )}
        </div>
    );
}