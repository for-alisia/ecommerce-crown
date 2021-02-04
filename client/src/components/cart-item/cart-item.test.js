// @ts-nocheck
/** Libraries */
import { shallow, mount, render } from 'enzyme';
import React from 'react';

/** Components */
import CartItem from './cart-item.component';

const item = {
  name: 'Skirt',
  price: '25',
  imageUrl: 'http://someurl.com',
  quantity: 2,
};

it('expect to render a component', () => {
  expect(shallow(<CartItem item={item} />).length).toEqual(1);
});
