/** Libraries */
import React from 'react';

/** Components */
import { CustomButton } from '../custom-button';
import { CartItem } from '../cart-item';

/** Styles */
import {
  CartDropdownWrapper,
  CartItemsContainer,
  EmptyMsgContainer,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <CartDropdownWrapper>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMsgContainer>Your cart is empty</EmptyMsgContainer>
      )}
    </CartItemsContainer>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownWrapper>
);

export default CartDropdown;
