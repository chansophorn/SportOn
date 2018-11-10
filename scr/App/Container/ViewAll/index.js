import React, { Component } from 'react';
import { View,  } from 'react-native';
import {SearchBar, ListAllUpcoming} from '@components'
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
            <Title>Up Coming Match</Title>
          </Body>      
        </Header>
            <Content>
                <SearchBar/>
                <ListAllUpcoming 
                
                navigation = {this.props.navigation}
                />

                
            </Content>
        </Container>
     
    );
  }
}
