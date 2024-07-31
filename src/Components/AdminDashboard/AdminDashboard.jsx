import { logoutUser } from "../../Redux/Actions"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Create from "../Create/Create"

export default function AdminDashboard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logoutUser())
        navigate("/home")
    }

    return (
        <div>
            <Create></Create>
            <p>Soy un AdminDashboard</p>
            <button onClick={() => logOut()}>LOG OUT</button>
        </div>
    )
}