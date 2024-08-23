// import { Accordion, AccordionTab } from 'primereact/accordion';
// import { Button } from "primereact/button";
// import { useNavigate } from "react-router-dom"
// import { useSelector } from 'react-redux';
// import arrayOrders from '../../mockDB/mockOrders2';
// import styles from "./UserOrders.module.css"

// export default function UserOrders() {

//     const {orders} = useSelector(state => state.loggedUserData)
//     const navigate = useNavigate()

//     return(
//         <div>
//             {
//                 !arrayOrders.length
//                 ? <h3>No hay registro de compras realizadas</h3>
//                 : <Accordion className={styles.Acordion}>
//                     {
//                        arrayOrders.map(({id, statuspago, statusenvio, fecha, total, shoes}) => {
//                            return (
//                                 <AccordionTab header={`Orden: #${id}`} className={styles.AcordionTab}>
//                                     <div className={styles.DataAndImage}>
//                                         <div>
//                                             <h4>{`Fecha: ${fecha.slice(0,10)}`}</h4>
//                                             <h4>{`Pago: ${statuspago}`}</h4>
//                                             <h4>{`Envio: ${statusenvio}`}</h4>
//                                             <h3>{`Total: ${total}`}</h3>
//                                         </div>
//                                         <img src={shoes[0].image} alt={shoes[0].name} />
//                                     </div>
//                                     <Button onClick={() => navigate(`/orderdetail/${id}`)}>Ver Detalle</Button>
//                                 </AccordionTab>
//                            )
//                        })
//                    } 
//                 </Accordion>
//             }
//         </div>
//     )
// }

import { DataScroller } from 'primereact/datascroller';
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import arrayOrders from '../../mockDB/mockOrders2';
import styles from "./UserOrders.module.css";


export default function UserOrders() {
    const { orders } = useSelector(state => state.loggedUserData);
    const navigate = useNavigate();

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
                             <Button onClick={() => navigate(`/orderdetail/${order.id}`)}>Ver Detalle</Button>
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
