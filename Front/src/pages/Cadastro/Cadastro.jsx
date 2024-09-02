import React from 'react';
import './Cadastro.css';

function Cadastro() {
  return (
    <div className="containerCadastro">
      <div className="logoSection">
        <img src="Logo_Completa.svg" alt="Logo Catering" className="logoImage" />
      </div>
      <div className="formSection">
        <h2>Faça o seu cadastro</h2>
        <form>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Nome" />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="meuemail@example.com" />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="Senha" />

          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input type="password" id="confirmarSenha" placeholder="Confirmar senha" />

          <button type="submit">Crie sua conta</button>
        </form>
        <p>Já possui cadastro? <a href="/login">Faça login</a></p>
      </div>
    </div>
  );
}

export default Cadastro;
