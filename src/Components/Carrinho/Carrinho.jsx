import React from 'react'
import Navbar from '../NavBar/Navbar'
import './carrinho.css'
import { useNavigate } from 'react-router-dom'

const Carrinho = () => {
    return (
        <div className="carrinho-container bg-light min-vh-100">
            <Navbar />
            <div className="container py-4">
                <h2 className="mb-3 fw-bold">🛒 Meu Carrinho</h2>
                <p className="texto-resumo">
                    Revise seus produtos antes de finalizar a compra.
                </p>

                {[1, 2].map((_, i) => (
                    <div className="card shadow-sm mb-4 border-0 rounded-4" key={i}>
                        <div className="row g-0">
                            <div className="col-4 col-md-3">
                                <img
                                    src="src/assets/produto1.jpg"
                                    className="img-fluid rounded-start h-100 object-fit-cover"
                                    alt="Produto"
                                    style={{ borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }}
                                />
                            </div>
                            <div className="col-8 col-md-9">
                                <div className="card-body d-flex flex-column justify-content-between h-100">
                                    <div>
                                        <h5 className="card-title fw-semibold">Nome do Produto</h5>
                                        <p className="card-text descricao-produto mb-1">
                                            Descrição resumida do produto aqui.
                                        </p>

                                    </div>
                                    <div className="d-flex justify-content-between align-items-end mt-3">
                                        <span className="fw-bold fs-6">R$ 100,00</span>
                                        <button className="btn btn-outline-danger btn-sm">Remover</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="d-flex justify-content-between align-items-center mt-5 border-top pt-4">
                    <h4 className="fw-bold">Total: R$ 200,00</h4>
                    <button className="btn btn-success px-4 py-2 rounded-3 fw-medium">
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carrinho
