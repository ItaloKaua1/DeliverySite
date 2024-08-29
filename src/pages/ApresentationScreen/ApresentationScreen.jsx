import "./ApresentationScreen.css"

function ApresentationScreen () {
    return(
        <>
            <img className="LogoApresentation" src="/Logo_Completa.svg" alt="Logo" />
            <div id="containerApresentation">
                <label id="labelInitialApresentation">Faça do seu <strong>almoço</strong> um momento especial com nossas <strong>marmitas</strong> feitas com <strong>carinho!</strong></label>
                
                <button id="createAccButtonApresentation">Crie sua conta</button>

                <hr id="linhaApresentation"></hr>

                <label id="labelQuestionApresentation">Já possui cadastro?</label>
                <button id="loginButtonApresentation">Faça login</button>
                
            </div>
        </>
    )
}

export default ApresentationScreen