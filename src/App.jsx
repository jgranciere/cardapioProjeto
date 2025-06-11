import React, { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Telaprincipal from './Components/TelaPrincipal/Telaprincipal'
import ProductDetails from './Components/pages/Productdetails'
import Carrinho from './Components/Carrinho/Carrinho'
import { CarrinhoProvider } from './context/CarrinhoContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProdutosProvider } from './context/ProdutosContext'
import AdminLogin from './Components/pages/AdminLogin/AdminLogin'
import AdminDashboard from './Components/pages/AdminDashboard/AdminDashboard'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import CadastrarProduto from './Components/pages/AdminDashboard/AdminCadastrarProduto/CadastrarProduto'
import CadastrarBebida from './Components/pages/AdminDashboard/AdminCadastrarBebida/CadastrarBebida'
import AddFavoritos from './Components/pages/AdminDashboard/AdminAddFavoritos/AddFavoritos'
import RemoveProduto from './Components/pages/AdminDashboard/AdminRemoveProduto/RemoveProduto'
import RemoveProdutoMaisPedidos from './Components/pages/AdminDashboard/AdminRemoveProdutoMaisPedidos/RemoveProdutoMaisPedidos'


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
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/cadastrarproduto" element={
              <ProtectedRoute>
                <CadastrarProduto />
              </ProtectedRoute>
            } />
            <Route path="/admin/cadastrarbebida" element={
              <ProtectedRoute>
                <CadastrarBebida />
              </ProtectedRoute>
            } />
            <Route path="/admin/addfavoritos" element={
              <ProtectedRoute>
                <AddFavoritos />
              </ProtectedRoute>
            } />
            <Route path="/admin/removeproduto" element={
              <ProtectedRoute>
                <RemoveProduto />
              </ProtectedRoute>
            } />
            <Route path="/admin/RemoveProdutoMaisPedidos" element={
              <ProtectedRoute>
                <RemoveProdutoMaisPedidos />
              </ProtectedRoute>
            } />
          </Routes>
        </CarrinhoProvider>
      </ProdutosProvider>
    </Router>
  )
}

export default App
