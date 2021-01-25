/** Libraries */
import React from 'react';
import { Link } from 'react-router-dom';

/** Styles */
import './header.styles.scss';

/** Images */
import { ReactComponent as LogoSvg } from '../../assets/crown.svg';

export const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <LogoSvg className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
    </div>
  </div>
);
