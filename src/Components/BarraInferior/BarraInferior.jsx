import React from 'react'
import './barraInferior.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const BarraInferior = () => {
  const navigate = useNavigate()

  return (
    <div className='nav-bar'>
      <div className='inicio' onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faHouse} className='icone'/>
        <p>Inicio</p>
      </div>
      <div className='carrinho' onClick={() => navigate('/carrinho')}>
        <FontAwesomeIcon icon={faCartShopping} className='icone' />
        <p>Carrinho</p>
      </div>
    </div>
  )
}

export default BarraInferior