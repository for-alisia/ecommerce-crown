/** Libraries */
import React from 'react';
import { connect } from 'react-redux';

/** Redux elements */
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

/** Styles */
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, clearItemFromCart, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { clearItemFromCart, addItem, removeItem })(
  CheckoutItem
);
