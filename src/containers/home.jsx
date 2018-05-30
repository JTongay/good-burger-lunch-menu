import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, object } from 'prop-types';

import { SET_DATA } from '../actions';
import { Heading, List } from '../components';

export class Home extends Component {

  static propTypes = {
    data: arrayOf(object),
    setData: func
  }

  static defaultProps = {
    data: [],
    setData: () => {}
  }

  async componentDidMount() {
    const data = await this.getData();
    this.props.setData(data);
  }

  async getData() {
    return await fetch('http://localhost:3000/menu').then(res => res.json()).catch(err => ({ err }));
  }

  render() {
    const {
      data
    } = this.props;
    return (
      <div>
        <Heading>test</Heading>
        <List items={data} />
      </div>
    );
  }

}

export const mapStateToProps = (state) => {
  const {
    data
  } = state;
  return {
    data
  };
}

export const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch({
        type: SET_DATA,
        data
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
