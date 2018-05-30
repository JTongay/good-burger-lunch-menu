import React, { Component } from 'react';
import { object, arrayOf } from 'prop-types';

import ListItem from './list-item';

export default class List extends Component {

  static propTypes = {
    items: arrayOf(object)
  }

  static defaultProps = {
    items: []
  }

  render() {
    const {
      items
    } = this.props;
    const children = items.map((item, index) => {
      return <ListItem key={index} item={item} />;
    });
    return <ul>{ children }</ul>;
  }
}
