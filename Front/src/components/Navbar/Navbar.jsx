import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("cardapio"); // Estado único para controlar o ícone ativo

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName); // Atualiza o ícone ativo
  };

  return (
    <div id="NavbarDiv">
      <Link to="/Home" className="Link" onClick={() => handleIconClick("cardapio")}>
        <div className="containerItems" id="cardapio">
          <img
            src={activeIcon === "cardapio" ? '/Cardapio_vector.svg' : '/cardapioVazio.png'}
            alt="Cardápio"
            className="img"
          />
          <p id="textoNav">
            <strong>Cardápio</strong>
          </p>
        </div>
      </Link>

      <Link to="/Sacola" className="Link" onClick={() => handleIconClick("sacola")}>
        <div className="containerItems" id="sacola">
          <img
            src={activeIcon === "sacola" ? '/sacola-preenchida.svg' : '/Sacola.svg'}
            alt="Sacola"
            className="img"
          />
          <p id="textoNav">
            <strong>Sacola</strong>
          </p>
        </div>
      </Link>

      <Link to="/Pedidos" className="Link" onClick={() => handleIconClick("pedidos")}>
        <div className="containerItems" id="pedidos">
          <img
            src={activeIcon === "pedidos" ? '/pedidosCheio.svg' : '/Pedidos.svg'}
            alt="Pedidos"
            className="img"
          />
          <p id="textoNav">
            <strong>Pedidos</strong>
          </p>
        </div>
      </Link>

      <Link to="/Perfil" className="Link" onClick={() => handleIconClick("perfil")}>
        <div className="containerItems" id="perfil">
          <img
            src={activeIcon === "perfil" ? '/perfilCheio.svg' : '/perfil.svg'}
            alt="Perfil"
            className="img"
          />
          <p id="textoNav">
            <strong>Perfil</strong>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
