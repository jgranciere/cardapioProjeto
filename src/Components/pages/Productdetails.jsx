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
        <div className='bar-header'>
            <FontAwesomeIcon icon={faArrowLeft} size= '2x' className='icon-back' onClick={() => navigate("/")}/>
        </div>

        <div className='details-product'>
            <div className='detail-product-infos'>
                <div className='img-container'>
                    <img src={produtoSelecionado.imagemUrl} alt={`Imagem do ${produtoSelecionado.nome}`} />
                </div>
                <div className='detail-product-infos-texts'>
                    <div className='detail-product-infos-texts-names'>
                        <h1>{produtoSelecionado.nome}</h1>
                        <span>R$ {produtoSelecionado.preco}</span>
                        <p>{produtoSelecionado.descricao}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='more-products'>
            <h1>Escolha mais itens</h1>
        </div>
        <div className='list-products'>
            {produtosRecomendados.map(produto => (
                <div key={produto.id} className="produto-recomendado">
                    <img src={produto.imagemUrl} alt={produto.nome} />
                    <p>{produto.nome}</p>
                    
                </div>
            ))}
        </div>


        <BarraInferior/>

    </div>
  )
}

export default ProductDetails
