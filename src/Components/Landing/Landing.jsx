import { useNavigate } from "react-router-dom"

export default function Landing() {

    const navigate = useNavigate()

    return (
        <div>
            <p>Soy Landing</p>
            <button onClick={() => navigate("/home")}>HOME</button>
        </div>
    )
}