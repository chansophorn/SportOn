//import liraries
import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image, View, TouchableOpacity } from 'react-native';
import {
    Container, Header, Content, Form, Item, Input, Left, Body, Right,
    Label, Text, Button, Icon
} from 'native-base';
// create a component
import { Images } from '@common'

class SignUp extends Component {



    render() {
        const { width, height } = Dimensions.get('window');

        return (

            <Container>
                <Content style={styles.Contentst}>
                    <View style={{ height: 0.25 * height, }}>
                        <View style={{ alignItems: 'center', }}>
                            <Image
                                style={{
                                    width: '100%', height: '100%', resizeMode: 'contain'
                                    ,
                                }}
                                source={{ uri: Images.logoBall }}
                            />

                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View >
                                <Text style={{ color: '#fff', fontSize: 30 }}>Register</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff' }}>Create a new account</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: '5%' }} >


                        <Form style={styles.TextInputstypes}>
                            <Item floatingLabel style={styles.ipt}>
                                <Icon name="md-person" style={styles.iconst} />
                                <Label style={styles.labelst}>Username</Label>
                                <Input style={styles.inpst} />
                            </Item>

                            <Item floatingLabel style={styles.ipt}>
                                <Icon name="ios-mail" style={styles.iconst} />
                                <Label style={styles.labelst}>Email Address</Label>
                                <Input style={styles.inpst} />
                            </Item>
                            <Item floatingLabel style={styles.ipt} >
                                <Icon name="ios-unlock" style={styles.iconst} />
                                <Label style={styles.labelst}>New Password</Label>
                                <Input secureTextEntry={true} style={styles.inpst} />
                            </Item>
                            <Item floatingLabel style={styles.ipt} >
                                <Icon name="ios-unlock" style={styles.iconst} />
                                <Label style={styles.labelst}>Confirm Password</Label>
                                <Input secureTextEntry={true} style={styles.inpst} />
                            </Item>

                        </Form >
                        <Button full info1
                            style={[styles.btn, { backgroundColor: '#4a5ea9' }]}
                        >
                            <Text>Sign Up</Text>
                        </Button>
                        <Button full
                            style={styles.btn}
                        >
                            <Icon name='logo-facebook' />
                            <Text >Or Sign In with facebook</Text>
                        </Button>

                    </View>
                    <View style={{alignItems: 'center', marginTop: '10%', marginBottom: '5%'}}>
                        <View>
                            <Text style={{ color: '#fff' }}>Already have account?</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={{ color: '#fff' }}>Login</Text>
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
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    img: {

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
        marginBottom: 10
    },
    iconst: {
        fontSize: 36,
        color: '#fff',
        marginBottom: 10,
    }
    , labelst: {
        marginLeft: 30,
        color: '#fff',
        fontSize: 18,

    }, inpst: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 20,
    },
});

//make this component available to the app
export default SignUp;




