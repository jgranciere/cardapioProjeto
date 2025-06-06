// src/context/ProdutosContext.jsx

import { createContext, useEffect, useState } from 'react';

export const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);
  const [maisPedidos, setMaisPedidos] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7027/api/produto')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        return response.json();
      })
      .then(data => setProdutos(data))
      .catch(error => console.error('Erro:', error));
  }, []);

  useEffect(() => {
    fetch('https://localhost:7027/api/maisPedidos')
      .then(response => {
        if (!response.ok) {s
          throw new Error('Erro ao buscar produtos mais pedidos');
        }
        return response.json();
      })
      .then(data => setMaisPedidos(data))
      .catch(error => console.error('Erro:', error));
  }, []);

  return (
    <ProdutosContext.Provider value={{ produtos, maisPedidos }}>
      {children}
    </ProdutosContext.Provider>
  );
};
