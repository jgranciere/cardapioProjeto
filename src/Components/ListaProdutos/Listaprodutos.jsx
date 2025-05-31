import React, { useEffect, useState } from 'react'
import './ListaProdutos.css'
import img from '../../assets/produto1.jpg'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ProdutosContext } from '../../context/ProdutosContext';





const Listaprodutos = () => {
    const { produtos } = useContext(ProdutosContext);

    const comidas = produtos.filter(produto => produto.categoria !== 'bebida');
    const bebidas = produtos.filter(produto => produto.categoria === 'bebida');

    return (
        <div className='container-lista-produtos'>
            <div className='container-produtos'>
                <h1>Produtos</h1>
                <div className='container-produtos-list'>
                    <div className='produto-card'>
                        {comidas.map(produto => (
                            <Link to={`/produto/${produto.id}`} state={{ produto }} key={produto.id} className='cards'>
                                <div className='infos-produtos'>
                                    <div className='infos-texto'>
                                        <h2>{produto.nome}</h2>
                                        <p>{produto.descricao}</p>
                                        <span>R$ {produto.preco}</span>
                                    </div>

                                    <div className='infos-imagem'>
                                        <img src={produto.imagemUrl} alt={`Imagem do ${produto.nome}`} />
                                    </div>
                                </div>

                            </Link>
                        ))}
                    </div>


                    <h1>Bebidas</h1>
                    <div className='produto-card'>
                        {bebidas.map(produto => (
                            <Link to={`/produto/${produto.id}`} state={{ produto }} key={produto.id} className='cards'>
                                <div className='infos-produtos'>
                                    <div className='infos-texto'>
                                        <h2>{produto.nome}</h2>
                                        <p>{produto.descricao}</p>
                                        <span>R$ {produto.preco}</span>
                                    </div>

                                    <div className='infos-imagem'>
                                        <img src={produto.imagemUrl} alt={`Imagem do ${produto.nome}`} />
                                    </div>
                                </div>

                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listaprodutos