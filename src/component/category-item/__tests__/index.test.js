import Enzyme from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import CategoryItem from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('CategoryItem component', () => {
  test('should exist on render', () => {
    const category = {
      id: 1,
      timestamp: '10:00',
      title: 'Gas',
      budget: 42,
    };

    const destroy = sinon.fake();

    const wrapper = Enzyme.shallow(<CategoryItem category={category} destroy={destroy} />);

    expect(wrapper.exists()).toBe(true);
  });

  test('handleClick should fire when delete button is clicked', () => {
    const category = {
      id: 1,
      timestamp: '10:00',
      title: 'Gas',
      budget: 42,
    };

    const destroy = sinon.spy();
    const handleClick = sinon.spy(CategoryItem.prototype, 'handleClick');

    const wrapper = Enzyme.shallow(<CategoryItem category={category} destroy={destroy} />);

    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).toBe(true);
  });
});
