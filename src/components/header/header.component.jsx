/** Libraries */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Components */
import { CartIcon } from '../cart-icon';
import { CartDropdown } from '../cart-dropdown';

/** Redux elements */
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

/** Utilities */
import { auth } from '../../firebase/firebase.utils';

/** Styles */
import {
  HeaderContainer,
  OptionsContainer,
  LogoContainer,
  OptionLink,
} from './header.styles';

/** Images */
import { ReactComponent as LogoSvg } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer className='logo-container' to='/'>
      <LogoSvg className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
