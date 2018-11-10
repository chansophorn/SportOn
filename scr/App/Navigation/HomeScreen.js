import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {Home} from '@container'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Home
      navigation={
        this.props.navigation
      }
      />
    );
  }
}
