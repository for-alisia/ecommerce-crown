/** Libraries */
import React from 'react';
import { connect } from 'react-redux';

/** Components */
import { CustomButton } from '../custom-button';

/** Redux */
import { addItem } from '../../redux/cart/cart.actions';

/** Styles */
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}$</span>
      </div>
      <CustomButton
        className='custom-button'
        inverted
        onClick={() => addItem(item)}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
