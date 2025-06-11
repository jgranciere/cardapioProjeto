import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro(''); 

    try {
      const response = await fetch('https://localhost:7027/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        })
      });

      const dados = await response.json();

      if (response.ok) {
        localStorage.setItem('token', dados.token);
        navigate('/admin/dashboard');
      } else {
        setErro(dados.mensagem || 'Credencias Inválidas.');
      }
    }
    catch (erro) {
      console.error('Erro na requisição:', erro);
      setErro('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.');
    }
  }


  return (
    <div className='admin-login-container'>
        <h1>Área do Administrador</h1>
        <form className='admin-login-form' onSubmit={handleLogin}>
            <div className='form-group'>
                <label htmlFor="username">Usuário:</label>
                <input type="text" id="username" name="username" required onChange={e => setUsername(e.target.value)} />

                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)}/>
            </div>

            <button type="submit">Entrar</button>
            <a href="/" className='a-link-back'>Voltar ao menu principal</a>
            {erro && <p style={{ color: 'red', marginTop: '10px' }}>{erro}</p>}
        </form>
    </div>
  )
}

export default AdminLogin