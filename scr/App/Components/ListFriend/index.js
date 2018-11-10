import React, { Component } from 'react';
import { List, ListItem, Text, } from 'native-base';
import { Left, Body, Right, Thumbnail, } from 'native-base';
import { TouchableOpacity } from 'react-native'

import { Images } from '@common'
export default class ListDividerExample extends Component {
  render() {
    return (

      <List>
        <ListItem avatar

        >
          <Left>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profiles')}>
              <Thumbnail source={{ uri: Images.profile }}

              />
            </TouchableOpacity>

          </Left>
          <Body>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profiles')}
            >
            <Text>Kumar Pratik</Text>
            </TouchableOpacity>
            
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>1h ago</Text>
          </Right>
        </ListItem>

      </List>

    );
  }
}