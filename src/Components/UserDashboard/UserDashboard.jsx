import { logoutUser } from "../../Redux/Actions"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function UserDashboard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logoutUser())
        navigate("/home")
    }

    return (
        <div>
            <p>Soy un UserDashboard</p>
            <button onClick={() => logOut()}>LOG OUT</button>
        </div>
    )
}