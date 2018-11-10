import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {Account} from '@container'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Account
      navigation={this.props.navigation}
      />
    );
  }
}
