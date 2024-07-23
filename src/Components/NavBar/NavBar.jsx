import { useNavigate } from "react-router-dom"

export default function Navbar() {

    const navigate = useNavigate()

    return (
        <div>
            <p onClick={() => navigate("/home")}>Soy Navbar</p>
            <button onClick={() => navigate("/search")}>SEARCH</button>
            <button onClick={() => navigate("/login")}>LOGIN</button>
            <button onClick={() => navigate("/shop")}>SHOP</button>
        </div>
    )
}