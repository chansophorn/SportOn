//import liraries
import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image, View, TouchableOpacity, } from 'react-native';
import { Container, Header, Content, Form, Item,
    Input, Label, Text, Button, Icon, Left, Body, Right } from 'native-base';
// create a component

import { Images } from '@common'

import {StackActions,NavigationActions} from 'react-navigation';

export default class Login extends Component {

    goToHome(){
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'TabMenu' }),
              NavigationActions.navigate({
                routeName: 'TabMenu',
                // params: {
                //   chatRoom: this.params.chatRoom
                // }
              })
            ]
          })
          this.props.navigation.dispatch(resetAction);
    }
    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <Container>
                <Content style={styles.Contentst}>
                    
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
                                  
                                        <Text style={{ color: '#fff' }}>Sign in to connect SportOn</Text>
                               

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
                            <TouchableOpacity>
                                <Text style={{ color: '#fff', alignSelf: 'flex-end', marginRight: 35,marginBottom: 15 }}>Forget Password?</Text>
                            </TouchableOpacity>

                            <Button full info
                                style={styles.btn}
                                onPress={()=> this.goToHome()}
                            >
                    
                                <Text >Sign In </Text>
                            </Button>
                            <Button full
                                style={styles.btn}
                            >
                            <Icon name='logo-facebook'/>
                                <Text >Or Sign In with facebook</Text>
                            </Button>
                        </View>
                        <View style={{ alignItems: 'center',  }} >
                            <View style={{ marginTop: '30%' }}>
                                <Text style={{ color: '#fff' }}>Don't have an account?</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                onPress={()=> this.props.navigation.navigate('SignsUp')}
                                >
                                    <Text
                                        style={{ color: '#fff' }}
                                    >Sign up</Text>
                                </TouchableOpacity>
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
        marginBottom: 10,
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



