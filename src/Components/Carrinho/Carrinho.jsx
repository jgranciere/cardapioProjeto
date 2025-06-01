import React from 'react';
import Navbar from '../NavBar/Navbar';
import './carrinho.css';
import { useCarrinho } from '../../context/CarrinhoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import BarraInferior from '../BarraInferior/barraInferior';



const Carrinho = () => {
    const { carrinho, removerDoCarrinho, alterarQuantidade, total } = useCarrinho();

    return (
        <div className="carrinho-container bg-light min-vh-100">
            <Navbar />
            <div className="container py-4 d-flex flex-column align-items-center">
                <h2 className="mb-3 fw-bold">Meu carrinho</h2>
                <p className="texto-resumo text-center mb-4">
                    Revise seus produtos antes de finalizar a compra.
                </p>
                
                
                {carrinho.length === 0 ? (
                    
                    <>
                        <p className="text-muted">Seu carrinho está vazio.</p>
                        <img src="../public/vector.svg" alt="" className='img-carrinho-vazio' />
                    </>
                    
                ) : (
                    carrinho.map((produto) => (
                        <div className="card shadow-sm mb-4 border-0 rounded-2" key={produto.id}>
                            <div className="row g-0">
                                <div className="col-4 col-md-3">
                                    <img
                                        src={produto.imagemUrl}
                                        className="img-fluid rounded-start h-100 object-fit-cover"
                                        alt={`Imagem de ${produto.nome}`}
                                        style={{ borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }}
                                    />
                                </div>
                                <div className="col-8 col-md-9">
                                    <div className="card-body d-flex flex-column justify-content-between h-100 p-2">
                                        <div>
                                            <h5 className="card-title fw-semibold">{produto.nome}</h5>
                                            <p className="card-text text-muted mb-1 d-flex align-items-center justify-content-between">
                                                Quantidade:
                                                <button
                                                    className="btn-remove"
                                                    onClick={() => alterarQuantidade(produto.id, produto.quantidade - 1)}
                                                >
                                                    <FontAwesomeIcon icon={faMinus} className='icone-carrinho' />
                                                </button>
                                                {produto.quantidade}
                                                <button
                                                    className="btn-add"
                                                    onClick={() => alterarQuantidade(produto.id, produto.quantidade + 1)}
                                                >
                                                    <FontAwesomeIcon icon={faPlus} className='icone-carrinho' />
                                                </button>
                                            </p>
                                            <p className="card-text fw-bold">
                                                R$ {(produto.preco).toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-end mt-3">
                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() => removerDoCarrinho(produto.id)}
                                            >
                                                Remover
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}

                {carrinho.length > 0 && (
                    <div className="d-flex justify-content-between align-items-center mt-2 border-top pt-4 flex-column compra-finalizada">
                        <h4 className="fw-bold ">Total: R$ {total.toFixed(2)}</h4>
                        <button className="btn btn-success px-4 py-2 rounded-2 fw-medium btn-compra">
                            Finalizar Compra
                        </button>
                    </div>
                )}
            </div>
            <BarraInferior/>
        </div>
        
    );
};

export default Carrinho;
