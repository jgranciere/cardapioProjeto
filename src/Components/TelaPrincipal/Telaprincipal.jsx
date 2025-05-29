import React from 'react'
import './TelaPrincipal.css'
import Carroselpedidos from '../CarroselPedidos/Carroselpedidos'
import Listaprodutos from '../ListaProdutos/Listaprodutos'
import BarraInferior from '../BarraInferior/barraInferior'
import { ProdutosContext } from '../../context/ProdutosContext'

function Telaprincipal() {
  return (
    <main className='main'>
        <Carroselpedidos/>
        <Listaprodutos/>
        <BarraInferior/>
    </main>
  )
}

export default Telaprincipal