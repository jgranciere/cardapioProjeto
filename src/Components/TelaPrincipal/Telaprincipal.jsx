import React from 'react'
import './TelaPrincipal.css'
import Carroselpedidos from '../CarroselPedidos/Carroselpedidos'
import Listaprodutos from '../ListaProdutos/Listaprodutos'
import BarraInferior from '../BarraInferior/barraInferior'
import { ProdutosContext } from '../../context/ProdutosContext'

function Telaprincipal({termoBusca}) {
  return (
    <main className='main'>
        <Carroselpedidos/>
        <Listaprodutos termoBusca={termoBusca}/>
        <BarraInferior/>
    </main>
  )
}

export default Telaprincipal