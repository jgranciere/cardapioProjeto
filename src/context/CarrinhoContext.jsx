import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export const useCarrinho = () => useContext(CarrinhoContext);


export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(prevCarrinho => {
      const itemExistente = prevCarrinho.find(item => item.id === produto.id);

      if (itemExistente) {
        return prevCarrinho.map(item =>
          item.id === produto.id
            ? {
                ...item,
                quantidade: item.quantidade + 1,
                precoTotal: (item.quantidade + 1) * item.preco
              }
            : item
        );
      } else {
        return [...prevCarrinho, { ...produto, quantidade: 1, precoTotal: produto.preco }];
      }
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(prevCarrinho => prevCarrinho.filter(item => item.id !== id));
  };

  const alterarQuantidade = (id, novaQuantidade) => {
    if (novaQuantidade < 1) return; // Não deixa quantidade menor que 1
    setCarrinho(prevCarrinho =>
      prevCarrinho.map(item =>
        item.id === id
          ? {
              ...item,
              quantidade: novaQuantidade,
              precoTotal: novaQuantidade * item.preco
            }
          : item
      )
    );
  };

  const total = carrinho.reduce((acc, item) => acc + item.precoTotal, 0);

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, alterarQuantidade, total }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
