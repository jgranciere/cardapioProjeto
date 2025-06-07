import React from 'react'
import './AdminLogin.css'

const AdminLogin = () => {
  return (
    <div className='admin-login-container'>
        <h1>Área do Administrador</h1>
        <form className='admin-login-form'>
            <div className='form-group'>
                <label htmlFor="username">Usuário:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" required />
            </div>

            <button type="submit">Entrar</button>
            <a href="/" className='a-link-back'>Voltar ao menu principal</a>
        </form>
    </div>
  )
}

export default AdminLogin