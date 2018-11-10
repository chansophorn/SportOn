import React, { Component } from 'react';
import { View, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Button, Text, Card, ListItem, Left, Body, Right } from 'native-base'


import { Slider, Upcoming, PendingMatch } from '@components'
import css from './style'
// import { movies } from '@services/Home';

import OneSignal from 'react-native-onesignal';
import {SignIn} from '@container'

export default class componentName extends Component {
  


 
  openMovie = (movie) => {
    this.setState({
      popupIsOpen: true,
      movie,
    });
  }

  render() {
    const { categories } = this.props;
    
    return (
      <Container>
        <Content>
          <View style={css.Container}>
            <Slider />
          </View>
          <View style={css.viewrow}>
            <View style={css.btnalignright}>
              <Button info
                onPress={() => this.props.navigation.navigate('FindsMatch')}
              >
                <Text>Search Match</Text>
              </Button>
            </View>
            <View style={css.btnalignright}>
              <Button info
                onPress={() => this.props.navigation.navigate('SearchsMatch')}              >
                <Text>Create Match</Text>
              </Button>
            </View>
          </View>
    
            <ListItem itemDivider>

              <Left>
                <Text style={css.txtTitle}>UpComing Match</Text>
              </Left>
              <Body />
              <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('ViewsAll')}
              >
                <Text style={css.txtviewall}>Veiw All</Text>
              </TouchableOpacity>
            </ListItem>
            <Upcoming navigation={this.props.navigation} />
            <ListItem itemDivider>

              <Left>
                <Text style={css.txtTitle}>Pending Match</Text>
              </Left>
              <Body />
              <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('ViewAllspending')}
              >
                <Text style={css.txtviewall}>Veiw All</Text>
              </TouchableOpacity>
            </ListItem>
            <PendingMatch navigation={this.props.navigation} />
        </Content>
      </Container>
        );
      }
      
    }


