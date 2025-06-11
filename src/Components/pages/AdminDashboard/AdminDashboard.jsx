import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhiskeyGlass, faPlus, faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons'


const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
        window.location.reload();
    };

    return (
        <div className='admin-dashboard'>
            <div className='admin-dashboard-header'>
                <h1>Painel Administrativo</h1>
                <p>Bem-vindo ao painel administrativo!</p>
            </div>
            
            <div className='admin-dashboard-options-card'>
                <div className='card-cadastrar-produto' onClick={() => navigate('/admin/cadastrarproduto')}>
                    <div className='icon-add-product'>
                        <FontAwesomeIcon icon={faPlus} className='icon-dashboard-add' />
                    </div>
                    
                    <p className='title-cards-admin'>Cadastrar Produto</p>
                </div>

                <div className='card-cadastrar-bebida' onClick={() => navigate('/admin/cadastrarbebida')}>
                    <div className='icon-add-product'>
                        <FontAwesomeIcon icon={faWhiskeyGlass} className='icon-dashboard-drink' />
                    </div>
                    
                    <p className='title-cards-admin'>Cadastrar Bebida</p>
                </div>

                <div className='card-add-favoritos' onClick={() => navigate('/admin/addfavoritos')}>
                    <div className='icon-add-product'>
                        <FontAwesomeIcon icon={faStar} className='icon-dashboard-star'/>
                    </div>
                    
                    <p className='title-cards-admin'>Adicionar aos mais Pedidos</p>
                </div>

                <div className='card-remove-favoritos' onClick={() => navigate('/admin/RemoveProdutoMaisPedidos')}>
                    <div className='icon-add-product'>
                        <FontAwesomeIcon icon={faStar} className='icon-dashboard-star-delete'/>
                    </div>
                    
                    <p className='title-cards-admin'>Remover dos mais Pedidos</p>
                </div>

                <div className='card-remove-produto' onClick={() => navigate('/admin/removeproduto')}>
                    <div className='icon-add-product'>
                        <FontAwesomeIcon icon={faTrashCan} className='icon-dashboard-trash' />
                    </div>
                    
                    <p className='title-cards-admin'>Remover algum produto</p>
                </div>

            </div>    

            <button className='btn-admin-logout' onClick={handleLogout}>Sair</button>
        </div>
    );
};

export default AdminDashboard