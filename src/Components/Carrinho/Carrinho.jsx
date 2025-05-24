import React from 'react'
import Navbar from '../NavBar/Navbar'
import './carrinho.css'
import { useNavigate } from 'react-router-dom'

const Carrinho = () => {
    return (
        <div className='carrinho-container'>
            <Navbar />
            <div className='container-carrinho'>
                <h1>Carrinho</h1>
                <p>Adicione produtos ao carrinho e finalize sua compra.</p>
                <div className='carrinho'>
                    <div className='carrinho-produto'>
                        <img src="src\assets\produto1.jpg" alt="Produto" />
                        <h2>Nome do Produto</h2>
                        <p>Descrição do produto</p>
                        <p>Preço: R$ 100,00</p>
                        <button>Remover do Carrinho</button>
                    </div>
                    <div className='carrinho-produto'>
                        <img src="src\assets\produto1.jpg" alt="Produto" />
                        <h2>Nome do Produto</h2>
                        <p>Descrição do produto</p>
                        <p>Preço: R$ 100,00</p>
                        <button>Remover do Carrinho</button>
                    </div>
                </div>
            </div>
            <div className='carrinho-total'>
                <h2>Total: R$ 200,00</h2>
                <button>Finalizar Compra       fefef</button>
            </div>
        </div>
    )
}

export default Carrinho
