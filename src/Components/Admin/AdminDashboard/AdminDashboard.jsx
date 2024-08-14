import { logoutUser } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Create from "../Create/Create";
import { TabView, TabPanel } from 'primereact/tabview';
import styles from "./AdminDashboard.module.css"
import DeleteShoe from "../../Admin/Delete/Delete";
import  UpdateShoe  from "../UpdateShoe/UpdateShoe";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
    navigate("/home");
  };

  return (
    <div className={styles.dashboardContainer}>

       
      <div>
      <TabView className={styles.tabView}>
        <TabPanel header="Carga nuevas zapatillas">
          <div className={styles.tabContent}>
            <Create />
          </div>
        </TabPanel>
        <TabPanel header="Elimina/oculta productos">
          <div className={styles.tabContent}>
            <DeleteShoe></DeleteShoe>
          </div>
        </TabPanel>
        <TabPanel header="Editá productos">
          <div className={styles.tabContent}>
            <UpdateShoe></UpdateShoe>
          </div>
        </TabPanel>
      </TabView>

      </div>
   
      <button className={styles.logoutButton} onClick={logOut}>LOG OUT</button>
    
    </div>
  );
}