import React from 'react'
import './barraInferior.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const BarraInferior = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const inicio = location.pathname === '/';
  const carrinho = location.pathname === '/carrinho';

  return (
    <div className='nav-bar'>
      <div
       className={`inicio ${inicio ? 'active' : ''}`}
        onClick={() => navigate('/')}>
        <HomeIcon className='icone-inicio'/>
        <p>Inicio</p>
      </div>
      <div
       className={`carrinho ${carrinho ? 'active' : ''}`}
        onClick={() => navigate('/carrinho')}>
        <ShoppingCartIcon  className='icone-carrinho'/>
        <p>Carrinho</p>
      </div>
    </div>
  )
}

export default BarraInferior
