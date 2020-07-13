import React from "react";
import filter from './index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  it('should return the initial state', () => {
    expect(filter(undefined, {})).toEqual(
        {
        type: "order-select",
        items: [{
          label: "Release Date",
          valueToOrderBy: "releaseDate"
        }, {
          label: "Rank",
          valueToOrderBy: "rank"
        }]
      })
  })
});
