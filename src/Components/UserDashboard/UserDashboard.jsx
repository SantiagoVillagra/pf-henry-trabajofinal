import { logoutUser } from "../../Redux/Actions"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { TabView, TabPanel } from 'primereact/tabview';
import Card2 from "../Card/Card2.jsx";
import styles from "./UserDashboard.module.css"
import userConfig from "./userConfig.jsx"
import UserConfig from "./userConfig.jsx";

export default function UserDashboard() {

    const navigate = useNavigate()
    const loggedUserData = useSelector(state => state.loggedUserData)
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logoutUser())
        navigate("/home")
    }

    console.log(loggedUserData);

    return (
        <div>
            <h2>{loggedUserData.username}, bienvenido a tu panel de usuario:</h2>
            <div>
                <TabView className={styles.tabView}>
                    <TabPanel header="Lista de deseos">
                        {
                            !loggedUserData.wishList.length
                            ? <h3>No hay zapatillas en tu lista de deseos</h3>
                            : loggedUserData.wishList.map(({ id, name, price, image, brand }) => {
                                return (
                                    <div>
                                        <Card2
                                        key={id}
                                        id={id}
                                        brand={brand}
                                        name={name}
                                        price={price}
                                        image={image}
                                        />
                                    </div>
                                )
                            })
                        }
                    </TabPanel>
                    <TabPanel header="Historial de compras">
                        {
                            !loggedUserData.shoppingHistory.length
                            ? <h3>No hay registro de compras realizadas</h3>
                            : loggedUserData.shoppingHistory.map(list => {
                                return (
                                    <div>
                                        
                                    </div>
                                )
                            })
                        }
                    </TabPanel>
                    <TabPanel header="Configuracion">
                        <UserConfig></UserConfig>
                    </TabPanel>
                </TabView>
            </div>
            <button onClick={() => logOut()}>LOG OUT</button>
        </div>
    )
}