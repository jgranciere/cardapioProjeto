import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CadastrarProduto.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const CadastrarProduto = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState(null);

  const navigate = useNavigate();

  const handleImagemChange = (e) => {
    setFoto(e.target.files[0]);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('preco', preco);
    formData.append('descricao', descricao);
    formData.append('foto', foto)
    

    try {
      const response = await fetch('https://localhost:7027/api/produto', {
        method: 'POST',
        body: formData
      });

      const mensagem = await response.json();

      if(response.ok) {
        alert(`${mensagem.mensagemSucesso}`);
        setNome('');
        setPreco('');
        setDescricao('');
        setFoto(null);
      } else {
        alert(`${mensagem.mensagemErro}`);
      }
    } catch (error) {
      alert('Erro ao cadastrar produto: ' + error.message);
    }
  };

  return (
    <div className='cadastrar-produto-container'>

      <div className='div-header-admin'>
        <FontAwesomeIcon icon={faChevronLeft} className='icon-back-div' onClick={() => navigate("/admin/dashboard")} />
        <img className='img-logo-admin' src=".././public/Yume-logo.svg" alt="" />     
      </div>
      <h2>Cadastrar produto</h2>
      <form onSubmit={handleSubmit} className='cadastrar-produto-form'>
        <input name='nome' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome' required className='inputs-form-cadastro'/>
        <input name='preco' value={preco} onChange={(e) => setPreco(e.target.value)} placeholder='Preço' required className='inputs-form-cadastro'/>
        <textarea name='descricao' value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder='Descrição' required className='inputs-form-cadastro'/>
        <input name='foto' type='file' accept='image/*' onChange={handleImagemChange} placeholder='Imagem' required className='inputs-form-cadastro'/>
        
        <div className='btns-cadastrar-produto'>
            <button className='btn-cadastrar-form' type='submit'>Cadastrar</button>
        </div>
        
      </form>
    </div>
  );
};

export default CadastrarProduto;