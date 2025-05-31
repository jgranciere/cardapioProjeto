import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import './ProductDetails.css';
import BarraInferior from '../BarraInferior/barraInferior';
import { useCarrinho } from '../../context/CarrinhoContext';
import { ProdutosContext } from '../../context/ProdutosContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    const { produtos } = useContext(ProdutosContext);
    const { state } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const { adicionarAoCarrinho } = useCarrinho();

    const produtoSelecionado = state?.produto || state?.bebida;

    const [mensagem, setMensagem] = useState('');
    const [mensagemProdutoId, setMensagemProdutoId] = useState(null); // Para produtos recomendados

    if (!produtoSelecionado) {
        return <p>Produto não encontrado para o ID: {id}</p>;
    }

    const handleAdicionarCarrinhoPrincipal = () => {
        const produto = {
            id: produtoSelecionado.id,
            nome: produtoSelecionado.nome,
            preco: produtoSelecionado.preco,
            imagemUrl: produtoSelecionado.imagemUrl,
        };
        adicionarAoCarrinho(produto);
        setMensagem('✅ Produto adicionado ao carrinho!');
        setTimeout(() => setMensagem(''), 3000);
    };

    const handleAdicionarCarrinhoRecomendado = (produto) => {
        adicionarAoCarrinho(produto);
        setMensagemProdutoId(produto.id);
        setTimeout(() => setMensagemProdutoId(null), 3000);
    };

    const produtosRecomendados = produtos.filter(p => p.id !== produtoSelecionado.id);

    return (
        <div className='produto-detail-container'>
            <div className='produto-detail-header'>
                <div className='produto-detail-img'>
                    <FontAwesomeIcon icon={faArrowLeft} className='icone' onClick={() => navigate("/")} />
                    <img src={produtoSelecionado.imagemUrl} alt={`Imagem do ${produtoSelecionado.nome}`} />
                </div>

                <div className='produto-detail-info'>
                    <h1>{produtoSelecionado.nome}</h1>
                    <p>{produtoSelecionado.descricao}</p>
                    <span>R$ {produtoSelecionado.preco}</span>
                    <button onClick={handleAdicionarCarrinhoPrincipal} className="botao-adicionar-carrinho">
                        Adicionar ao Carrinho
                    </button>
                    {mensagem && <div className="mensagem-carrinho">{mensagem}</div>}
                </div>

                <div className='produto-more-separete'>
                    <div className='produto-separate'>
                        <p>Escolha mais itens!</p>
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

                                <button
                                    onClick={() => handleAdicionarCarrinhoRecomendado({
                                        id: produto.id,
                                        nome: produto.nome,
                                        preco: produto.preco,
                                        imagemUrl: produto.imagemUrl,
                                    })}
                                    className="botao-adicionar-recomended"
                                >
                                    <FontAwesomeIcon icon={faCartShopping} className='icone' />
                                </button>

                                {mensagemProdutoId === produto.id && (
                                    <div className="mensagem-carrinho">✅ Adicionado ao carrinho!</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <BarraInferior />
        </div>
    );
};

export default ProductDetails;
