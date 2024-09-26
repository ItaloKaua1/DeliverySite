import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Back from "../../components/Back/Back";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import "./Sacola.css";

const Sacola = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Dados da marmita recebidos da tela anterior
  const {
    carnesEscolhidas,
    guarnicoesEscolhidas,
    saladasEscolhidas,
    quantidade,
    nomeUsuario, // Supondo que o nome do usuário é passado na localização
  } = location.state || {};

  // Estado para selecionar entre Delivery e Retirada
  const [opcaoEntrega, setOpcaoEntrega] = useState("retirada");

  // Função para adicionar mais itens (redireciona para a montagem da marmita)
  const handleAdicionarMaisItens = () => {
    navigate("/MonteSuaMarmita");
  };

  // Função para lidar com a seleção de entrega ou retirada
  const handleOpcaoEntrega = (opcao) => {
    setOpcaoEntrega(opcao);
  };

  // Função para finalizar o pedido
  const handleFinalizarPedido = async () => {
    const novoPedido = {
      nome: nomeUsuario, // Adicionando o nome do usuário ao pedido
      carnesEscolhidas,
      guarnicoesEscolhidas,
      saladasEscolhidas,
      quantidade: quantidade || 1,
      opcaoEntrega,
    };

    try {
      const response = await fetch("http://localhost:3001/pedidos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoPedido),
      });

      if (response.ok) {
        // Após salvar o pedido, redirecionar para a tela de Pedidos
        navigate("/pedidos");
      } else {
        console.error("Erro ao finalizar o pedido");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className="containerDefaultSacola">
      <Back id="Back" />
      <Logo />
      <h1>Resumo do pedido:</h1>
      <div>
        <p>
          <strong>Carnes:</strong>{" "}
          {carnesEscolhidas?.join(", ") || "Nenhuma selecionada"}
        </p>
        <p>
          <strong>Guarnições:</strong>{" "}
          {guarnicoesEscolhidas?.join(", ") || "Nenhuma selecionada"}
        </p>
        <p>
          <strong>Saladas:</strong>{" "}
          {saladasEscolhidas?.join(", ") || "Nenhuma selecionada"}
        </p>
        <p>
          <strong>Quantidade:</strong> {quantidade || 1}
        </p>
        {/* Botão para adicionar mais itens */}
        <button
          onClick={handleAdicionarMaisItens}
          className="adicionar-mais-button"
        >
          Adicionar mais itens
        </button>

        {/* Seção para escolher entre Delivery e Retirada */}
        <div className="opcao-entrega">
          <h2>Escolha uma opção de entrega:</h2>
          <div className="opcoes-entrega">
            <button
              className={`entrega-button ${
                opcaoEntrega === "delivery" ? "selected" : ""
              }`}
              onClick={() => handleOpcaoEntrega("delivery")}
            >
              Delivery
            </button>
            <button
              className={`entrega-button ${
                opcaoEntrega === "retirada" ? "selected" : ""
              }`}
              onClick={() => handleOpcaoEntrega("retirada")}
            >
              Retirada
            </button>
          </div>
          <p>
            Opção selecionada:{" "}
            <strong>
              {opcaoEntrega === "delivery" ? "Delivery" : "Retirada"}
            </strong>
          </p>
        </div>

        {/* Botão para finalizar pedido */}
        <button
          className="finalizar-pedido-button"
          onClick={handleFinalizarPedido}
        >
          Finalizar Pedido
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default Sacola;
