/** Libraries */
import React from 'react';
import { connect } from 'react-redux';

/** Components */
import { CustomButton } from '../custom-button';
import { CartItem } from '../cart-item';

/** Redux */
import { selectCartItems } from '../../redux/cart/cart.selectors';
/** Styles */
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
