/** Libraries */
import React from 'react';

/** Components */
import { CustomButton } from '../custom-button';

/** Styles */
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
