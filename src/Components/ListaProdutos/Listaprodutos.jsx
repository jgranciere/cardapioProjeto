import React, { useEffect, useState} from 'react'
import './ListaProdutos.css'
import img from '../../assets/produto1.jpg'
import { Link } from 'react-router-dom'

const Listaprodutos = () => {
    const [produtos, setProdutos] = useState([]);
    const [bebidas, setBebidas] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7027/api/produto')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao conectar');
            }
            return response.json();
        })
        .then(data => {
            const soComidas = data.filter(produto => produto.categoria !== 'bebida');
            setProdutos(soComidas);
        })
        .catch(error => {
            console.error('Erro:', error)
        });
    }, []);

    useEffect(() => {
        fetch('https://localhost:7027/api/produto/bebida')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao conectar');
            }
            return response.json();
        })
        .then(data => {
            const soBebidas = data.filter(produto => produto.categoria !== 'comida');
            setBebidas(soBebidas);
        })
        .catch(error => {
            console.error('Erro:', error)
        });
    }, []);

    return (
        <section className='section-produtos'>
            <h3>Produtos</h3>
            <div className='cards-produtos'>
                {produtos.map((produto) => (
                    <Link to={`/produto/${produto.id}`} state={{ produto }} key={produto.id} className='cards'>
                        <div className='infos-produtos'>
                            <h2>{produto.nome}</h2>
                            <p>{produto.descricao}</p>
                            <span>R$ {produto.preco}</span>
                        </div>
                        <img src={produto.imagemUrl} alt={`Imagem do ${produto.nome}`} />
                    </Link>
                ))}
            </div>

            <div className='category-bebidas'>
                <h3>Bebidas</h3>
                <div className='cards-produtos'>
                {bebidas.map((bebida) => (
                    <Link to={`/bebida/${bebida.id}`} state={{ bebida }} key={bebida.id} className='cards'>
                        <div className='infos-produtos'>
                            <h2>{bebida.nome}</h2>
                            <p>{bebida.descricao}</p>
                            <span>R$ {bebida.preco}</span>
                        </div>
                        <img src={bebida.imagemUrl} alt={`Imagem do ${bebida.nome}`} />
                    </Link>
                ))}
            </div>
            </div>
        </section>
    )
}

export default Listaprodutos



