import './HorarioFuncionamento.css'

function HorarioFuncionamento () {
    return (
        <div id='divHorario'>
            <div id='statusDiv'>
                <p className='text'><strong>Aberto</strong></p>
            </div>
            <p className='text' id='horario'><strong>10:30 - 14:00</strong></p>
            <img src="public\i_vector.svg" alt="index" id='index'/>
        </div>
    )
}

export default HorarioFuncionamento