import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {Team} from '@container'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Team
      navigation={this.props.navigation}
      />
    );
  }
}
