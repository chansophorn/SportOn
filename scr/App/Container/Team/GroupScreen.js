import React, { Component } from 'react';
import { Container, Icon, Button, Text, View, Content } from 'native-base';

import {ListTeam } from '@components'

import css from './style'
export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
        
        <Content style={css.contentst}>
          <View style={css.viewst}>  
          <Button bordered iconLeft  style={css.btn}>
            <Icon name='ios-search' />
            <Text>search</Text>
          </Button>
          <Button bordered iconLeft style={css.btn}>
            <Icon name='ios-refresh' />
            <Text>Refresh</Text>
          </Button>
          <Button  bordered iconLeft style={css.btn}>
            <Icon name='ios-add' />
            <Text>Invite</Text>
          </Button>  
          </View>
          <ListTeam navigation ={this.props.navigation}/>

        </Content>
      </Container>
    );
  }
}