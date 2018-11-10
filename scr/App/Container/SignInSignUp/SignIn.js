//import liraries
import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image, View, TouchableHighlight, } from 'react-native';
import { Container, Header, Content, Form, Item,
    Input, Label, Text, Button, Icon, Left, Body, Right } from 'native-base';
// create a component

import { Images } from '@common'



export default class Login extends Component {

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <Container>
                <Content>
                    <View style={styles.Contentst}>
                        <Header style={{ backgroundColor: '#3a5a99', }}>
                            <Left>
                                <Button transparent
                                onPress={()=> this.props.navigation.goBack()}
                                >
                                    <Icon name='ios-arrow-back' />
                                </Button>
                            </Left>
                            <Body /><Right />
                        </Header>
                        <View style={{ height: 0.25 * height, }}>
                            <View style={{ alignItems: 'center', }}>
                                <Image
                                    style={{
                                        width: '80%', height: '92%', resizeMode: 'contain'
                                        ,
                                    }}
                                    source={{ uri: Images.logoBall}}
                                />
                            </View>
                            <View style={{ alignItems: 'center', }}>
                                <View >
                                    <Text style={{ color: '#fff', fontSize: 30 }}>Sign In</Text>
                                </View>
                                <View>
                                    <TouchableHighlight>
                                        <Text style={{ color: '#fff' }}>Sign in with your facebook? click here</Text>
                                    </TouchableHighlight>

                                </View>
                            </View>
                        </View>
                        <View style={{ height: 0.42 * height, marginTop: '4%' }} >

                            <Form style={styles.TextInputstypes}>

                                <Item floatingLabel style={styles.ipt}>
                                    <Icon name="ios-mail" style={styles.iconst} />
                                    <Label style={styles.labelst}>Username</Label>
                                    <Input style={styles.inpst} />
                                </Item>
                                <Item floatingLabel style={styles.ipt} >
                                    <Icon name="ios-key" style={styles.iconst} />
                                    <Label style={styles.labelst}>Password</Label>
                                    <Input secureTextEntry={true} style={styles.inpst} />
                                </Item>

                            </Form >

                            <Button full
                                style={styles.btn}
                                onPress={()=> this.props.navigation.navigate('Home')}
                            >
                                <Text style={{ color: '#fff' }}>Sign In</Text>
                            </Button>
                        </View>
                        <View style={{ alignItems: 'center', height: 0.2 * height, }} >
                            <View style={{ marginTop: '15%' }}>
                                <Text style={{ color: '#fff' }}>Don't have an account?</Text>
                            </View>
                            <View>
                                <TouchableHighlight
                                onPress={()=> this.props.navigation.navigate('SignsUp')}
                                >
                                    <Text
                                        style={{ color: '#fff' }}
                                    >Sign up</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    Contentst: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#3a5a99',
    }
    ,
    TextInputstypes: {
        margin: 30,
    },
    ipt: {
        marginRight: 15,
        marginTop: 15,
        borderBottomColor: '#fff',
    }
    ,
    btn: {
        borderRadius: 15,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#6890fb'
    },
    iconst: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 10,
    }
    , labelst: {
        marginLeft: 30,
        color: '#fff',
        fontSize: 20,
    }, inpst: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 20,
    },
});



