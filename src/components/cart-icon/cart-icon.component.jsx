/** Libraries */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Redux elements */
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

/** Images */
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

/** Styles */
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, counter }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{counter}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  counter: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
