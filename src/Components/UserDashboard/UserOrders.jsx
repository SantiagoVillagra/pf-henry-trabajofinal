import { DataScroller } from 'primereact/datascroller';
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import arrayOrders from '../../mockDB/mockOrders2';
import Swal from 'sweetalert2';
import styles from "./UserOrders.module.css";
import axios from 'axios';


export default function UserOrders() {
    const { orders } = useSelector(state => state.loggedUserData);
    const loggedUserData = useSelector(state => loggedUserData)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const createOrder = async () => {
        const {response} = await axios.post(`https://e-commerse-fc.onrender.com/api/createorder/preferenceId`, {preferenceId: `${loggedUserData.preferenceId}`})

        const {payments, items} = response[0]

        const itemsIds = items.map(item => {
            return {
                itemId: item.id,
                quantity: item.quantity
            } 
        })
        //! HAY QUE AGREGAR DIRECCOIN DE PEDIDO   
        const createOrder = await axios.post(`https://e-commerse-fc.onrender.com/api/order/`, {
            userId: loggedUserData.id,
            arrayItems: itemsIds,
            statuspago: payments.status,
            statusenvio: "pendiente",
            fecha: payments.date_approved,
            total: payments.transaction_amount
        })


    }

    useEffect(() => {
        if (loggedUserData.preference.length) {
            Swal.fire({
                title: 'Cargando...',
                text: 'Estamos procesando tus pedidos, por favor espera.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            
        }
    }, []) 

    return (
        <div>
            {
                !arrayOrders.length
                ? <h3>No hay registro de compras realizadas</h3>
                : <DataScroller 
                     value={arrayOrders} 
                     itemTemplate={(order) => (
                         <div className={styles.OrderItem}>
                             <div className={styles.DataAndImage}>
                                 <div>
                                     <h4>{`Fecha: ${order.fecha.slice(0, 10)}`}</h4>
                                     <h4>{`Pago: ${order.statuspago}`}</h4>
                                     <h4>{`Envio: ${order.statusenvio}`}</h4>
                                     <h3>{`Total: $${order.total}`}</h3>
                                 </div>
                                 <img src={order.shoes[0].image} alt={order.shoes[0].name} />
                             </div>
                             <Button onClick={() => navigate(`/orderdetail/${order.id}`)} className={styles.button}>Ver Detalle</Button>
                         </div>
                     )}
                     rows={5} // Número de elementos a cargar por scroll
                     buffer={0.4} // Carga anticipada en porcentaje
                     header={<h2>Tus órdenes</h2>}
                     lazy={false} // True si quieres cargar los datos a demanda
                     className={styles.DataScroller}
                 />
            }
        </div>
    );
}
