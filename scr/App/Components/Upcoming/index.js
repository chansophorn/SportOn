import React, { Component } from 'react';

import { ImageBackground, TouchableOpacity } from 'react-native'
import { List, ListItem, Text, Card, Thumbnail, Left, Right, Button, Body, View, Icon, Title } from 'native-base';

import { Images } from '@common'

import css from './style'

import { Categrory } from '@action'
import { connect } from 'react-redux'

 class ListDividerExample extends Component {

  componentWillMount() {
    this.props.getAllCategories()
  }
  render() {
    const {categories} = this.props
    //ralert(JSON.stringify(categories))
    return (
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
     
            <Text>S</Text>
            <Text note numberOfLines={1}>The field players can use any part of their body except their hands or arms. ... </Text>
            </Body>
          <View style={css.viewcolum}>
            <Text>08.08.2019</Text>
            <Text>08.00 AM</Text>
          </View>
        </ListItem>
    );
  }
}
function mapStateToProps (state){
  return {
          categories : state.categories.categories,
    
      }
    }
    
function mapDispatchToProps (dispath) {
  return {
          getAllCategories: () =>dispath(Categrory.fetchDataFromAPI())
      }
    }
     
export default connect (mapStateToProps,mapDispatchToProps) (ListDividerExample);