import React from 'react';
import { mount } from 'enzyme';
import List from './list';

let list;

beforeEach(() => {
  list = mount(<List />);
});

describe('<List /> Component', () => {
  it('renders a single <ul>', () => {
    expect(list.find('ul').length).toEqual(1);
  });
  it('renders an empty list when not passed items', () => {
    expect(list.find('li').length).toEqual(0);
  });
  it('renders the correct number of children when passed', () => {
    const items = [{
      text: 'text1'
    }, {
      text: 'text2'
    }, {
      text: 'text3'
    }];
    list = mount(<List items={items} />);
    expect(list.find('li').length).toEqual(3);
  });
});
