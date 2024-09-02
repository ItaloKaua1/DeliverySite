import React from "react"

import "./Modal.css"

const Modal = ({isOpen, onClose}) => {
    
    if(!isOpen) return null
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Contêiner da esquerda */}
                <div className="left-content">
                    <img src="/Logo_Completa.svg" alt="logo" className="imgLM" />

                    <div className="tituloRelogioContainer">
                        <img src="/relogio.png" alt="relogio" id="relogio" />
                        <h3 style={{ color: "#00B536" }} id="tituloHorario">Horários de Funcionamento</h3>
                    </div>

                    <section className="horario-container">
                        <div className="dias-container">
                            <p className="dias">Domingo</p>
                            <p className="dias">Segunda</p>
                            <p className="dias">Terça</p>
                            <p className="dias">Quarta</p>
                            <p className="dias">Quinta</p>
                            <p className="dias">Sexta</p>
                            <p className="dias">Sábado</p>
                        </div>
                        <div className="horarios-container">
                            <p className="horarios" style={{ color: "red" }}>Fechado</p>
                            <p className="horarios">10:30 - 14:00</p>
                            <p className="horarios">10:30 - 14:00</p>
                            <p className="horarios">10:30 - 14:00</p>
                            <p className="horarios">10:30 - 14:00</p>
                            <p className="horarios">10:30 - 14:00</p>
                            <p className="horarios">10:30 - 14:00</p>
                        </div>
                    </section>
                </div>

                {/* Contêiner da direita */}
                <div className="right-content">
                    <img 
                    src="/VectorX.png" 
                    alt="close" 
                    id="imgX"
                    onClick={onClose}
                    />

                    <div>
                        <h3 id="tss">Endereço do Estabelecimento:</h3>
                        <p id="kska">Rua: xxx, 349 - Centro, Quixadá - CE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal