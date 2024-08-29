import "./Menu.css"

function Menu (){
    return(
        <>
            <section className='divCardapio'>
                <p id='titulo'>Marmita</p>
                <div id='divMarmita'>
                    <p className='marmita'>Monte sua marmita</p>
                    <p id="preco">R$ 15,00</p>
                    <img src="/Marmita_post.jpg" alt="Marmita" id="imgMarmita"/>
                </div>
            </section>
        </>
    )
}

export default Menu