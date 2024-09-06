import { useNavigate } from "react-router-dom"
import "./Back.css"

function Back() {
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1)
    }

    return(
        <>
            <img src="/Back.svg" alt="Back" id="back" onClick={handleBackClick}/>
        </>
    )
}

export default Back