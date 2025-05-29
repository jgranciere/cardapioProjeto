import { useLocation, useParams } from 'react-router-dom'
import './ProductDetails.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BarraInferior from '../BarraInferior/barraInferior'
import React, { useContext, useEffect, useState } from 'react';
import { ProdutosContext } from '../../context/ProdutosContext';

const ProductDetails = () => {
  const { produtos } = useContext(ProdutosContext);
  const { state } = useLocation();  
  const { id } = useParams();
  const navigate = useNavigate();

  const [showArrow, setShowArrow] = useState(true);

  const produtoSelecionado = state?.produto || state?.bebida;

  useEffect(() => {
    const content = document.querySelector('.produto-detail-header');

    const handleScroll = () => {
      if (content.scrollTop > 20) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    if (content) {
      content.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (content) {
        content.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  if (!produtoSelecionado){
    return <p>Produto não encontrado para o ID: {id}</p>
  }

  const produtosRecomendados = produtos.filter(p => p.id !== produtoSelecionado.id); 

  return (
    <div className='produto-detail-container'>
        <div className='produto-detail-header'>
            <div className='produto-detail-img'>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className={`icone ${showArrow ? 'visible' : 'hidden'}`}
                  onClick={() => navigate("/")}
                />
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

export default ProductDetails;
