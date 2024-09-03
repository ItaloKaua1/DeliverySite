import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    const [menuData, setMenuData] = useState({
        marmitas: [],
        combos: [],
        sobremesas: [],
        bebidas: []
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all([
                    fetch("http://localhost:3001/marmitas"),
                    fetch("http://localhost:3001/combos"),
                    fetch("http://localhost:3001/sobremesas"),
                    fetch("http://localhost:3001/bebidas")
                ]);

                const [marmitas, combos, sobremesas, bebidas] = await Promise.all(responses.map(res => res.json()));

                setMenuData({ marmitas, combos, sobremesas, bebidas });
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!menuData.marmitas.length && !menuData.combos.length && !menuData.sobremesas.length && !menuData.bebidas.length) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {menuData.marmitas.length > 0 && (
                <section className='divCardapio'>
                    <p id='titulo'>Marmitas</p>
                    {menuData.marmitas.map((item) => (
                        <Link key={item.id} to={item.link} className="Link">
                            <div className='divOpcao'>
                                <p className='nome'>{item.nome}</p>
                                <p id="preco">{item.preco}</p>
                                <img src={item.imagem} alt={item.nome} className="imgMenu"/>
                            </div>
                        </Link>
                    ))}
                </section>
            )}

            {menuData.combos.length > 0 && (
                <section className='divCardapio' id="divCombos">
                    <p id='titulo'>Combos</p>
                    {menuData.combos.map((item) => (
                        <div key={item.id} className='divOpcao'>
                            <p className='nome'>{item.nome}</p>
                            <p id="preco">{item.preco}</p>
                            <img src={item.imagem} alt={item.nome} className="imgMenu"/>
                        </div>
                    ))}
                </section>
            )}

            {menuData.sobremesas.length > 0 && (
                <section className='divCardapio' id="divSobremesas">
                    <p id='titulo'>Sobremesas</p>
                    {menuData.sobremesas.map((item) => (
                        <div key={item.id} className='divOpcao'>
                            <p className='nome'>{item.nome}</p>
                            <p id="preco">{item.preco}</p>
                            <img src={item.imagem} alt={item.nome} className="imgMenu"/>
                        </div>
                    ))}
                </section>
            )}

            {menuData.bebidas.length > 0 && (
                <section className='divCardapio' id="divBebidas">
                    <p id='titulo'>Bebidas</p>
                    {menuData.bebidas.map((item) => (
                        <div key={item.id} className='divOpcao'>
                            <p className='nome'>{item.nome}</p>
                            <p id={item.preco.includes('R$ 3,50') ? "preco2" : "preco"}>{item.preco}</p>
                            <img src={item.imagem} alt={item.nome} className="imgMenu"/>
                        </div>
                    ))}
                </section>
            )}
        </>
    );
}

export default Menu;
