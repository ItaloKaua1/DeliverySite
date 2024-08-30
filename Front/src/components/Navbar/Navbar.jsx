import './Navbar.css'

const Navbar = () => {
    return (
        <div id="NavbarDiv">
            <div className='containerItems' id='cardapio'>
                <img src="/Cardapio_vector.svg" alt="cardapio" className='img'/>
                <p><strong>Cardápio</strong></p>
            </div>
            <div className='containerItems' id='sacola'>
                <img src="/Sacola.svg" alt="sacola" className='img'/>
                <p><strong>Sacola</strong></p>
            </div>
            <div className='containerItems' id='pedidos'>
                <img src="/Pedidos.svg" alt="pedidos" className='img'/>
                <p><strong>Pedidos</strong></p>
            </div>
            <div className='containerItems' id='perfil'>
                <img src="/perfil.svg" alt="perfil" className='img'/>
                <p><strong>Perfil</strong></p>
            </div>
        </div>
    )
}

export default Navbar