import React from 'react';
import { mount } from 'enzyme';
import ListItem from './list-item';

let listItem;

beforeEach(() => {
  listItem = mount(<ListItem item={{ text: 'Test' }} />);
});

describe('<List /> Component', () => {
  it('renders a single <ul>', () => {
    expect(listItem.find('li').length).toEqual(1);
  });
  it('renders the correct text', () => {
    expect(listItem.text()).toEqual('Test');
  });
});
