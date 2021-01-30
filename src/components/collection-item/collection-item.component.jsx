/** Libraries */
import React from 'react';
import { connect } from 'react-redux';

/** Redux */
import { addItem } from '../../redux/cart/cart.actions';

/** Styles */
import {
  CollectionItemContainer,
  CollectionFooterComponent,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  CustomButtonContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage
        className='image'
        // @ts-ignore
        imageUrl={imageUrl}
      ></BackgroundImage>

      <CollectionFooterComponent>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}$</PriceContainer>
      </CollectionFooterComponent>
      <CustomButtonContainer
        className='custom-button'
        inverted
        onClick={() => addItem(item)}
      >
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

export default connect(null, { addItem })(CollectionItem);
