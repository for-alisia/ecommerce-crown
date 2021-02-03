/** Libraries */
import React from 'react';

/** Styles */
import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  NameItemContainer,
  PriceItemContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt={name} />
    <ItemDetailsContainer>
      <NameItemContainer>{name}</NameItemContainer>
      <PriceItemContainer>
        {quantity} x ${price}
      </PriceItemContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
