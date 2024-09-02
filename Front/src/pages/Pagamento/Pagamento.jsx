import React, { useState } from "react";
import "./Pagamento.css";

const Pagamento = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const paymentOptions = [
    { label: "Chave pix", value: "pix", imgSrc: "/pix.png" },
    {
      label: "Mastercard Crédito",
      value: "mastercard_credit",
      imgSrc: "/Mastercard.png",
    },
    {
      label: "Mastercard Débito",
      value: "mastercard_debit",
      imgSrc: "/Mastercard.png",
    },
    { label: "Visa Crédito", value: "visa_credit", imgSrc: "/Visa.png" },
    { label: "Visa Débito", value: "visa_debit", imgSrc: "/Visa.png" },
    { label: "Elo crédito", value: "elo_credit", imgSrc: "/elo.png" },
    { label: "Elo débito", value: "elo_debit", imgSrc: "/elo.png" },
    {
      label: "Hipercard Crédito",
      value: "hipercard_credit",
      imgSrc: "/Hipercard.png",
    },
  ];

  return (
    <div className="pagamento-container">
      <header className="header">
        <div className="logo-container">
          <img src="/Logo_Completa.svg" alt="Logo" className="logo" />
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
