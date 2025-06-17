import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProduto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const EditProduto = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState({
    id:'',
    nome: '',
    descricao: '',
    preco: ''
  });
  const navigate = useNavigate();
  const [mostrarPainel, setMostrarPainel] = useState(false);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('https://localhost:7027/api/produto', {
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

  const handleProdutoClick = (produto) => {
    setProdutoSelecionado(produto);
    setMostrarPainel(true);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProdutoSelecionado(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = () => {
    setMostrarPainel(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://localhost:7027/api/produto/${produtoSelecionado.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: produtoSelecionado.nome,
          preco: parseFloat(produtoSelecionado.preco),
          descricao: produtoSelecionado.descricao,
          foto: produtoSelecionado.foto
        }),
      });

      if (response.ok) {
        alert('Produto editado com sucesso!');
        setProdutoSelecionado({
          id: '',
          nome: '',
          descricao: '',
          preco: ''
        });
      } else {
        alert('Erro ao editar produto.');
      }
    } catch (error) {
      alert('Erro ao editar produto: ' + error.message);
    }
  };

  return (
    <div className='cadastrar-produto-container container-edit'>
      <div className='div-header-admin'>
        <FontAwesomeIcon icon={faChevronLeft} className='icon-back-div' onClick={() => navigate("/admin/dashboard")} />
        <img className='img-logo-admin' src=".././public/Yume-logo.svg" alt="" />     
      </div>


      <h2>Editar Produto</h2>
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
                              <tr key={p.id} onClick={() => handleProdutoClick(p)} style={{ cursor: 'pointer' }}>
                                <td onFocus={handleFocus}>{p.id}</td>
                                <td>{p.nome}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>


      {mostrarPainel && (
          <div className="overlay-edicao">
            <div className="painel-edicao">
              <form onSubmit={handleSubmit} className='cadastrar-produto-form'>
                <input
                  name='nome'
                  value={produtoSelecionado.nome}
                  onChange={handleChange}
                  placeholder='Nome'
                  className='inputs-form-cadastro'
                  required
                />
                <textarea
                  name='descricao'
                  value={produtoSelecionado.descricao}
                  onChange={handleChange}
                  placeholder='Descrição'
                  className='inputs-form-cadastro text-area-descricao'
                  required
                />
                <input
                  name='preco'
                  type='number'
                  value={produtoSelecionado.preco}
                  onChange={handleChange}
                  placeholder='Preço'
                  className='inputs-form-cadastro '
                  required
                />

                <div className='btns-cadastrar-produto'>
                  <button className='btn-cadastrar-form' type='submit'>Salvar Alterações</button>
                </div>
              </form>
              <button type="button" className='btn-cadastrar-form-remove-painel' onClick={() => setMostrarPainel(false)}>Sair</button>

            </div>
          </div>
        )}
    </div>
  );
};

export default EditProduto;
