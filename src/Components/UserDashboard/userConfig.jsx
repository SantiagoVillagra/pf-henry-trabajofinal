import React, { useState } from 'react';
import alertSwal from "../../funcs/alertSwal"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userInfoChange, addAddress, deleteAddress, editAddress } from '../../Redux/Actions';

export default function UserConfig() {
    const loggedUserData = useSelector(state => state.loggedUserData);
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState({
        editing: false,
        index: -1
    })
    const [isAddingAddress, setIsAddingAddress] = useState(false)
    const [userData, setUserData] = useState({
        username: loggedUserData.username,
        email: loggedUserData.email,
        addresses: loggedUserData.addresses
    });
    const [userDataAddresses, setUserDataAddresses] = useState({
        address: "",
        phone: "",
        postalCode: "",
        city: "",
        province: "",
        country: ""
    })
    const [userDataEditAddresses, setUserDataEditAddresses] = useState({
        address: "",
        phone: "",
        postalCode: "",
        city: "",
        province: "",
        country: ""
    })

    const handleClick = () => {
        setIsEditing(true);
    };

    const handleClickAddress = (idx, addss) => {
        if (isEditingAddress.index < 0){
            setIsEditingAddress({
                editing: true,
                index: idx
            });
            setUserDataEditAddresses({
                address: addss.address,
                phone: addss.phone,
                postalCode: addss.postalCode,
                city: addss.city,
                province: addss.province,
                country: addss.country
            })
        } else if(isEditingAddress.index === idx) {
            setIsEditingAddress({
                editing: false,
                index: -1
            });
            setUserDataEditAddresses({
                address: "",
                phone: "",
                postalCode: "",
                city: "",
                province: "",
                country: ""
            })
        } else {
            alertSwal("Solo puedes editar una dirección por vez")
        }
    };

    const handleAddAddress = () => {
        setIsAddingAddress(!isAddingAddress);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleChangeAddress = (e) => {
        const {name, value } = e.target
        setUserDataAddresses({
            ...userDataAddresses,
            [name]: value
        })
    }
    const handleChangeEditAddress = (e) => {
        const {name, value } = e.target
        setUserDataEditAddresses({
            ...userDataEditAddresses,
            [name]: value
        })
    }

    const handleSave = () => {
        dispatch(userInfoChange(loggedUserData.id, userData));
        setIsEditing(false);
      };

    const handleSaveEditAddress = (index) => {
        dispatch(editAddress({addressId: loggedUserData.addresses[index].id, userId: loggedUserData.id}))
        setIsEditingAddress({
            editing: false,
            index: -1
        });
        setUserDataEditAddresses({
            address: "",
            phone: "",
            postalCode: "",
            city: "",
            province: "",
            country: ""
        })
    }

    const handleSaveAddress = () => {
        dispatch(addAddress(userDataAddresses))
        setIsAddingAddress(!isAddingAddress)
    }

    const handleDeleteAddress = (idx) => {
        dispatch(deleteAddress({addressId: loggedUserData.addresses[idx].id, userId: loggedUserData.id}))
    }

    return (
        <div>
            <Card title="Tus datos">
                <h2>Usuario: {loggedUserData.username}</h2>
                <p>Email: {loggedUserData.email}</p>
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
                    <Button onClick={handleSave}>Guardar</Button>
                </Card>
            )}


            <Card title="Tus direcciones">
                <p>Dirección de envío: {!loggedUserData.addresses.length && "No tienes direcciones de envío registradas"}</p>
                {
                    loggedUserData.addresses?.map((address, idx) => {
                        const isBeingEdited = (isEditingAddress.index === idx)
                        return (
                            <div>
                                {
                                    !isBeingEdited &&
                                    <div>
                                        <p>{address.address}</p>
                                        <p>{address.phone}</p>
                                        <p>{address.postalCode}</p>
                                        <p>{address.city}</p>
                                        <p>{address.province}</p>
                                        <p>{address.country}</p>
                                    </div>
                                }
                                <Button onClick={() => handleClickAddress(idx, address)}>{isBeingEdited ? "Cancelar" : "Editar"}</Button>
                                <Button onClick={() => handleDeleteAddress(idx)}>Eliminar</Button>
                                {isEditingAddress.editing && isEditingAddress.index === idx && (
                                    <Card title="Modificar Dirección">
                                        <div className="p-field">
                                            <label htmlFor="address">Dirección</label>
                                            <InputText
                                                id="address"
                                                name="address"
                                                value={userDataEditAddresses.address}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="phone">Teléfono</label>
                                            <InputText
                                                id="phone"
                                                name="phone"
                                                value={userDataEditAddresses.phone}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="postalCode">Código Postal</label>
                                            <InputText
                                                id="postalCode"
                                                name="postalCode"
                                                value={userDataEditAddresses.postalCode}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="city">Ciudad</label>
                                            <InputText
                                                id="city"
                                                name="city"
                                                value={userDataEditAddresses.city}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="province">Provincia</label>
                                            <InputText
                                                id="province"
                                                name="province"
                                                value={userDataEditAddresses.province}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="country">País</label>
                                            <InputText
                                                id="country"
                                                name="country"
                                                value={userDataEditAddresses.country}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <Button onClick={() => handleSaveEditAddress(idx, userDataEditAddresses)}>Guardar</Button>
                                    </Card>
                                )}
                            </div>
                        )
                    })
                }
                <Button onClick={handleAddAddress}>Agregar dirección</Button>
            </Card>

            {isAddingAddress && (
                <Card title="Agregar Dirección">
                    <div className="p-field">
                        <label htmlFor="address">Dirección</label>
                        <InputText
                            id="address"
                            name="address"
                            value={userDataAddresses.address}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="phone">Teléfono</label>
                        <InputText
                            id="phone"
                            name="phone"
                            value={userDataAddresses.phone}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="postalCode">Código Postal</label>
                        <InputText
                            id="postalCode"
                            name="postalCode"
                            value={userDataAddresses.postalCode}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="city">Ciudad</label>
                        <InputText
                            id="city"
                            name="city"
                            value={userDataAddresses.city}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="province">Provincia</label>
                        <InputText
                            id="province"
                            name="province"
                            value={userDataAddresses.province}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="country">País</label>
                        <InputText
                            id="country"
                            name="country"
                            value={userDataAddresses.country}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <Button onClick={handleSaveAddress}>Guardar</Button>
                </Card>
            )}

        </div>
    );
}