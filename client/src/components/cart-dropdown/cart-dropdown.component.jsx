/** Libraries */
import React, { Profiler } from 'react';

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
      <Profiler
        id='cart-dropdown-items-profiler'
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        }}
      >
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMsgContainer>Your cart is empty</EmptyMsgContainer>
        )}
      </Profiler>
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
