import React from "react";
import metadata from './index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  it('should return the initial state', () => {
    expect(metadata(undefined, {})).toEqual({})
  })
});
