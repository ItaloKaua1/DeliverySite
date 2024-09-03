import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="containerLogin">
      <div className="logoSectionLogin">
        <img
          src="Logo_Completa.svg"
          alt="Logo Catering"
          className="logoImageLogin"
        />
      </div>
      <div className="formSectionLogin">
        <h2>Faça o seu login</h2>
        <form>
          <label htmlFor="nome">Email</label>
          <input type="text" id="Email" placeholder="meuemail@example.com" />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="Senha" />

          <Link to="/home" className="buttonSectionLogin">
            Fazer login
          </Link>

          <div className="optionsLogin">
            <a href="/esqueci-senha" className="forgotPassword">
              Esqueceu a senha?
            </a>
            <p>
              Não tem conta? <a href="/cadastro">Cadastre-se</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
