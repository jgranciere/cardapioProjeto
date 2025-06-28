import React, { useState, useEffect } from 'react';
import "./BotaoConfirmarPedido.css";


const BotaoAnimado = () => {
  const [status, setStatus] = useState(''); 

  useEffect(() => {
    let validateTimeout, resetTimeout;

    if (status === 'onclic') {
      validateTimeout = setTimeout(() => {
        setStatus('validate');
      }, 2250);
    }

    if (status === 'validate') {
      resetTimeout = setTimeout(() => {
        setStatus('');
      }, 1250);
    }

    return () => {
      clearTimeout(validateTimeout);
      clearTimeout(resetTimeout);
    };
  }, [status]);

  const handleClick = () => {
    if (status === '') {
      setStatus('onclic');
    }
  };

  return (
    <div className="container-btn-confirmar">
      <button
        id="button"
        className={status}
        onClick={handleClick}
      >
        {status === '' && 'SUBMIT'}
        {status === 'onclic' && ''}
        {status === 'validate' && <span>&#10003;</span>}
      </button>
    </div>
  );
};

export default BotaoAnimado;
