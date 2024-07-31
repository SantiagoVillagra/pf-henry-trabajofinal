import { logoutUser } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Create from "../Create/Create";
import { TabView, TabPanel } from 'primereact/tabview';
import styles from "./AdminDashboard.module.css"

export default function AdminDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
    navigate("/home");
  };

  return (
    <div className={styles.dashboardContainer}>
      <TabView className={styles.tabView}>
        <TabPanel header="Carga nuevas zapatillas">
          <div className={styles.tabContent}>
            <Create />
          </div>
        </TabPanel>
        <TabPanel header="Elimina/oculta productos">
          <div className={styles.tabContent}>
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </div>
        </TabPanel>
      </TabView>

      <button className={styles.logoutButton} onClick={logOut}>LOG OUT</button>
    </div>
  );
}