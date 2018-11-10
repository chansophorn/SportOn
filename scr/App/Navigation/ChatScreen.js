import React, { Component } from 'react';
import { View, Text } from 'react-native';


import {Chat} from '@container'

export default class componentName extends Component {
  

  render() {
    return (
      <Chat
      navigation={this.props.navigation}
      />
    );
  }
}
