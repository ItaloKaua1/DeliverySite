import React from "react"

import "./Modal.css"

const Modal = ({isOpen, onClose}) => {
    
    if(!isOpen) return null
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src="/Logo_Completa.svg" alt="logo" className="imgLM"/>
                <h3>Horários de Funcionamento</h3>
                
                <div class="horario-container">
                    <div class="dias-container">
                        <p class="dias">Domingo</p>
                        <p class="dias">Segunda</p>
                        <p class="dias">Terça</p>
                        <p class="dias">Quarta</p>
                        <p class="dias">Quinta</p>
                        <p class="dias">Sexta</p>
                        <p class="dias">Sábado</p>
                    </div>
                    <div class="horarios-container">
                        <p class="horarios">Fechado</p>
                        <p class="horarios">10:30 - 14:00</p>
                        <p class="horarios">10:30 - 14:00</p>
                        <p class="horarios">10:30 - 14:00</p>
                        <p class="horarios">10:30 - 14:00</p>
                        <p class="horarios">10:30 - 14:00</p>
                        <p class="horarios">10:30 - 14:00</p>
                    </div>
                </div>

                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    )
}

export default Modal