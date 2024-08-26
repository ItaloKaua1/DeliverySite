import './Navbar.css'

const Navbar = () => {
    return (
        <div id="NavbarDiv">
            <div className='containerItems' id='cardapio'>
                <img src="public\Cardapior_vector.svg" alt="cardapio" className='img'/>
                <p><strong>Cardápio</strong></p>
            </div>
            <div className='containerItems' id='sacola'>
                <img src="public\Sacola.svg" alt="sacola" className='img'/>
                <p><strong>Sacola</strong></p>
            </div>
            <div className='containerItems' id='pedidos'>
                <img src="public\Pedidos.svg" alt="pedidos" className='img'/>
                <p><strong>Pedidos</strong></p>
            </div>
            <div className='containerItems' id='perfil'>
                <img src="public\perfil.svg" alt="perfil" className='img'/>
                <p><strong>Perfil</strong></p>
            </div>
        </div>
    )
}

export default Navbar