import React from 'react';
import Navbar from '../NavBar/Navbar';
import './carrinho.css';
import { useCarrinho } from '../../context/CarrinhoContext';


const Carrinho = () => {
    const { carrinho, removerDoCarrinho, alterarQuantidade, total } = useCarrinho();

    return (
        <div className="carrinho-container bg-light min-vh-100">
            <Navbar />
            <div className="container py-4">
                <h2 className="mb-3 fw-bold">🛒 Meu Carrinho</h2>
                <p className="texto-resumo">
                    Revise seus produtos antes de finalizar a compra.
                </p>

                {carrinho.length === 0 ? (
                    <p className="text-muted">Seu carrinho está vazio.</p>
                ) : (
                    carrinho.map((produto) => (
                        <div className="card shadow-sm mb-4 border-0 rounded-4" key={produto.id}>
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
                                    <div className="card-body d-flex flex-column justify-content-between h-100">
                                        <div>
                                            <h5 className="card-title fw-semibold">{produto.nome}</h5>
                                            <p className="card-text text-muted mb-1">
                                                Quantidade:
                                                <button
                                                    className="btn btn-sm btn-outline-secondary mx-2"
                                                    onClick={() => alterarQuantidade(produto.id, produto.quantidade - 1)}
                                                >
                                                    -
                                                </button>
                                                {produto.quantidade}
                                                <button
                                                    className="btn btn-sm btn-outline-secondary mx-2"
                                                    onClick={() => alterarQuantidade(produto.id, produto.quantidade + 1)}
                                                >
                                                    +
                                                </button>
                                            </p>
                                            <p className="card-text fw-bold">
                                                R$ {(produto.precoTotal).toFixed(2)}
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
                    <div className="d-flex justify-content-between align-items-center mt-5 border-top pt-4">
                        <h4 className="fw-bold">Total: R$ {total.toFixed(2)}</h4>
                        <button className="btn btn-success px-4 py-2 rounded-3 fw-medium">
                            Finalizar Compra
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Carrinho;
