import React, { useState, useEffect } from "react";
import "./BotaoConfirmarPedido.css";

export default function BotaoConfirmarPedido() {
  const [animado, setAnimado] = useState(false);

  const handleClick = () => {
    if (!animado) {
      setAnimado(true);
    }
  };

  useEffect(() => {
    if (animado) {
      const timeout = setTimeout(() => setAnimado(false), 10000);
      return () => clearTimeout(timeout);
    }
  }, [animado]);

  return (
    <button className={`order ${animado ? "animate" : ""}`} onClick={handleClick}>
      <span className="default">Confirmar Pedido</span>
      <span className="success">
        Pedido Confirmado
        <svg viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <div className="box" />
      <div className="truck">
        <div className="back" />
        <div className="front">
          <div className="window" />
        </div>
        <div className="light top" />
        <div className="light bottom" />
      </div>
      <div className="lines" />
    </button>
  );
}
