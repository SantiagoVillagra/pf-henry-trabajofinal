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
        direccion: "",
        numberphone: "",
        codigopostal: "",
        ciudad: "",
        provincia: "",
        pais: ""
    })
    const [userDataEditAddresses, setUserDataEditAddresses] = useState({
        direccion: "",
        numberphone: "",
        codigopostal: "",
        ciudad: "",
        provincia: "",
        pais: ""
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
                direccion: addss.direccion,
                numberphone: addss.numberphone,
                codigopostal: addss.codigopostal,
                ciudad: addss.ciudad,
                provincia: addss.provincia,
                pais: addss.pais
            })
        } else if(isEditingAddress.index === idx) {
            setIsEditingAddress({
                editing: false,
                index: -1
            });
            setUserDataEditAddresses({
                direccion: "",
                numberphone: "",
                codigopostal: "",
                ciudad: "",
                provincia: "",
                pais: ""
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

    const handleSaveEditAddress = (index, address) => {
        dispatch(editAddress(index, address))
        setIsEditingAddress({
            editing: false,
            index: -1
        });
        setUserDataEditAddresses({
            direccion: "",
            numberphonephone: "",
            codigopostal: "",
            ciudad: "",
            provincia: "",
            pais: ""
        })
    }

    const handleSaveAddress = () => {
        const newUserDataAdresses = {...userDataAddresses, userid:loggedUserData.id}
        dispatch(addAddress(newUserDataAdresses))
        setIsAddingAddress(!isAddingAddress)
    }

    const handleDeleteAddress = (idx) => {
        dispatch(deleteAddress(idx))
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
                                        <p>{address.direccion}</p>
                                        <p>{address.numberphone}</p>
                                        <p>{address.codigopostal}</p>
                                        <p>{address.ciudad}</p>
                                        <p>{address.provicia}</p>
                                        <p>{address.pais}</p>
                                    </div>
                                }
                                <Button onClick={() => handleClickAddress(idx, address)}>{isBeingEdited ? "Cancelar" : "Editar"}</Button>
                                <Button onClick={() => handleDeleteAddress(idx)}>Eliminar</Button>
                                {isEditingAddress.editing && isEditingAddress.index === idx && (
                                    <Card title="Modificar Dirección">
                                        <div className="p-field">
                                            <label htmlFor="direccion">Dirección</label>
                                            <InputText
                                                id="direccion"
                                                name="direccion"
                                                value={userDataEditAddresses.direccion}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="phonenumber">Teléfono</label>
                                            <InputText
                                                id="phonenumber"
                                                name="phonenumber"
                                                value={userDataEditAddresses.phonenumber}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="codigopostal">Código Postal</label>
                                            <InputText
                                                id="codigopostal"
                                                name="codigopostal"
                                                value={userDataEditAddresses.codigopostal}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="ciudad">Ciudad</label>
                                            <InputText
                                                id="ciudad"
                                                name="ciudad"
                                                value={userDataEditAddresses.ciudad}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="provincia">Provincia</label>
                                            <InputText
                                                id="provincia"
                                                name="provincia"
                                                value={userDataEditAddresses.provincia}
                                                onChange={handleChangeEditAddress}
                                            />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="pais">País</label>
                                            <InputText
                                                id="pais"
                                                name="pais"
                                                value={userDataEditAddresses.pais}
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
                        <label htmlFor="direccion">Dirección</label>
                        <InputText
                            id="direccion"
                            name="direccion"
                            value={userDataAddresses.direccion}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="phonenumber">Teléfono</label>
                        <InputText
                            id="phonenumber"
                            name="phonenumber"
                            value={userDataAddresses.phonenumber}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="codigopostal">Código Postal</label>
                        <InputText
                            id="codigopostal"
                            name="codigopostal"
                            value={userDataAddresses.codigopostal}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="ciudad">Ciudad</label>
                        <InputText
                            id="ciudad"
                            name="ciudad"
                            value={userDataAddresses.ciudad}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="provincia">Provincia</label>
                        <InputText
                            id="provincia"
                            name="provincia"
                            value={userDataAddresses.provincia}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="pais">País</label>
                        <InputText
                            id="pais"
                            name="pais"
                            value={userDataAddresses.pais}
                            onChange={handleChangeAddress}
                        />
                    </div>
                    <Button onClick={handleSaveAddress}>Guardar</Button>
                </Card>
            )}

        </div>
    );
}