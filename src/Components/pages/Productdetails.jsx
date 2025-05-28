import { useLocation, useParams } from 'react-router-dom'
import './ProductDetails.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BarraInferior from '../BarraInferior/barraInferior'
import Listaprodutos from '../ListaProdutos/Listaprodutos'
import React, { useContext } from 'react';
import { ProdutosContext } from '../../context/ProdutosContext';


const ProductDetails = () => {
  const { produtos } = useContext(ProdutosContext);
  console.log(produtos);
  const { state } = useLocation();  
  const { id } = useParams()
  const navigate = useNavigate();
  
  const produtoSelecionado = state?.produto || state?.bebida;


  if (!produtoSelecionado){
    return <p>Produto não encontrado para o ID: {id}</p>
  }

  const produtosRecomendados = produtos.filter(p => p.id !== produtoSelecionado.id); 

  return (
    <div className='produto-detail-container'>
        <div className='produto-detail-header'>
            <div className='produto-detail-img'>
                <FontAwesomeIcon icon={faArrowLeft} className='icone' onClick={() => navigate ("/")}/>
                <img src={produtoSelecionado.imagemUrl} alt={`Imagem do ${produtoSelecionado.nome}`} />
            </div>

            <div className='produto-detail-info'>
                <h1>{produtoSelecionado.nome}</h1>
                <p>{produtoSelecionado.descricao}</p>
                <span>R$ {produtoSelecionado.preco}</span>
            </div>

            <div className='produto-more-separete'>
                <div className='produto-separate'>
                    <p>Escolha mais itens !</p>
                </div>
            </div>

            <div className='produto-more-list-details'>
                <div className='produto-more-list-cards'>
                    {produtosRecomendados.map(produto => (
                        <div key={produto.id} className='produto-recomended-card'>
                            <div className='produto-recomended-name'>
                                <p>{produto.nome}</p>
                                <p>R$ {produto.preco}</p>
                            </div>
                            
                            <img src={produto.imagemUrl} alt={`Imagem do ${produto.nome}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <BarraInferior/>
    </div>
  )
}

export default ProductDetails
