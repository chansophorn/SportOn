import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { PickupLocation, DatePicker, TimePicker } from '@components'
import { Container, Content, Button, Icon, Text, } from 'native-base'
import { Images } from '@common'
import css from '../style'
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
                    <View style={css.Container}>
                        <ImageBackground
                            style={css.imgBannerDetail}
                            source={{ uri: Images.searchbanner }}
                        >
                            <Button transparent light
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name='ios-arrow-back' />
                            </Button>
                        </ImageBackground>
                    </View >
                    <PickupLocation />
                    <DatePicker />
                    <TimePicker />
                    <Button full success
                        style={css.btn}
                        onPress={()=> this.props.navigation.navigate('ListsVenue')}
                    >
                        <Text>Search</Text>
                    </Button>

                </Content>
            </Container>


        );
    }
}
