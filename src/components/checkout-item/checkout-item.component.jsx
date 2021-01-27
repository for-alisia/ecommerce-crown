/** Libraries */
import React from 'react';

/** Styles */
import './checkout-item.styles.scss';

const CheckoutItem = ({ item: { name, price, quantity, imageUrl } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt={name} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
);

export default CheckoutItem;
