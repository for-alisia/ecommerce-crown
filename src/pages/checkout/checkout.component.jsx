/** Libraries */
import React from 'react';

/** Components */
import { CheckoutItem } from '../../components/checkout-item';
import { StripeCheckoutButton } from '../../components/stripe-button';

/** Styles */
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
  StripCheckoutButtonContainer,
} from './checkout.styles';

const Checkout = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp. Date: 01/22 - CVV: 123
    </TestWarningContainer>
    <StripCheckoutButtonContainer>
      <StripeCheckoutButton price={total} />
    </StripCheckoutButtonContainer>
  </CheckoutPageContainer>
);

export default Checkout;
