// @ts-nocheck
/** Libraries */
import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';

/** Components */
import { CheckoutItem } from './checkout-item.component';

let wrapper;

beforeEach(() => {
  const mockProps = {
    item: {
      name: 'Test',
      price: 50,
      quantity: 2,
      imageUrl: 'https://some.com',
    },
    clearItemFromCart: jest.fn(),
    addItem: jest.fn(),
    removeItem: jest.fn(),
  };

  wrapper = shallow(<CheckoutItem {...mockProps} />);
});
describe('Checkout item component', () => {
  it('expects to match a snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
