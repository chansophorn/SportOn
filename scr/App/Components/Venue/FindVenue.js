import React, { Component } from 'react';
import {
    Container, Header, Title, Content, Footer,
    FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input
} from 'native-base';
import { List, ListItem, Thumbnail, } from 'native-base';
import { TouchableOpacity } from 'react-native'
import { Images } from '@common'
export default class AnatomyExample extends Component {
    render() {
        return (
            <List>
                <ListItem thumbnail
                    onPress={() => this.props.navigation.navigate('DetailsMatch')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('VenuesDtail')}
                        >
                            <Text>Venue Name</Text>
                        </TouchableOpacity>

                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent

                        >
                            <Text>join</Text>
                        </Button>
                    </Right>
                </ListItem>
                <ListItem thumbnail
                    onPress={() => this.props.navigation.navigate('DetailsMatch')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('VenuesDtail')}
                        >
                            <Text>Venue Name</Text>
                        </TouchableOpacity>

                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent

                        >
                            <Text>join</Text>
                        </Button>
                    </Right>
                </ListItem>
                <ListItem thumbnail
                    onPress={() => this.props.navigation.navigate('DetailsMatch')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('VenuesDtail')}
                        >
                            <Text>Venue Name</Text>
                        </TouchableOpacity>

                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent

                        >
                            <Text>join</Text>
                        </Button>
                    </Right>
                </ListItem>
                <ListItem thumbnail
                    onPress={() => this.props.navigation.navigate('DetailsMatch')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('VenuesDtail')}
                        >
                            <Text>Venue Name</Text>
                        </TouchableOpacity>

                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent

                        >
                            <Text>join</Text>
                        </Button>
                    </Right>
                </ListItem>
                <ListItem thumbnail
                    onPress={() => this.props.navigation.navigate('DetailsMatch')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('VenuesDtail')}
                        >
                            <Text>Venue Name</Text>
                        </TouchableOpacity>

                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent

                        >
                            <Text>join</Text>
                        </Button>
                    </Right>
                </ListItem>
                <ListItem thumbnail
                    onPress={() => this.props.navigation.navigate('DetailsMatch')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('VenuesDtail')}
                        >
                            <Text>Venue Name</Text>
                        </TouchableOpacity>

                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent

                        >
                            <Text>join</Text>
                        </Button>
                    </Right>
                </ListItem>
                <ListItem thumbnail
                    onPress={() => this.props.navigation.navigate('DetailsMatch')}
                >
                    <Left>
                        <Thumbnail square large
                            source={{ uri: Images.fieldFootball }} />
                    </Left>
                    <Body >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('VenuesDtail')}
                        >
                            <Text>Venue Name</Text>
                        </TouchableOpacity>

                        <Text note>N33Z, street 101, Sangkat AAA, Khan EEE, Phnom Penh...</Text>
                    </Body>
                    <Right>
                        <Button transparent

                        >
                            <Text>join</Text>
                        </Button>
                    </Right>
                </ListItem>





            </List>
        );
    }
}