import React, { Component } from 'react';
import { List, ListItem, Text, Button, Icon} from 'native-base';
import { Left, Body, Right, Thumbnail, } from 'native-base';


import {Images} from '@common'
export default class ListDividerExample extends Component {
  render() {
    return (
      
          <List>  
            <ListItem avatar
            // onPress={()=> this.props.navigation.navigate('Profiles')}
            >
              <Left>
                <Thumbnail source={{ uri: Images.profile}}  />
              </Left>
              <Body>
                <Text style={{fontSize: 19, marginTop: 5}}>Kumar Pratik</Text>
                <Text  note>San Francisco. CA</Text>
              
              </Body>
              <Right>
                  <Button light bordered>
                  <Icon ios='ios-person-add' android="md-person-add" style={{fontSize: 30, color: '#05e1d0'}}/>
                  </Button>
                
              </Right>
            </ListItem>
            <ListItem avatar
            // onPress={()=> this.props.navigation.navigate('Profiles')}
            >
              <Left>
                <Thumbnail source={{ uri: Images.profile}}  />
              </Left>
              <Body>
                <Text style={{fontSize: 19, marginTop: 5}}>Kumar Pratik</Text>
                <Text  note>San Francisco. CA</Text>
              
              </Body>
              <Right>
                  <Button light bordered>
                  <Icon ios='ios-person-add' android="md-person-add" style={{fontSize: 30, color: '#05e1d0'}}/>
                  </Button>
                
              </Right>
            </ListItem>
            <ListItem avatar
            // onPress={()=> this.props.navigation.navigate('Profiles')}
            >
              <Left>
                <Thumbnail source={{ uri: Images.profile}}  />
              </Left>
              <Body>
                <Text style={{fontSize: 19, marginTop: 5}}>Kumar Pratik</Text>
                <Text  note>San Francisco. CA</Text>
              
              </Body>
              <Right>
                  <Button light bordered>
                  <Icon ios='ios-person-add' android="md-person-add" style={{fontSize: 30, color: '#05e1d0'}}/>
                  </Button>
                
              </Right>
            </ListItem>
            <ListItem avatar
            // onPress={()=> this.props.navigation.navigate('Profiles')}
            >
              <Left>
                <Thumbnail source={{ uri: Images.profile}}  />
              </Left>
              <Body>
                <Text style={{fontSize: 19, marginTop: 5}}>Kumar Pratik</Text>
                <Text  note>San Francisco. CA</Text>
              
              </Body>
              <Right>
                  <Button light bordered>
                  <Icon ios='ios-person-add' android="md-person-add" style={{fontSize: 30, color: '#05e1d0'}}/>
                  </Button>
                
              </Right>
            </ListItem>
            <ListItem avatar
            // onPress={()=> this.props.navigation.navigate('Profiles')}
            >
              <Left>
                <Thumbnail source={{ uri: Images.profile}}  />
              </Left>
              <Body>
                <Text style={{fontSize: 19, marginTop: 5}}>Kumar Pratik</Text>
                <Text  note>San Francisco. CA</Text>
              
              </Body>
              <Right>
                  <Button light bordered>
                  <Icon ios='ios-person-add' android="md-person-add" style={{fontSize: 30, color: '#05e1d0'}}/>
                  </Button>
                
              </Right>
            </ListItem>
            <ListItem avatar
            // onPress={()=> this.props.navigation.navigate('Profiles')}
            >
              <Left>
                <Thumbnail source={{ uri: Images.profile}}  />
              </Left>
              <Body>
                <Text style={{fontSize: 19, marginTop: 5}}>Kumar Pratik</Text>
                <Text  note>San Francisco. CA</Text>
              
              </Body>
              <Right>
                  <Button light bordered>
                  <Icon ios='ios-person-add' android="md-person-add" style={{fontSize: 30, color: '#05e1d0'}}/>
                  </Button>
                
              </Right>
            </ListItem>
            <ListItem avatar
            // onPress={()=> this.props.navigation.navigate('Profiles')}
            >
              <Left>
                <Thumbnail source={{ uri: Images.profile}}  />
              </Left>
              <Body>
                <Text style={{fontSize: 19, marginTop: 5}}>Kumar Pratik</Text>
                <Text  note>San Francisco. CA</Text>
              
              </Body>
              <Right>
                  <Button light bordered>
                  <Icon ios='ios-person-add' android="md-person-add" style={{fontSize: 30, color: '#05e1d0'}}/>
                  </Button>
                
              </Right>
            </ListItem>
            <ListItem avatar
            // onPress={()=> this.props.navigation.navigate('Profiles')}
            >
              <Left>
                <Thumbnail source={{ uri: Images.profile}}  />
              </Left>
              <Body>
                <Text style={{fontSize: 19, marginTop: 5}}>Kumar Pratik</Text>
                <Text  note>San Francisco. CA</Text>
              
              </Body>
              <Right>
                  <Button light bordered>
                  <Icon ios='ios-person-add' android="md-person-add" style={{fontSize: 30, color: '#05e1d0'}}/>
                  </Button>
                
              </Right>
            </ListItem>
            
            
           
          </List>
        
    );
  }
}