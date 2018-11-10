import React, { Component } from 'react';
import { View,  } from 'react-native';
import {SearchBar, AddFriend} from '@components'
import {Container,Content, Header,Button,Left,Right,Body,Icon,Title,Text} from 'native-base'

export default class componentName extends Component {
 
  render() {
    return (
        <Container>
            <Header>
          <Left>
            <Button transparent
            onPress={()=> this.props.navigation.goBack()}
            >
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Find People</Title>
          </Body>      
        </Header>
            <Content>
                <SearchBar/>
                <AddFriend/>
                

                
            </Content>
        </Container>
     
    );
  }
}
