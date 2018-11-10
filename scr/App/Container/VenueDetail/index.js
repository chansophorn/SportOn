import React, { Component } from 'react';
import { Container,  Icon, Button, Text, View, Content,Thumbnail} from 'native-base'
import { ImageBackground, Image, Dimensions,  } from 'react-native';
import {Images} from '@common'
import {MapLocation } from '@components'
export default class SearchBarExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1"
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    render() {
        const { width, height } = Dimensions.get('window');

        return (
            <Container>

                <Content style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, height: 0.30 * height, flexDirection: 'row' }}>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <ImageBackground
                                style={{ width: '99%', height: '99%', }}
                                source={{uri: Images.fieldFootball}}
                            >
                            <Button transparent 
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name='ios-arrow-back' />
                            </Button>
                            </ImageBackground>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: '98%', height: '98%', }}
                                        source={{uri: Images.fieldFootball}}
                                    />

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: '98%', height: '98%', }}
                                        source={{uri: Images.fieldFootball}}
                                    />

                                </View>

                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: '98%', height: '98%', }}
                                        source={{uri: Images.fieldFootball}}
                                    />

                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: '98%', height: '98%', }}
                                        source={{uri: Images.fieldFootball}}
                                    />

                                </View>

                            </View>
                        </View>
                    </View >
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: '#eaac04', fontSize: 25. }}>Venue name</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', margin: 15 }}>

                        <View style={{ flex: 3, flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>

                            <Text>The ground was designed by Vann Molyvann in 1962 and after a year it was already opened to public.
                                The repid construction processibl thanks to majority of the stands being raised in an artificial bowl.
                                It took some 500,000 cubic meters of excavation for it to take shape
                                All aspriring runners can join our weekly wake up run in kreuzbarg and get fit and healthy. </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', marginTop: 30 }}>

                            <Text style={{ color: '#053eb1', }}>Location</Text>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', marginTop: 15 }}>

                            <Text style={{  }}>st. 1955, sk Phnom Penh Thmey Khan Sen Sok, Phnom Penh</Text>

                        </View>
                    </View>
                 
                    <View style={{ flex: 1, height: 0.26 * height, flexDirection: 'row' }}>
                        <MapLocation/>
                    </View >

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 20, margin: 15 }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Thumbnail small style={{ alignSelf: 'center', marginRight: 20 }}
                                source={{uri: Images.profile}}/>
                            <Text>owner shop</Text>

                        </View>
                        <View >
                            <Button iconLeft small
                                style={{ backgroundColor: '#108275', alignSelf: 'flex-end', marginTop: 10 }}>
                                <Icon name='md-people' />
                                <Text>Connect</Text>
                            </Button>
                        </View>
                    </View>
                </Content>

            </Container>
        );
    }
}