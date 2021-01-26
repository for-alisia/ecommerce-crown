/** Libraries */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/** Components */
import { CartIcon } from '../cart-icon';
import { CartDropdown } from '../cart-dropdown';

/** Utilities */
import { auth } from '../../firebase/firebase.utils';

/** Styles */
import './header.styles.scss';

/** Images */
import { ReactComponent as LogoSvg } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => (
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
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
