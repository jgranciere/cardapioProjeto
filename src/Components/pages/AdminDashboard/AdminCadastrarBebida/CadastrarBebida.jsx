import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CadastrarBebida.css'; 

const CadastrarBebida = () => {
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    descricao: '', 
  });

  const [imagem, setImagem] = useState(null)

  const handleChange = (e) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value
    });
  }

  const handleImagemChange = (e) => {
    setImagem(e.target.files[0]);
  }

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('nome', produto.nome);
    formData.append('preco', produto.preco);
    formData.append('descricao', produto.descricao);
    formData.append('foto', imagem)
    

    try {
      const response = await fetch('https://localhost:7027/api/bebida', {
        method: 'POST',
        body: formData
      });

      if(response.ok) {
        alert('Produto cadastrado com sucesso!');
        setProduto({
          nome: '',
          preco: '',
          descricao: ''
        });
        setImagem(null);
      } else {
        alert('Erro ao cadastrar produto. Verifique os dados e tente novamente.');
      }
    } catch (error) {
      alert('Erro ao cadastrar produto: ' + error.message);
    }
  };

  return (
    <div className='cadastrar-produto-container'>
      <h2>Cadastrar Bebida</h2>
      <form onSubmit={handleSubmit} className='cadastrar-produto-form'>
        <input name='nome' value={produto.nome} onChange={handleChange} placeholder='Nome' required className='inputs-form-cadastro'/>
        <input name='preco' value={produto.preco} onChange={handleChange} placeholder='Preço' required className='inputs-form-cadastro'/>
        <textarea name='descricao' value={produto.descricao} onChange={handleChange} placeholder='Descrição' required className='inputs-form-cadastro'/>
        <input name='foto' type='file' accept='image/*' value={produto.imagemUrl} onChange={handleImagemChange} placeholder='Imagem' required className='inputs-form-cadastro'/>

        <div className='btns-cadastrar-produto'>
            <button className='btn-cadastrar-form' type='submit'>Cadastrar</button>
            <button className='btn-voltar-form' type='button' onClick={()=> navigate("/admin/dashboard")}>Voltar</button>
        </div>
        
      </form>
    </div>
  );
};

export default CadastrarBebida;