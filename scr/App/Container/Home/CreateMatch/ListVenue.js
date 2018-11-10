import React, { Component } from 'react';
import { View, } from 'react-native';
import { SearchBar, ListVenue } from '@components'
import { Container, Content, Header, Button, Left, Right, Body, Icon, Title, Text } from 'native-base'

export default class componentName extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>My Venue</Title>
          </Body>
          <Right >
            <Button transparent
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Icon name='md-home' />
            </Button>
          </Right>
        </Header>
        <Content>
          <SearchBar />
          <ListVenue
            navigation={this.props.navigation}
          />
        </Content>
      </Container>

    );
  }
}
