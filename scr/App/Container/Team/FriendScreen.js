import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ListFriend, RequestFriend } from '@components'
import { Container, Content, ListItem, Body, Right } from 'native-base'

import css from './style'

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
          <ListItem itemDivider>
            <Text>Friend Requests</Text>
          </ListItem>
          <RequestFriend />
          <ListItem itemDivider>
            <Text>Friends</Text>
            <Body />
            <Right>
              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('ListAddFriends')}
              >
                <Text style={css.txtAdd}>Add</Text>
              </TouchableOpacity>

            </Right>
          </ListItem>
          <ListFriend
            navigation={this.props.navigation}
          />
        </Content>
      </Container>
    );
  }
}
