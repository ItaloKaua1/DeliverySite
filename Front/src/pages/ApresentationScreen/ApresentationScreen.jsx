import { Link } from "react-router-dom"
import "./ApresentationScreen.css"

function ApresentationScreen () {
    return(
        <>
            <img className="LogoApresentation" src="/Logo_Completa.svg" alt="Logo" />
            <div id="containerApresentation">
                <label id="labelInitialApresentation">Faça do seu <strong>almoço</strong> um momento especial com nossas <strong>marmitas</strong> feitas com <strong>carinho!</strong></label>
                
                <Link to={'Cadastro'}> <button id="createAccButtonApresentation">Crie sua conta</button> </Link>

                <hr id="linhaApresentation"></hr>

                <label id="labelQuestionApresentation">Já possui cadastro?</label>
                
                <Link to={'Login'}> <button id="loginButtonApresentation">Faça login</button> </Link>
                
            </div>
        </>
    )
}

export default ApresentationScreen