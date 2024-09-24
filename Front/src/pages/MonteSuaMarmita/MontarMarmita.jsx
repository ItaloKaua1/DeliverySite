import Back from "../../components/Back/Back";
import "./MontarMarmita.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const MAX_CARNES = 2;
const MAX_GUARNICOES = 5;
const MAX_SALADAS = 2;

const EscolhaOpcao = ({
  titulo,
  opcoes,
  maxOpcoes,
  selecionadas,
  setSelecionadas,
}) => {
  const handleAdicionar = (opcao) => {
    if (selecionadas.length < maxOpcoes && !selecionadas.includes(opcao)) {
      setSelecionadas([...selecionadas, opcao]);
    }
  };

  const handleRemover = (opcao) => {
    setSelecionadas(selecionadas.filter((item) => item !== opcao));
  };

  return (
    <section className={`escolha-${titulo.toLowerCase()}`}>
      <h2>Escolha sua {titulo}:</h2>
      <p className="max-opcoes">Máximo {maxOpcoes} opções</p>
      <ul>
        {opcoes.map((opcao, index) => (
          <li key={index}>
            {opcao}
            {!selecionadas.includes(opcao) ? (
              <button
                className="add-button"
                onClick={() => handleAdicionar(opcao)}
                aria-label={`Adicionar ${opcao}`}
              >
                +
              </button>
            ) : (
              <button
                className="remove-button"
                onClick={() => handleRemover(opcao)}
                aria-label={`Remover ${opcao}`}
              >
                -
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

const ResumoMarmita = ({
  carnesEscolhidas,
  guarnicoesEscolhidas,
  saladasEscolhidas,
}) => {
  return (
    <section className="resumo-marmita">
      <h2>Resumo da sua marmita:</h2>
      <p>
        <strong>Carnes:</strong>{" "}
        {carnesEscolhidas.length > 0
          ? carnesEscolhidas.join(", ")
          : "Nenhuma selecionada"}
      </p>
      <p>
        <strong>Guarnições:</strong>{" "}
        {guarnicoesEscolhidas.length > 0
          ? guarnicoesEscolhidas.join(", ")
          : "Nenhuma selecionada"}
      </p>
      <p>
        <strong>Saladas:</strong>{" "}
        {saladasEscolhidas.length > 0
          ? saladasEscolhidas.join(", ")
          : "Nenhuma selecionada"}
      </p>
    </section>
  );
};

const MontarMarmita = () => {
  const carnes = [
    "Bife acebolado",
    "Bife de fígado",
    "Frango ao molho",
    "Porco assado no forno",
    "Tilápia frita",
  ];
  const guarnicoes = [
    "Arroz à grega",
    "Arroz branco",
    "Baião",
    "Macarrão",
    "Feijão carioca",
    "Feijão de corda",
    "Cuscuz",
    "Farofa",
    "Batata doce",
  ];
  const saladas = ["Salada cozida", "Vinagrete"];

  const [carnesEscolhidas, setCarnesEscolhidas] = useState([]);
  const [guarnicoesEscolhidas, setGuarnicoesEscolhidas] = useState([]);
  const [saladasEscolhidas, setSaladasEscolhidas] = useState([]);
  const [quantidade, setQuantidade] = useState(1);

  const navigate = useNavigate(); // Inicializar o hook useNavigate

  // Função para finalizar a montagem da marmita e ir para a sacola
  const handleFinalizar = () => {
    const pedido = {
      carnesEscolhidas,
      guarnicoesEscolhidas,
      saladasEscolhidas,
      quantidade,
    };
    navigate("/sacola", { state: pedido }); // Redirecionar para Sacola com os dados
  };

  return (
    <div className="container-marmita">
      <Back />
      <div className="logo-container">
        <img src="/Logo_Completa.svg" alt="Logo" className="logo" />
      </div>

      <h1>Monte sua marmita</h1>

      <EscolhaOpcao
        titulo="carne"
        opcoes={carnes}
        maxOpcoes={MAX_CARNES}
        selecionadas={carnesEscolhidas}
        setSelecionadas={setCarnesEscolhidas}
      />
      <EscolhaOpcao
        titulo="guarnição"
        opcoes={guarnicoes}
        maxOpcoes={MAX_GUARNICOES}
        selecionadas={guarnicoesEscolhidas}
        setSelecionadas={setGuarnicoesEscolhidas}
      />
      <EscolhaOpcao
        titulo="salada"
        opcoes={saladas}
        maxOpcoes={MAX_SALADAS}
        selecionadas={saladasEscolhidas}
        setSelecionadas={setSaladasEscolhidas}
      />

      <ResumoMarmita
        carnesEscolhidas={carnesEscolhidas}
        guarnicoesEscolhidas={guarnicoesEscolhidas}
        saladasEscolhidas={saladasEscolhidas}
      />

      <section className="observacoes">
        <label htmlFor="observacaoCampo">Alguma observação?</label>
        <textarea
          id="observacaoCampo"
          placeholder="Escreva aqui..."
          aria-label="Campo de observações"
        ></textarea>
      </section>

      <section className="confirmContainer">
        <div className="quantidade-container">
          <button
            className="quantity-button"
            onClick={() => setQuantidade(quantidade > 1 ? quantidade - 1 : 1)}
            aria-label="Diminuir quantidade"
          >
            -
          </button>
          <span className="quantity-input">{quantidade}</span>
          <button
            className="quantity-button"
            onClick={() => setQuantidade(quantidade + 1)}
            aria-label="Aumentar quantidade"
          >
            +
          </button>
        </div>
        <button id="finalizarButton" onClick={handleFinalizar}>
          Adicionar R$ {(quantidade * 15).toFixed(2)}
        </button>
      </section>
    </div>
  );
};

export default MontarMarmita;