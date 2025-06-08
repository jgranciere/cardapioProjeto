import React, { useEffect, useState } from 'react'
import './ListaProdutos.css'
import img from '../../assets/produto1.jpg'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ProdutosContext } from '../../context/ProdutosContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Listaprodutos = ({ termoBusca }) => {

    const { produtos } = useContext(ProdutosContext);

    const comidas = produtos.filter(produto => produto.categoria !== 'bebida');
    const bebidas = produtos.filter(produto => produto.categoria === 'bebida');

    const comidasFiltradas = comidas.filter(produto =>
        produto.nome.toLowerCase().includes(termoBusca.toLowerCase())
    );

    const bebidasFiltradas = bebidas.filter(produto =>
        produto.nome.toLowerCase().includes(termoBusca.toLowerCase())
    );

    console.log(termoBusca)
    console.log(produtos)
    return (
        <div className='container-lista-produtos'>
            <div className='container-produtos'>
                <h1>Produtos</h1>
                <div className='container-produtos-list'>
                    <div className='produto-card'>
                        {comidasFiltradas.map(produto => (
                            <Link to={`/produto/${produto.id}`} state={{ produto }} key={produto.id} className='cards'>
                                <div className='infos-produtos'>
                                    <div className='button-add-product'>
                                        <button className='add-product'><FontAwesomeIcon icon={faPlus} className='icone-carrinho-add' /></button>
                                    </div>


                                    <div className='infos-img-card-product'>
                                        <div className='infos-card-product'>
                                            <h1>{produto.nome}</h1>
                                            <span><span className='span-rs'>R$</span>{parseFloat(produto.preco).toFixed(2)}</span>
                                        </div>

                                        <div className='div-infos-img'>
                                            <div className='infos-imagem'>
                                                <img src={produto.imagemUrl} alt={`Imagem do ${produto.nome}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>


                    <h1>Bebidas</h1>
                    <div className='produto-card'>
                        {bebidasFiltradas.map(produto => (
                            <Link to={`/produto/${produto.id}`} state={{ produto }} key={produto.id} className='cards'>
                                <div className='infos-produtos'>
                                    <div className='button-add-product'>
                                        <button className='add-product'><FontAwesomeIcon icon={faPlus} className='icone-carrinho-add' /></button>
                                    </div>

                                    <div className='infos-img-card-product'>
                                        <div className='infos-card-product'>
                                            <h1>{produto.nome}</h1>
                                            <span><span className='span-rs'>R$</span>{parseFloat(produto.preco).toFixed(2)}</span>
                                        </div>

                                        <div className='div-infos-img'>
                                            <div className='infos-imagem'>
                                                <img src={produto.imagemUrl} alt={`Imagem do ${produto.nome}`} />
                                            </div>
                                        </div>
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