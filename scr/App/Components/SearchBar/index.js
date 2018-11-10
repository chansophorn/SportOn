import React, { Component } from 'react';
import { Container, Header, 
    Button, 
   Icon, Text,Item,Input } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
    
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
       
       
   
    );
  }
}