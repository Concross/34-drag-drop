import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import CategoryForm from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('CategoryForm component', () => {
  test('should exist on render', () => {
    const wrapper = Enzyme.shallow(<CategoryForm />);

    expect(wrapper.exists()).toBe(true);
  });
});
