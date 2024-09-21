import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();

  const [cardapioCheio, setCardapioCheio] = useState(false);
  const [sacolaCheia, setSacolaCheia] = useState(false);
  const [pedidosCheio, setPedidosCheio] = useState(false);
  const [perfilCheio, setPerfilCheio] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/Home":
        setCardapioCheio(true);
        setSacolaCheia(false);
        setPedidosCheio(false);
        setPerfilCheio(false);
        break;
      case "/Sacola":
        setCardapioCheio(false);
        setSacolaCheia(true);
        setPedidosCheio(false);
        setPerfilCheio(false);
        break;
      case "/Pedidos":
        setCardapioCheio(false);
        setSacolaCheia(false);
        setPedidosCheio(true);
        setPerfilCheio(false);
        break;
      case "/Perfil":
        setCardapioCheio(false);
        setSacolaCheia(false);
        setPedidosCheio(false);
        setPerfilCheio(true);
        break;
      default:
        setCardapioCheio(false);
        setSacolaCheia(false);
        setPedidosCheio(false);
        setPerfilCheio(false);
        break;
    }
  }, [location.pathname]);

  return (
    <div id="NavbarDiv">
      <Link to="/Home" className="Link">
        <div className="containerItems" id="cardapio">
          <img src={cardapioCheio ? '/Cardapio_vector.svg' : '/cardapioVazio.png'} alt="Cardápio" className="img" />
          <p id="textoNav">
            <strong>Cardápio</strong>
          </p>
        </div>
      </Link>

      <Link to="/Sacola" className="Link">
        <div className="containerItems" id="sacola">
          <img src={sacolaCheia ? '/sacola-preenchida.svg' : '/Sacola.svg'} alt="Sacola" className="img" />
          <p id="textoNav">
            <strong>Sacola</strong>
          </p>
        </div>
      </Link>

      <Link to="/Pedidos" className="Link">
        <div className="containerItems" id="pedidos">
          <img src={pedidosCheio ? '/pedidosCheio.svg' : '/Pedidos.svg'} alt="Pedidos" className="img" />
          <p id="textoNav">
            <strong>Pedidos</strong>
          </p>
        </div>
      </Link>

      <Link to="/Perfil" className="Link">
        <div className="containerItems" id="perfil">
          <img src={perfilCheio ? '/perfilCheio.svg' : '/perfil.svg'} alt="Perfil" className="img" />
          <p id="textoNav">
            <strong>Perfil</strong>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
