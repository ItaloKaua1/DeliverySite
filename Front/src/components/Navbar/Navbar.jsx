import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="NavbarDiv">
      <div className="containerItems" id="cardapio">
        <img src="/Cardapio_vector.svg" alt="Cardápio" className="img" />
        <p id="textoNav">
          <strong>Cardápio</strong>
        </p>
      </div>
      <div className="containerItems" id="sacola">
        <img src="/Sacola.svg" alt="Sacola" className="img" />
        <p id="textoNav">
          <strong>Sacola</strong>
        </p>
      </div>
      <div className="containerItems" id="pedidos">
        <img src="/Pedidos.svg" alt="Pedidos" className="img" />
        <p id="textoNav">
          <strong>Pedidos</strong>
        </p>
      </div>
      <Link to="/Perfil" className="Link">
        <div className="containerItems" id="perfil">
          <img src="/perfil.svg" alt="Perfil" className="img" />
          <p id="textoNav">
            <strong>Perfil</strong>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
