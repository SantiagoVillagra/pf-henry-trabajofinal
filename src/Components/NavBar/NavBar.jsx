import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import LogoNav from "../../Assets/LogoNav.png";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { Button } from 'primereact/button';
import { FaUser, FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
    const navigate = useNavigate();
    const loggedUserData = useSelector(state => state.loggedUserData);

    return (
        
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img 
                    src={LogoNav} 
                    alt="logo" 
                    onClick={() => navigate("/home")} 
                />
            </div>
            <div className={styles.navbarActions} >
                <SearchBar  />
                <Button 
                    icon={<FaUser />} 
                    className={styles.transparentIcon} 
                    onClick={() => {
                        return loggedUserData.username ? navigate("/dashboard") : navigate("/login");
                    }}
                />
                {
                    !loggedUserData.isAdmin && <Button 
                    icon={<FaShoppingCart />} 
                    className={styles.transparentIcon} 
                    onClick={() => navigate("/shop")}
                />
                }
                
            </div>
        </div>
    );
};

export default Navbar;











// export default function Navbar() {

//     const navigate = useNavigate()
//     const loggedUserData = useSelector(state => state.loggedUserData)


//     return (
//         <div className={style.navbar}>

//         <img src={LogoNav} alt="logo" className={style.logo} onClick={() => navigate("/home")}  />

//         <div>
//             <SearchBar></SearchBar>
//         </div>
//         <div className={style.rigthCenter}>
//          <img src={lupa} alt="search" className={style.icon} onClick={() => navigate("/search")} />
//          <img src={loginlogo} alt="login" className={style.icon} onClick={() => {
//             return loggedUserData.username ? navigate("/dashboard") : navigate("/login")
//          }} />
//          <img src={shop} alt="shop" className={style.icon} onClick={() => navigate("/shop")} />

//         </div>

            
//         </div>
//     )
// }

// Navbar.jsx