import React, { Component } from 'react';
import { Container, Icon, Button, Text, View, Content, ListItem, Body, Picker, Form, CheckBox, } from 'native-base'
import { ImageBackground, Dimensions, TextInput, } from 'react-native';

import { Images } from '@common'

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
                    <View style={{ flex: 1, height: 0.345 * height, flexDirection: 'row' }}>
                        <ImageBackground
                            style={{ width: '100%', height: '100%', }}
                            source={{ uri: Images.fieldFootball }}
                        >
                            <Button transparent 
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name='ios-arrow-back' />
                            </Button>
                        </ImageBackground>

                    </View >
                    <View style={{ flex: 1, marginTop: 15, marginLeft: 10 }}>
                        <Text style={{ fontSize: 25, color: '#1d274b' }}>PyeongChang </Text>
                    </View>

                    <View style={{ margin: 5 }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
                            <View style={{ flex: 2, }}>
                                <ListItem>
                                    <CheckBox
                                        onPress={() => this.setState({ hasReferee: !this.state.hasReferee })} checked={this.state.hasReferee} color='green'
                                    />
                                    <Body>
                                        <Text>referee</Text>
                                    </Body>
                                </ListItem>
                            </View>
                            <View style={{ flex: 3, }}>
                                <ListItem>
                                    <CheckBox
                                        onPress={() => this.setState({ hasOpponent: !this.state.hasOpponent })} checked={this.state.hasOpponent} color='green'
                                    />
                                    <Body>
                                        <Text>need opponent</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', marginTop: 15 }}>
                            <Text style={{ fontSize: 20, marginTop: 10 }}>Venue Type</Text>
                            <Form>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select your SIM"
                                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                    style={{ width: undefined }}
                                    onValueChange={this.onValueChange.bind(this)}
                                    selectedValue={this.state.selected}
                                >
                                    <Picker.Item label="Small" value="key0" />
                                    <Picker.Item label="Medium" value="key1" />
                                    <Picker.Item label="Large" value="key2" />
                                    <Picker.Item label="Extra Large" value="key2" />

                                </Picker>
                            </Form>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
                            <View style={{ flex: 1, flexDirection: 'column', }}>
                                <Text style={{ fontSize: 20 }}>Location</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', color: 'black', borderWidth: 1, margin: 5, marginRight: 30 }}
                                    value={'Toul Tok'}
                                    editable={false}
                                    selectTextOnFocus={false}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', }}>
                                <Text style={{ fontSize: 20 }}>Date </Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', color: 'black', borderWidth: 1, margin: 5, marginRight: 30 }}
                                    value={'18/09/2018'}
                                    editable={false}
                                    selectTextOnFocus={false}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
                            <View style={{ flex: 1, flexDirection: 'column', }}>
                                <Text style={{ fontSize: 20 }}>Start Time</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', color: 'black', borderWidth: 1, margin: 5, marginRight: 30 }}
                                    value={'07:30AM'}
                                    editable={false}
                                    selectTextOnFocus={false}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', }}>
                                <Text style={{ fontSize: 20 }}>End Time</Text>
                                <TextInput
                                    style={{
                                        height: 40, borderColor: 'gray',
                                        color: 'black', borderWidth: 1, margin: 5, marginRight: 30
                                    }}
                                    value={'09:00AM'}
                                    editable={false}
                                    selectTextOnFocus={false}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
                            <View style={{ flex: 1, flexDirection: 'column', }}>
                                <Button info full
                                    style={{ margin: 10, borderRadius: 10, marginRight: 25 }}>
                                    <Text> Book Now</Text>
                                </Button>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', }}>
                                <Button danger full
                                    style={{ margin: 10, borderRadius: 10, marginRight: 25 }}
                                >
                                    <Text>Add Wish List </Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Content>

            </Container>
        );
    }
}