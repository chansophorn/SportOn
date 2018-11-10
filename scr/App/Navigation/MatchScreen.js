import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {Match} from '@container'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Match
      navigation={
        this.props.navigation
      }
      />
    );
  }
}
