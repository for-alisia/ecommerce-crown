// @ts-nocheck
/** Libraries */
import { mount } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';

/** Components */
import { CustomButton } from './custom-button.component';

describe('Custom button component', () => {
  const wrapper = mount(<CustomButton />);

  it('expects to match a snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
