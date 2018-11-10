import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Images } from '@common'

import { Thumbnail, Container, Content, Button, Text, Icon, List, ListItem, Left, Body } from 'native-base'

import css from './style'
import PhotoUpload from 'react-native-photo-upload'

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <ImageBackground
                            style={css.coverst}
                            source={{ uri: Images.coverAcc }}

                        >
                            <View>
                                <Button transparent
                                    onPress={() => this.props.navigation.goBack()}
                                >
                                    <Icon name='ios-arrow-back' />
                                </Button>

                            </View>
                            < PhotoUpload                              
                            >
                                <Image
                                    style={css.imgprofile}
                                    resizeMode='cover'
                                    source={{
                                        uri: Images.profile
                                    }}

                                />
                            </PhotoUpload>
                        </ImageBackground>
                    </View>
                    <Text style={css.txtUsername}>
                        Kumar Pratik
                    </Text>
                    <Text note style={css.description}>
                        Grapic Designer
                    </Text>
                    <Button small warning style={{alignSelf: 'center',marginTop: 10}}>
                      <Text>Edit infomation</Text>
                      
                    </Button>
                 
                        
                    
                    <View style={css.btnView}>
                        <View style={css.frimatch}>
                            <TouchableOpacity>
                                <Text>Friends</Text>
                            </TouchableOpacity>
                            <Text note>300</Text>
                        </View>
                        <View style={css.frimatch}>
                            <TouchableOpacity>
                                <Text>Group</Text>
                            </TouchableOpacity>
                            <Text note>Manchester</Text>
                        </View>
                    </View>
                    <List>
                        <ListItem >
                            <Icon active name="md-call" style={css.iconst} />

                            <Text>Mobile :</Text>
                            <Body>
                                <Text>(+855)969690989</Text>
                            </Body>
                        </ListItem>
                        <ListItem >
                            <Icon active name="md-mail" style={css.iconst} />
                            <Text>Email :</Text>
                            <Body>
                                <Text>test@gmail.com</Text>
                            </Body>
                        </ListItem>
                        <ListItem >
                            <Icon active name="md-home" style={css.iconst} />

                            <Text>Address :</Text>
                            <Body>
                                <Text>Jamaica, Caribbean</Text>
                            </Body>

                        </ListItem>

                    </List>

                   

                  

                </Content>
            </Container>

        );
    }
}
