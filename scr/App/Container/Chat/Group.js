import React, { Component } from 'react';
import { View,  } from 'react-native';
import {ListFriend} from '@components';
import {Container,Content} from 'native-base'

export default class componentName extends Component {
 

  render() {
    return (
        <Container>
            <Content>
            <ListFriend
             navigation={this.props.navigation}/>
            </Content>
        </Container>
    
    );
  }
}
