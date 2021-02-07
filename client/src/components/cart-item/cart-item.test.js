// @ts-nocheck
/** Libraries */
import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';

/** Components */
import CartItem from './cart-item.component';

const item = {
  name: 'Skirt',
  price: '25',
  imageUrl: 'http://someurl.com',
  quantity: 2,
};

it('expect to render a cart-item component', () => {
  const wrapper = shallow(<CartItem item={item} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
