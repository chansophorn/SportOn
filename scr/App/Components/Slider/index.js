import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ImageSlider from 'react-native-image-slider';

import { Images } from '@common'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageSlider
        autoPlayWithInterval={5000}
        images={Images.imgSlider}
      />
    );
  }
}
