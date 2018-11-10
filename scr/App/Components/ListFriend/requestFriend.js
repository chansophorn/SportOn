import React, { Component } from 'react';
import { List, ListItem, Text, Button, View, } from 'native-base';
import { Left, Body, Right, Thumbnail, } from 'native-base';


import { Images } from '@common'
export default class ListDividerExample extends Component {
  render() {
    return (

      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: Images.profile }} />
          </Left>
          <Body>
            <Text>Kumar Pratik</Text>
            <Text note>1h ago</Text>
          </Body>
          <Right>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Button small info style={{marginRight: 5}}><Text>Confirm</Text></Button>
              <Button small danger><Text>Delete</Text></Button>
            </View>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: Images.profile }} />
          </Left>
          <Body>
            <Text>Kumar Pratik</Text>
            <Text note>1h ago</Text>
          </Body>
          <Right>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Button small info style={{marginRight: 5}}><Text>Confirm</Text></Button>
              <Button small danger><Text>Delete</Text></Button>
            </View>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: Images.profile }} />
          </Left>
          <Body>
            <Text>Kumar Pratik</Text>
            <Text note>1h ago</Text>
          </Body>
          <Right>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Button small info style={{marginRight: 5}}><Text>Confirm</Text></Button>
              <Button small danger><Text>Delete</Text></Button>
            </View>
          </Right>
        </ListItem>


      </List>

    );
  }
}