import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [cardapioCheio, setCardapioCheio] = useState(true)
  const [sacolaCheia, setSacolaCheia] = useState(false)
  const [pedidosCheio, setPedidosCheio] = useState(false)
  const [perfilCheio, setPerfilCheio] = useState(false)

  const handleCardapioClick = () => {
    setCardapioCheio(true)
    setPedidosCheio(false)
    setPerfilCheio(false)
    setSacolaCheia(false)
  }

  const handleSacolaClick = () => {
    setSacolaCheia(true)
    setCardapioCheio(false)
    setPedidosCheio(false)
    setPerfilCheio(false)
  }

  const handlePedidosClick = () => {
    setPedidosCheio(true)
    setCardapioCheio(false)
    setSacolaCheia(false)
    setPerfilCheio(false)
  }

  const handlePerfilClick = () => {
    setPerfilCheio(true)
    setCardapioCheio(false)
    setSacolaCheia(false)
    setPedidosCheio(false)
  }


  return (
    <div id="NavbarDiv">
      <div className="containerItems" id="cardapio" onClick={handleCardapioClick}>
        <img src={cardapioCheio ? '/Cardapio_vector.svg' : '/cardapioVazio.svg'} alt="Cardápio" className="img" />
        <p id="textoNav">
          <strong>Cardápio</strong>
        </p>
      </div>
      <div className="containerItems" id="sacola" onClick={handleSacolaClick}>
        <img src={sacolaCheia ? '/sacola-preenchida.svg' : '/Sacola.svg'} alt="Sacola" className="img" />
        <p id="textoNav">
          <strong>Sacola</strong>
        </p>
      </div>
      <Link to="/Pedidos" className="Link">
        <div className="containerItems" id="pedidos" onClick={handlePedidosClick}>
          <img src={pedidosCheio ? '/pedidosCheio.svg' : '/Pedidos.svg'} alt="Pedidos" className="img" />
          <p id="textoNav">
            <strong>Pedidos</strong>
          </p>
        </div>
      </Link>
      {/* <Link to="/Perfil" className="Link"> */}
        <div className="containerItems" id="perfil" onClick={handlePerfilClick}>
          <img src={perfilCheio ? '/perfilCheio.svg' : '/perfil.svg'} alt="Perfil" className="img" />
          <p id="textoNav">
            <strong>Perfil</strong>
          </p>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default Navbar;
