import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ExpenseForm from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('ExpenseForm component', () => {
  test('should exist on render', () => {
    const wrapper = Enzyme.shallow(<ExpenseForm />);

    expect(wrapper.exists()).toBe(true);
  });
});
