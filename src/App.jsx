import React, { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Telaprincipal from './Components/TelaPrincipal/Telaprincipal'
import ProductDetails from './Components/pages/Productdetails'
import Carrinho from './Components/Carrinho/Carrinho'
import { CarrinhoProvider } from './context/CarrinhoContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProdutosProvider } from './context/ProdutosContext'
import AdminLogin from './Components/pages/AdminLogin/AdminLogin'


const App = () => {
  const [termoBusca, setTermoBusca] = useState('');

   
  return (
    <Router>
      <ProdutosProvider>
        <CarrinhoProvider>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar setTermoBusca={setTermoBusca}/>
                <Telaprincipal termoBusca={termoBusca}/>
              </>
            } />
            <Route path="/produto/:id" element={<ProductDetails />} />
            <Route path="/bebida/:id" element={<ProductDetails />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </CarrinhoProvider>
      </ProdutosProvider>
    </Router>
  )
}

export default App
