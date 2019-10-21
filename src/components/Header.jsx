import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <p className='header__text'>Trip Inc</p>
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <Link to='/register'>
            <p>Registrate</p>
          </Link>
        </div>
        <div className='header__menu--profile'>
          <Link to='/login'>
            <p>Inicia Sesión</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
