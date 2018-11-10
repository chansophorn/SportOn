import React, { Component } from 'react';

import { ImageBackground, TouchableOpacity } from 'react-native'
import { List, ListItem, Text, Card, Thumbnail, Left, Right, Button, Body, View, Icon, Title } from 'native-base';

import { Images } from '@common'

import css from './style'
export default class ListDividerExample extends Component {
    render() {
        // const { movie, movie: { poster,title, genre, days, times, }, onOpen } = this.props;
        return (
            <View>
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

                        <Text>Realmadrid vs Manchester</Text>
                        <Text note numberOfLines={1}>The field players can use any part of their body except their hands or arms. ... </Text>
                    </Body>
                    <View style={css.viewcolum}>
                        <Text>08.08.2019</Text>
                        <Text>08.00 AM</Text>
                    </View>
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

                        <Text>Realmadrid vs Manchester</Text>
                        <Text note numberOfLines={1}>The field players can use any part of their body except their hands or arms. ... </Text>
                    </Body>
                    <View style={css.viewcolum}>
                        <Text>08.08.2019</Text>
                        <Text>08.00 AM</Text>
                    </View>
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

                        <Text>Realmadrid vs Manchester</Text>
                        <Text note numberOfLines={1}>The field players can use any part of their body except their hands or arms. ... </Text>
                    </Body>
                    <View style={css.viewcolum}>
                        <Text>08.08.2019</Text>
                        <Text>08.00 AM</Text>
                    </View>
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

                        <Text>Realmadrid vs Manchester</Text>
                        <Text note numberOfLines={1}>The field players can use any part of their body except their hands or arms. ... </Text>
                    </Body>
                    <View style={css.viewcolum}>
                        <Text>08.08.2019</Text>
                        <Text>08.00 AM</Text>
                    </View>
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

                        <Text>Realmadrid vs Manchester</Text>
                        <Text note numberOfLines={1}>The field players can use any part of their body except their hands or arms. ... </Text>
                    </Body>
                    <View style={css.viewcolum}>
                        <Text>08.08.2019</Text>
                        <Text>08.00 AM</Text>
                    </View>
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

                        <Text>Realmadrid vs Manchester</Text>
                        <Text note numberOfLines={1}>The field players can use any part of their body except their hands or arms. ... </Text>
                    </Body>
                    <View style={css.viewcolum}>
                        <Text>08.08.2019</Text>
                        <Text>08.00 AM</Text>
                    </View>
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

                        <Text>Realmadrid vs Manchester</Text>
                        <Text note numberOfLines={1}>The field players can use any part of their body except their hands or arms. ... </Text>
                    </Body>
                    <View style={css.viewcolum}>
                        <Text>08.08.2019</Text>
                        <Text>08.00 AM</Text>
                    </View>
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

                        <Text>Realmadrid vs Manchester</Text>
                        <Text note numberOfLines={1}>The field players can use any part of their body except their hands or arms. ... </Text>
                    </Body>
                    <View style={css.viewcolum}>
                        <Text>08.08.2019</Text>
                        <Text>08.00 AM</Text>
                    </View>
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

                        <Text>Realmadrid vs Manchester</Text>
                        <Text note numberOfLines={1}>The field players can use any part of their body except their hands or arms. ... </Text>
                    </Body>
                    <View style={css.viewcolum}>
                        <Text>08.08.2019</Text>
                        <Text>08.00 AM</Text>
                    </View>
                </ListItem>

            </View>

        );
    }
}