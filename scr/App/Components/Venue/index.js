import React, { Component } from 'react';
import {
    Container, Header, Title, Content, Footer,
    FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input
} from 'native-base';
import { List, ListItem, Thumbnail, } from 'native-base';

import { Images } from '@common'
export default class AnatomyExample extends Component {
    render() {
        return (
            <List>
                <ListItem thumbnail
                onPress={() => this.props.navigation.navigate('VenuesDtail')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball}} />
                    </Left>
                    <Body >
                        <Text>Venue Name</Text>
                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent
                        onPress= {()=> this.props.navigation.navigate('ComfirmsMatch')}                
                        >
                            <Text>Create</Text>
                        </Button>
                    </Right>
                </ListItem>
                <ListItem thumbnail
                 onPress={() => this.props.navigation.navigate('VenuesDtail')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <Text>Venue Name</Text>
                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent
                        onPress= {()=> this.props.navigation.navigate('ComfirmsMatch')}
                        >
                            <Text>Create</Text>
                        </Button>
                    </Right>
                </ListItem>

                <ListItem thumbnail
                onPress={() => this.props.navigation.navigate('VenuesDtail')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <Text>Venue Name</Text>
                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent
                        onPress= {()=> this.props.navigation.navigate('ComfirmsMatch')}
                        >
                            <Text>Create</Text>
                        </Button>
                    </Right>
                </ListItem>

                <ListItem thumbnail
                 onPress={() => this.props.navigation.navigate('VenuesDtail')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <Text>Venue Name</Text>
                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent
                        onPress= {()=> this.props.navigation.navigate('ComfirmsMatch')}
                        >
                            <Text>Create</Text>
                        </Button>
                    </Right>
                </ListItem>
                <ListItem thumbnail
                 onPress={() => this.props.navigation.navigate('VenuesDtail')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <Text>Venue Name</Text>
                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent
                        onPress= {()=> this.props.navigation.navigate('ComfirmsMatch')}
                        >
                            <Text>Create</Text>
                        </Button>
                    </Right>
                </ListItem>
            </List>
        );
    }
}