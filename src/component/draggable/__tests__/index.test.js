import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Draggable from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('DashboardContainer component', () => {
  test('should exist when rendered', () => {
    const wrapper = Enzyme.shallow(<Draggable />);

    expect(wrapper.exists()).toBe(true);
  });
});
