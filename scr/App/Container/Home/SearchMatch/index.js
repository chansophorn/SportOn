import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Container,Content,} from 'native-base'
import {SearchBar,FindVenue,PickupLocation} from '@components'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
          <Content>
              <SearchBar/>
              <PickupLocation/>
              <FindVenue navigation ={this.props.navigation}/>
          </Content>
      </Container>
    );
  }
}
