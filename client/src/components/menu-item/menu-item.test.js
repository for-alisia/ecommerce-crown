// @ts-nocheck

/** Libraries */
import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

/** Components */
import { MenuItemContainer } from './menu-item.styles';

describe('Custom button component', () => {
  const wrapper = shallow(<MenuItemContainer />);

  it('expects to match a snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
