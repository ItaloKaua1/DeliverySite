import "./Menu.css"

function Menu (){
    return(
        <>
            {/* Marmita */}
            <section className='divCardapio' id="#divMontar">
                <p id='titulo'>Marmita</p>
                <div className='divOpcao'>
                    <p className='nome'>Monte sua marmita</p>
                    <p id="preco">R$ 15,00</p>
                    <img src="/Marmita_post.jpg" alt="Marmita" className="imgMenu"/>
                </div>
            </section>

            {/* Combos */}
            <section className='divCardapio' id="divCombos">
                <p id='titulo'>Combos</p>
                <div className='divOpcao'>
                    <p className='nome'>Marmita + Refrigerante Lata</p>
                    <p id="preco">R$ 18,50</p>
                    <img src="/Marmita_post.jpg" alt="Marmita" className="imgMenu"/>
                </div>
                <div className='divOpcao' id="space">
                    <p className='nome'>2 Marmitas + Cocada Caseira + Refri 1L</p>
                    <p id="preco">R$ 38,50</p>
                    <img src="/Marmita_post.jpg" alt="Marmita" className="imgMenu"/>
                </div>
            </section>

            {/* Sobremas */}
            <section className='divCardapio' id="divSobremesas">
                <p id='titulo'>Sobremesas</p>
                <div className='divOpcao'>
                    <p className='nome'>Cocada caseira</p>
                    <p id="preco">R$ 4,50</p>
                    <img src="/cocada_post.jpeg" alt="Marmita" id="imgCocada"/>
                </div>
            </section>

            {/* Bebidas */}
            <section className='divCardapio' id="divBebidas">
                <p id='titulo'>Bebidas</p>
                <div className='divOpcao'>
                    <p className='nome'>Refrigerante 1L</p>
                    <p id="preco">R$ 7,00</p>
                    <img src="/Refrigerante_1l_post.jpeg" alt="Refri1L" className="imgMenu"/>
                </div>
                <div className='divOpcao' id="space">
                    <p className='nome'>Refrigerante 350ml</p>
                    <p id="preco">R$ 3,50</p>
                    <img src="/Refrigerante_mini_post.jpeg" alt="Refri350ml" className="imgMenu"/>
                </div>
                <div className='divOpcao' id="space">
                    <p className='nome'>Refrigerante Lata</p>
                    <p id="preco">R$ 4,50</p>
                    <img src="/post_refri_lata" alt="RefriLata" className="imgMenu"/>
                </div>
                <div className='divOpcao' id="space">
                    <p className='nome'>Suco 300ml</p>
                    <p id="preco2">R$ 3,50</p>
                    <img src="/Suco_post.jpeg" alt="Suco" id="imgSuco"/>
                </div>
            </section>
        </>
    )
}

export default Menu