/** Libraries */
import React from 'react';

/** Styles */
import {
  CartIconWrapper,
  ShoppingIconContainer,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, counter }) => (
  <CartIconWrapper onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCountContainer>{counter}</ItemCountContainer>
  </CartIconWrapper>
);

export default CartIcon;
