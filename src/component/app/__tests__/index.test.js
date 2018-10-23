import Enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  test('should exist on render', () => {
    const wrapper = Enzyme.shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
