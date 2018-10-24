import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { DashboardContainer } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('DashboardContainer component', () => {
  test('should exist when rendered', () => {
    const actions = {
      categoryCreate: sinon.fake(),
    };

    const wrapper = Enzyme.shallow(<DashboardContainer categories={[]} actions={actions} />);

    expect(wrapper.exists()).toBe(true);
  });
});
