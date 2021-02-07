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
import {
  CheckoutItemContainer,
  ImageContainer,
  CellContainer,
  QtyContainer,
  ArrowContainer,
  ValueCellContainer,
  RemoveCellContainer,
} from './checkout-item.styles';

export const CheckoutItem = ({
  item,
  clearItemFromCart,
  addItem,
  removeItem,
}) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <CellContainer>{name}</CellContainer>
      <QtyContainer>
        <ArrowContainer onClick={() => removeItem(item)}>
          &#10094;
        </ArrowContainer>
        <ValueCellContainer>{quantity}</ValueCellContainer>
        <ArrowContainer onClick={() => addItem(item)}>&#10095;</ArrowContainer>
      </QtyContainer>
      <CellContainer>{price}</CellContainer>
      <RemoveCellContainer onClick={() => clearItemFromCart(item)}>
        &#10005;
      </RemoveCellContainer>
    </CheckoutItemContainer>
  );
};

export default connect(null, { clearItemFromCart, addItem, removeItem })(
  CheckoutItem
);
