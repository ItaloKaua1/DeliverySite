import "./Menu.css"

function Menu (){
    return(
        <>
            {/* Marmita */}
            <section className='divCardapio' id="#divMontar">
                <p id='titulo'>Marmita</p>
                <div className='divMarmita'>
                    <p className='marmita'>Monte sua marmita</p>
                    <p id="preco">R$ 15,00</p>
                    <img src="/Marmita_post.jpg" alt="Marmita" id="imgMarmita"/>
                </div>
            </section>

            {/* Combos */}
            <section className='divCardapio' id="divCombos">
                <p id='titulo'>Combos</p>
                <div className='divMarmita'>
                    <p className='marmita'>Marmita + Refrigerante Lata</p>
                    <p id="preco">R$ 18,50</p>
                    <img src="/Marmita_post.jpg" alt="Marmita" id="imgMarmita"/>
                </div>
                <div className='divMarmita' id="divCombo2">
                    <p className='marmita'>Marmita + Refrigerante Lata</p>
                    <p id="preco">R$ 18,50</p>
                    <img src="/Marmita_post.jpg" alt="Marmita" id="imgMarmita"/>
                </div>
            </section>

            {/* Sobremas */}
            <section className='divCardapio' id="divSobremesas">
                <p id='titulo'>Sobremesas</p>
                <div className='divMarmita'>
                    <p className='marmita'>Cocada caseira</p>
                    <p id="preco">R$ 4,50</p>
                    <img src="/cocada_post.jpeg" alt="Marmita" id="imgCocada"/>
                </div>
            </section>

            {/* Bebidas */}
            <section className='divCardapio' id="divBebidas">
                <p id='titulo'>Bebidas</p>
                <div className='divMarmita'>
                    <p className='marmita'>Refrigerante 1L</p>
                    <p id="preco">R$ 7,00</p>
                    <img src="/Refrigerante_1l_post.jpeg" alt="Marmita" id="imgMarmita"/>
                </div>
                <div className='divMarmita' id="divCombo2">
                    <p className='marmita'>Refrigerante 350ml</p>
                    <p id="preco">R$ 3,50</p>
                    <img src="/Refrigerante_mini_post.jpeg" alt="Marmita" id="imgMarmita"/>
                </div>
                <div className='divMarmita' id="divCombo2">
                    <p className='marmita'>Refrigerante Lata</p>
                    <p id="preco">R$ 4,50</p>
                    <img src="/post_refri_lata" alt="Marmita" id="imgMarmita"/>
                </div>
                <div className='divMarmita' id="divCombo2">
                    <p className='marmita'>Suco 300ml</p>
                    <p id="preco2">R$ 18,50</p>
                    <img src="/Suco_post.jpeg" alt="Marmita" id="imgSuco"/>
                </div>
            </section>
        </>
    )
}

export default Menu