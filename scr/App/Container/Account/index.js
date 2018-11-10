

import React, { Component } from 'react';
import { View, Image } from 'react-native';
import css from './style'
import { Container, Header, Content, Button, Text } from 'native-base';
import { ListItemAcc } from '@components'

import { Images } from '@common'
export default class componentName extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <View style={css.container}>
                        <View style={css.bannerst}>
                            <Image
                                style={{ width: 100, height: 100, borderRadius: 100,marginLeft: 20 }}
                                resizeMode='cover'
                                source={{
                                    uri: Images.profile
                                }}

                            />
                            <View style={{marginLeft: 50}}>
                                <Text style={{color: '#fff', fontSize: 28}}> Kumar Partik</Text>
                                <Text style={{color: '#fff', }}> KumarPartik@gmail.com</Text>
                            </View>


                        </View>
                        <View>
                            <ListItemAcc 
                            navigation= {this.props.navigation}
                            />
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
