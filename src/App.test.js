import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  it('renders a snapshot with correct data', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
})
