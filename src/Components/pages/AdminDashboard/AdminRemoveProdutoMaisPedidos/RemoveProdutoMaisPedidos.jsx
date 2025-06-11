import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RemoveProdutoMaisPedidos.css'

const RemoveProdutoMaisPedidos = () => {
  const [produtoId, setProdutoId] = useState('');
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('https://localhost:7027/api/maisPedidos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProdutos(data);
        } else {
          alert('Erro ao carregar produtos.');
        }
      } catch (error) {
        alert('Erro ao buscar produtos: ' + error.message);
      }
    };

    fetchProdutos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://localhost:7027/api/maisPedidos/${produtoId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        
      });

      if (response.ok) {
        alert('Produto removido com sucesso!');
        setProdutoId('');
        setProdutos(produtos.filter(p=> p.id !== parseInt(produtoId)));
      } else {
        alert('Erro ao remover o produto!');
      }
    } catch (error) {
      alert('Erro ao remover produto: ' + error.message);
    }
  };

  return (
    <div className='cadastrar-produto-container'>
        <h2>Remover Produto dos Mais Pedidos</h2>
        <div className='lista-produtos'>
            <h3>Lista de Produtos</h3>
            <div className='tabela-wrapper'>
                <table className='tabela-produtos'>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        </tr>
                    </thead>
                </table>
                <div className='tabela-body-scroll'>
                    <table className='tabela-produtos'>
                        <tbody>
                            {produtos.map((p) => (
                                <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nome}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit} className='cadastrar-produto-form'>
            <input
            name='id'
            value={produtoId}
            onChange={(e) => setProdutoId(e.target.value)}
            placeholder='ID do Produto'
            required
            className='inputs-form-cadastro'
            />

            <div className='btns-cadastrar-produto'>
                <button className='btn-cadastrar-form' type='submit'>Remover</button>
                <button
                    className='btn-voltar-form'
                    type='button'
                    onClick={() => navigate("/admin/dashboard")}
                >
                    Voltar
                </button>
            </div>
        </form>
    </div>
  );
};

export default RemoveProdutoMaisPedidos;
