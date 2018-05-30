import React, { Component } from 'react';
import { object } from 'prop-types';

export default class ListItem extends Component {

  static propTypes = {
    item: object
  };

  render() {
    const {
      item
    } = this.props;
    return <li>{item.text}</li>;
  }
}
