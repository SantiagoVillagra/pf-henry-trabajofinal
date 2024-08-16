import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUserBanStatus, deleteUser } from '../../../Redux/Actions'; 
import { DataScroller } from 'primereact/datascroller';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import Swal from 'sweetalert2';
import styles from './UsersControl.module.css'; 

export default function UsersControl() {
    const dispatch = useDispatch();
    const allUsers = useSelector(state => state.users); // Obtén todos los usuarios
    const error = useSelector(state => state.error);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(allUsers);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    useEffect(() => {
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const result = allUsers.filter(user =>
                user.username.toLowerCase().includes(query) || user.id.toString().includes(query)
            );
            setFilteredUsers(result);
        } else {
            setFilteredUsers(allUsers);
        }
    }, [searchQuery, allUsers]);

    const handleBanToggle = (userId, currentBanStatus) => {
        const newBanStatus = !currentBanStatus;
        dispatch(updateUserBanStatus(userId, newBanStatus));
    };

    const handleDeleteUser = (userId) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás recuperar este usuario después de eliminarlo.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(userId));
                Swal.fire(
                    'Eliminado!',
                    'El usuario ha sido eliminado.',
                    'success'
                );
            }
        });
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const itemTemplate = (user) => {
        return (
            <Card className={styles.card}>
                <Button
                    label="Eliminar Usuario"
                    icon="pi pi-trash"
                    className={styles.deleteButton}
                    onClick={() => handleDeleteUser(user.id)}
                />
                <div className={styles.cardContent}>
                    <h2>{user.username}</h2>
                    {user.isAdmin && <h4 className={styles.cardText}>ADMINISTRADOR</h4>}
                    <p className={styles.cardText}>Email: {user.email}</p>
                    <p className={styles.cardText}>Status: {user.ban ? 'Banned' : 'Active'}</p>
                </div>
                <Button
                    label={user.ban ? 'Unban' : 'Ban'}
                    onClick={() => handleBanToggle(user.id, user.ban)}
                    className={styles.cardButton}
                />
            </Card>
        );
    };

    return (
        <div>
            <div className={styles.searchBar}>
                <InputText
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Buscar por nombre o ID"
                />
               
            </div>
            {error && <p>Error: {error}</p>}
            <DataScroller
                value={filteredUsers}
                itemTemplate={itemTemplate}
                rows={5}
                inline
                scrollHeight="500px"
                header="Scroll Down to Load More"
            />
        </div>
    );
}