import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropZone from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('DashboardContainer component', () => {
  test('should exist when rendered', () => {
    const wrapper = Enzyme.shallow(<DropZone />);

    expect(wrapper.exists()).toBe(true);
  });
});
