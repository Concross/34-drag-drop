import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import CategoryItem from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('CategoryItem component', () => {
  test('should exist on render', () => {
    const wrapper = Enzyme.shallow(<CategoryItem />);

    expect(wrapper.exists()).toBe(true);
  });
});
