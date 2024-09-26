import React, { useState, useEffect } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import {
  getMarmitas,
  getCombos,
  getSobremesas,
  getBebidas,
} from "../../api/menu";
import SearchBar from "../SearchBar/SearchBar";

function Menu() {
  const [menuData, setMenuData] = useState({
    marmitas: [],
    combos: [],
    sobremesas: [],
    bebidas: [],
  });
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setMenuData({
        marmitas: await getMarmitas(),
        combos: await getCombos(),
        sobremesas: await getSobremesas(),
        bebidas: await getBebidas(),
      });
    };
    fetchData().catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (
    !menuData.marmitas.length &&
    !menuData.combos.length &&
    !menuData.sobremesas.length &&
    !menuData.bebidas.length
  ) {
    return <div>Loading...</div>;
  }

  const shouldShowSection = (sectionName) => {
    if (!searchTerm) return true;
    return sectionName.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const visibleSections = [
    shouldShowSection("marmitas") && menuData.marmitas.length > 0,
    shouldShowSection("combos") && menuData.combos.length > 0,
    shouldShowSection("sobremesas") && menuData.sobremesas.length > 0,
    shouldShowSection("bebidas") && menuData.bebidas.length > 0,
  ].filter(Boolean).length;

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />

      {visibleSections === 0 && (
        <div className="no-results">
          <p>Nenhum item encontrado.</p>
        </div>
      )}

      {shouldShowSection("marmitas") && menuData.marmitas.length > 0 && (
        <section className="divCardapio">
          <p id="titulo">Marmitas</p>
          {menuData.marmitas.map((item) => (
            <Link key={item.id} to={item.link} className="Link">
              <div className="divOpcao">
                <p className="nome">{item.nome}</p>
                <p id="preco">{item.preco}</p>
                <img src={item.imagem} alt={item.nome} className="imgMenu" />
              </div>
            </Link>
          ))}
        </section>
      )}

      {shouldShowSection("combos") && menuData.combos.length > 0 && (
        <section className="divCardapio" id="divCombos">
          <p id="titulo">Combos</p>
          {menuData.combos.map((item) => (
            <div key={item.id} className="divOpcao">
              <p className="nome">{item.nome}</p>
              <p id="preco">{item.preco}</p>
              <img src={item.imagem} alt={item.nome} className="imgMenu" />
            </div>
          ))}
        </section>
      )}

      {shouldShowSection("sobremesas") && menuData.sobremesas.length > 0 && (
        <section className="divCardapio" id="divSobremesas">
          <p id="titulo">Sobremesas</p>
          {menuData.sobremesas.map((item) => (
            <div key={item.id} className="divOpcao">
              <p className="nome">{item.nome}</p>
              <p id="preco">{item.preco}</p>
              <img src={item.imagem} alt={item.nome} className="imgMenu" />
            </div>
          ))}
        </section>
      )}

      {shouldShowSection("bebidas") && menuData.bebidas.length > 0 && (
        <section className="divCardapio" id="divBebidas">
          <p id="titulo">Bebidas</p>
          {menuData.bebidas.map((item) => (
            <div key={item.id} className="divOpcao">
              <p className="nome">{item.nome}</p>
              <p id={item.preco.includes("R$ 3,50") ? "preco2" : "preco"}>
                {item.preco}
              </p>
              <img src={item.imagem} alt={item.nome} className="imgMenu" />
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default Menu;
