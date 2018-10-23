import Enzyme from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import ExpenseItem from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('ExpenseItem component', () => {
  test('should exist on render', () => {
    const wrapper = Enzyme.shallow(<ExpenseItem />);

    expect(wrapper.exists()).toBe(true);
  });
});
