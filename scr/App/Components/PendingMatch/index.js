import React, { Component } from 'react';

import { ImageBackground, TouchableOpacity } from 'react-native'
import { List, ListItem, Text, Card, Thumbnail, Left, Right, Button, Body, Icon, View } from 'native-base';

import { Images } from '@common'

import css from './style'
export default class ListDividerExample extends Component {
  render() {
    return (
      <View>
       
        <ListItem noIndent >
          <Left>
            <Text style={css.txtdate}>16/08/2019</Text>
          </Left>
        </ListItem>
        <ListItem 
          onPress={() => this.props.navigation.navigate('DetailsMatch')}
        >
            <ImageBackground
              style={css.img}
              square source={{ uri: Images.upcomingMatch }} >
              <TouchableOpacity transparent style={css.btnIcon}>
                <Icon name='ios-star' style={css.iconst} />
              </TouchableOpacity>

            </ImageBackground>
         
          <Body>
            <TouchableOpacity>
              <Text>Barcelona</Text>
            </TouchableOpacity>
            <Text note numberOfLines={1}>07:30 am - 09:00 am</Text>
            <Text note numberOfLines={1}>Toul Tok</Text>
          </Body>
            <Button transparent style={{alignSelf: 'center'}}>
              <Text>join</Text>
            </Button>      
        </ListItem>

        <ListItem 
          onPress={() => this.props.navigation.navigate('DetailsMatch')}
        >
            <ImageBackground
              style={css.img}
              square source={{ uri: Images.upcomingMatch }} >
              <TouchableOpacity transparent style={css.btnIcon}>
                <Icon name='ios-star' style={css.iconst} />
              </TouchableOpacity>

            </ImageBackground>
         
          <Body>
            <TouchableOpacity>
              <Text>Barcelona</Text>
            </TouchableOpacity>
            <Text note numberOfLines={1}>07:30 am - 09:00 am</Text>
            <Text note numberOfLines={1}>Toul Tok</Text>
          </Body>
            <Button transparent style={{alignSelf: 'center'}}>
              <Text>join</Text>
            </Button>      
        </ListItem>

        <ListItem 
          onPress={() => this.props.navigation.navigate('DetailsMatch')}
        >
            <ImageBackground
              style={css.img}
              square source={{ uri: Images.upcomingMatch }} >
              <TouchableOpacity transparent style={css.btnIcon}>
                <Icon name='ios-star' style={css.iconst} />
              </TouchableOpacity>

            </ImageBackground>
         
          <Body>
            <TouchableOpacity>
              <Text>Barcelona</Text>
            </TouchableOpacity>
            <Text note numberOfLines={1}>07:30 am - 09:00 am</Text>
            <Text note numberOfLines={1}>Toul Tok</Text>
          </Body>
            <Button transparent style={{alignSelf: 'center'}}>
              <Text>join</Text>
            </Button>      
        </ListItem>
      
      </View>
    );
  }
}