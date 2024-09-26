import React, { useState } from "react";
import "./Cadastro.css";
import { Link, useNavigate } from "react-router-dom";

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
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

    const { nome, email, senha, confirmarSenha } = formData;

    // Verificar se todos os campos foram preenchidos
    if (!nome || !email || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // Enviar dados para o JSON Server
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Usuário cadastrado com sucesso!");
        console.log("Success:", data);
        navigate("/login"); // Navega para a página de login após o sucesso
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="containerCadastro">
      <div className="logoSection">
        <img
          src="Logo_Completa.svg"
          alt="Logo Catering"
          className="logoImage"
        />
      </div>
      <div className="formSection">
        <h2>Faça o seu cadastro</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
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

          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input
            type="password"
            id="confirmarSenha"
            placeholder="Confirmar senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
          />

          <button type="submit" className="buttonSectionCadastro">
            Crie sua conta
          </button>
        </form>
        <p>
          Já possui cadastro? <Link to="/login">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
