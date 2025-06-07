import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShareNodes } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({setTermoBusca }) => {

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');

  const barraPesquisa = () => {
    setShowSearch(!showSearch);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setTermoBusca(value); 
  };

  return (
    <header className='header'>
        <a href="/admin/login" className='logo'><img className='img-logo' src={logo} alt="" /></a>

        <div className={`logo-img-name ${showSearch ? 'hidden-logo' : ''}`}>
          <img className='logo-img' src="../public/Yume.svg" alt="" />
        </div>

        <nav className='buttons-options'>
          <button onClick={barraPesquisa}>
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={barraPesquisa} className='icon-search' />
          </button>     

          <div className={`search-bar ${showSearch ? 'visible' : ''}`}>
            <input className='input-search' type="text" placeholder="Buscar..." value={search} onChange={handleInputChange} />
          </div>  
      </nav>

        
        
    </header>
  )
}

export default Navbar