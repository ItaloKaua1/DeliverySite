import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const navigate = useNavigate(); // Hook para navegação programática

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/users")
      .then((response) => response.json())  
      .then((data) => {
        const user = data.find(
          (user) => user.email === formData.email && user.senha === formData.senha
        );

        if (user) {
          alert("Login bem-sucedido!");
          navigate("/home"); // Navega para a página inicial após o sucesso
        } else {
          alert("Email ou senha incorretos!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="meuemail@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
          />

          <button type="submit" className="buttonSectionLogin">
            Fazer login
          </button>

          <div className="optionsLogin">
            <a href="/esqueci-senha" className="forgotPassword">
              Esqueceu a senha?
            </a>
            <p>
              Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
