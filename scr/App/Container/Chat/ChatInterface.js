import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Title, Icon, Button } from 'native-base'

import { GiftedChat } from 'react-native-gifted-chat'
import { Images } from '@common'
import OptionsMenu from "react-native-options-menu";

export default class Example extends React.Component {
    state = {
        messages: [],
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Kumar Partik',
                        avatar: Images.profile,
                    },
                },
            ],

        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        const setting = (<Icon style={{ color: '#464545', }} name='md-settings' />)
        return (
            <Container>
                <Header style={{ backgroundColor: '#e4e3e3', }}>
                    <Left>
                        <Button transparent l
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon style={{ color: '#464545', }} name='ios-arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#464545', }}>Kumar Partik</Title>
                    </Body>
                    <Right>
                        

                        <OptionsMenu
                            // buttonStyle={{ width: 32, height: 20, margin: 20, resizeMode: "contain" }}
                            customButton={setting}
                            destructiveIndex={1}
                            options={["Add","Edit", "Delete", "Cancel"]}
                             actions={[]}
                            
                        />
                    </Right>
                </Header>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </Container>
        )
    }
}
