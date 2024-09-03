import "./MontarMarmita.css";

import React, { useState, useContext } from "react";
import { MontarContexto } from "./MontarContexto";

const MontarMarmita = () => {
  const carnes = ["Bife acebolado", "Bife de fígado", "Frango ao molho", "Porco assado no forno", "Tilápia frita"];
  const guarnicoes = ["Arroz à grega", "Arroz branco", "Baião", "Macarrão", "Feijão carioca", "Feijão de corda", "Cuscuz", "Farofa", "Batata doce"];
  const saladas = ["Salada cozida", "Vinagrete"];

  const [id, setId] = useState(1)

  return (
    <div className="container-marmita">
      <div className="logo-container">
        <img src="/Logo_Completa.svg" alt="Logo" className="logo" />
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

      <section className="confirmContainer">
          <div id="contador">
            <img src="/Less.png" alt="less" id="less" onClick={() => setId(id > 0 ? id - 1 : 0)} />
            <span id="idContador">{id}</span>
            <img src="/Plus.png" alt="plus" id="plus" onClick={() => {setId(id + 1)}}/>
          </div>
          <button id="finalizarButton">Adicionar R$ 15,00</button>
      </section>

    </div>
  );
};

export default MontarMarmita;
