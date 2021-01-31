/** Libraries */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IEE5IAOzCx2paq4QczBBkRDwDmY8vugQT7TAFYYAm3bN6Ebbljvw1wIH7f51e4jsIKpuQId0BAA53k0j2IYJhXM00YUgpOUWR';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment was successfull!');
        console.log(response);
      })
      .catch((error) => {
        alert('Payment failed!');
        console.log(error);
      });
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
