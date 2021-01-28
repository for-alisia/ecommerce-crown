/** Libraries */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

/** Components */
import { CustomButton } from '../custom-button';
import { CartItem } from '../cart-item';

/** Redux */
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

/** Styles */
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMsgContainer,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <CartDropdownContainer>
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
  </CartDropdownContainer>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
