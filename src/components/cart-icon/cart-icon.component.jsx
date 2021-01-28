/** Libraries */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Redux elements */
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

/** Styles */
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, counter }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCountContainer>{counter}</ItemCountContainer>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  counter: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
