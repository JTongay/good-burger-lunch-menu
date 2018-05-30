import React from 'react';
import { mount } from 'enzyme';

import { SET_DATA } from '../actions';
import {
  Home,
  mapStateToProps,
  mapDispatchToProps
} from './home';

let home;

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() => {
    const p = new Promise((resolve) => { // eslint-disable-line no-undef
      resolve([{
        text: 'Test'
      }]);
    });

    return p;
  })
  Home.getItems = jest.fn();
  home = mount(<Home />);
});

describe('<Home /> Container', () => {
  it('renders a single <div>', () => {
    expect(home.find('div').length).toEqual(1);
  });
  it('renders the Heading', () => {
    expect(home.find('h1').length).toEqual(1);
  });
});

describe('mapStateToProps', () => {
  it('returns data', () => {
    const props = mapStateToProps({ data: [1] });
    expect(props).toEqual({ data: [1] });
  });
});

describe('mapDispatchToProps', () => {
  it('returns setData prop', () => {
    const props = mapDispatchToProps(() => {});
    expect(props.setData).toBeDefined();
  });
  it('should call SET_DATA when calling setData', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).setData([{
      text: 'Test'
    }]);
    expect(dispatch.mock.calls[0][0]).toEqual({
      data: [{
        text: 'Test'
      }],
      type: SET_DATA
    });
  });
});
