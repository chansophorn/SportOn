import React, { Component } from 'react';
import { Container, Icon, Button, Text, View, Content } from 'native-base';
import { Thumbnail, } from 'native-base'
import {  ImageBackground, } from 'react-native';
import { Images } from '@common'
import { MapLocation } from '@components'
import css from './style'
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


        return (
            <Container>
                <Content >
                    <View style={css.viewdetail}>
                        <ImageBackground
                            style={css.imgBannerDetail}
                            source={{ uri: Images.bannerDetailMatch }}
                        >
                            <Button transparent light
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name='ios-arrow-back' />
                            </Button>
                        </ImageBackground>
                    </View >
                    <View style={css.viewcontent}>
                        <Text style={css.txtTitle}>Football</Text>
                    </View>
                    <View style={css.viewcontent}>
                        <Text>
                            All aspriring runners can join our weekly wake up
                            run in kreuzbarg and get fit and healthy.
                            </Text>
                        <Text style={css.txtmore}>see more</Text>
                    </View>
                    <View style={css.viewbtn}>
                        <View style={css.viewbtnflex}>
                            <Button iconLeft
                                style={css.btnjoin}>
                                <Icon name='ios-checkmark-circle' />
                                <Text>join</Text>
                            </Button>
                        </View>
                        <View style={css.viewbtnflex}>
                            <Button iconLeft style={css.btninvite}>
                                <Icon name='md-person' />
                                <Text>invite</Text>
                            </Button>
                        </View>
                        <View style={css.viewbtnflex}>
                            <Button iconLeft
                                style={css.btnchat}>
                                <Icon name='ios-chatboxes' />
                                <Text>Chat</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={css.viewbtn}>
                        <View style={css.viewDate}>
                            <Text style={css.txtDate}>Date:</Text>
                            <Text > 25/05/2019</Text>
                        </View>
                        <View style={css.viewDate}>
                            <Text style={css.txtDate}>Time:  </Text>
                            <Text > 09:30 - 11:00</Text>
                        </View>
                    </View>
                    <View style={css.viewMap}>
                        <MapLocation />
                    </View >
                    <View style={css.viewbottom}>
                        <View style={css.viewCreateBy}>
                            <Thumbnail small style={css.Thumbail}
                                source={{ uri: Images.profile }} />
                            <Text>Create by chan thida</Text>
                        </View>
                        <View >
                            <Button iconLeft small
                                style={css.btnmember}>
                                <Icon name='md-people' />
                                <Text>(15/20)</Text>
                            </Button>
                        </View>
                    </View>
                </Content>

            </Container>
        );
    }
}