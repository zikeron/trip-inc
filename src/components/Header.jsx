import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/TripInc.svg';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src='' alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={logo} alt='Trip-inc logo' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><Link to='/login'>Nombre del Usuario</Link></li>
          <li><Link to='/login'>Iniciar Sesión</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
