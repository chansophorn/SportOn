import React, { Component } from 'react';
import { Button, Text, } from 'native-base';
import {  List, ListItem, Thumbnail, Left, Body, Right, } from 'native-base'
import {Images} from '@common'
import css from './style'
export default class SearchBarExample extends Component {
  render() {
    return (
          <List>
            <ListItem thumbnail
            onPress={()=> this.props.navigation.navigate('DetailsGroup')}
            >
              <Left>
                <Thumbnail large style={css.img} square 
                source={{uri: Images.real}} />
              </Left>
              <Body>
                <Text>Realmadrid</Text>
                <Text note numberOfLines={1}>Team:  Football</Text>
                <Text note numberOfLines={1}>Member:  22/15</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Join</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail large style={css.img} square 
                source={{uri: Images.real}} />
              </Left>
              <Body>
                <Text>Realmadrid</Text>
                <Text note numberOfLines={1}>Team:  Football</Text>
                <Text note numberOfLines={1}>Member:  22/15</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Join</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail large style={css.img} square 
                source={{uri: Images.real}} />
              </Left>
              <Body>
                <Text>Realmadrid</Text>
                <Text note numberOfLines={1}>Team:  Football</Text>
                <Text note numberOfLines={1}>Member:  22/15</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Join</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail large style={css.img} square 
                source={{uri: Images.real}} />
              </Left>
              <Body>
                <Text>Realmadrid</Text>
                <Text note numberOfLines={1}>Team:  Football</Text>
                <Text note numberOfLines={1}>Member:  22/15</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Join</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail large style={css.img} square 
                source={{uri: Images.real}} />
              </Left>
              <Body>
                <Text>Realmadrid</Text>
                <Text note numberOfLines={1}>Team:  Football</Text>
                <Text note numberOfLines={1}>Member:  22/15</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Join</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail large style={css.img} square 
                source={{uri: Images.real}} />
              </Left>
              <Body>
                <Text>Realmadrid</Text>
                <Text note numberOfLines={1}>Team:  Football</Text>
                <Text note numberOfLines={1}>Member:  22/15</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Join</Text>
                </Button>
              </Right>
            </ListItem>

          </List>
    );        
  }
}