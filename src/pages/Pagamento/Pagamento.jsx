import React, { useState } from "react";
import "./Pagamento.css";

const Pagamento = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const paymentOptions = [
    { label: "Chave pix", value: "pix", imgSrc: "public/pix.png" },
    {
      label: "Mastercard Crédito",
      value: "mastercard_credit",
      imgSrc: "public/Mastercard.png",
    },
    {
      label: "Mastercard Débito",
      value: "mastercard_debit",
      imgSrc: "public/Mastercard.png",
    },
    { label: "Visa Crédito", value: "visa_credit", imgSrc: "public/Visa.png" },
    { label: "Visa Débito", value: "visa_debit", imgSrc: "public/Visa.png" },
    { label: "Elo crédito", value: "elo_credit", imgSrc: "public/elo.png" },
    { label: "Elo débito", value: "elo_debit", imgSrc: "public/elo.png" },
    {
      label: "Hipercard Crédito",
      value: "hipercard_credit",
      imgSrc: "public/Hipercard.png",
    },
  ];

  return (
    <div className="pagamento-container">
      <header className="header">
        <div className="logo-container">
          <img src="public/Logo_Completa.svg" alt="Logo" className="logo" />
        </div>
        <h2>Forma de pagamento:</h2>
      </header>
      <form className="payment-options">
        {paymentOptions.map((option) => (
          <label key={option.value} className="payment-option">
            <input
              type="radio"
              name="payment"
              value={option.value}
              checked={selectedPayment === option.value}
              onChange={() => setSelectedPayment(option.value)}
            />
            <img
              src={option.imgSrc}
              alt={option.label}
              className="payment-logo"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </form>
      <button className="payment-button">Escolher forma de pagamento</button>
    </div>
  );
};

export default Pagamento;
