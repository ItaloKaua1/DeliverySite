import React from "react";
import "./MontarMarmita.css";

const MontarMarmita = () => {
  const carnes = ["Bife acebolado", "Bife de fígado", "Frango ao molho", "Porco assado no forno", "Tilápia frita"];
  const guarnicoes = ["Arroz à grega", "Arroz branco", "Baião", "Macarrão", "Feijão carioca", "Feijão de corda", "Cuscuz", "Farofa", "Batata doce"];
  const saladas = ["Salada cozida", "Vinagrete"];

  return (
    <div className="container-marmita">
      <div className="logo-container">
        <img src="public/Logo_Completa.svg" alt="Logo" className="logo" />
      </div>
      
      <h1>Monte sua marmita</h1>

      <section className="escolha-carnes">
        <h2>Escolha sua carne:</h2>
        <p className="max-opcoes">Máximo 02 opções</p>
        <ul>
          {carnes.map((carne, index) => (
            <li key={index}>
              {carne}
              <button className="add-button">+</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="escolha-guarnicoes">
        <h2>Escolha suas guarnições:</h2>
        <p className="max-opcoes">Máximo 05 opções</p>
        <ul>
          {guarnicoes.map((guarnicao, index) => (
            <li key={index}>
              {guarnicao}
              <button className="add-button">+</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="escolha-saladas">
        <h2>Escolha sua salada:</h2>
        <p className="max-opcoes">Máximo 02 opções</p>
        <ul>
          {saladas.map((salada, index) => (
            <li key={index}>
              {salada}
              <button className="add-button">+</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="observacoes">
        <label htmlFor="observacao">Alguma observação?</label>
        <textarea id="observacaoCampo" placeholder="Escreva aqui..."></textarea>
      </section>

    </div>
  );
};

export default MontarMarmita;
