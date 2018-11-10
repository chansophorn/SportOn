import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, View } from 'native-base';
import css from './style'
import { TouchableWithoutFeedback } from 'react-native'
export default class CardListExample extends Component {
    render() {
        return (
            <View>
                <Card>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('MyAccounts')}>
                        <CardItem>
                            <Icon active name="md-person" style={css.iconst} />
                            <Text>Account</Text>
                        </CardItem>
                    </TouchableWithoutFeedback>

                    <CardItem>
                        <Icon active name="md-star" style={css.iconst} />
                        <Text>WishList</Text>
                    </CardItem>

                </Card>
                <Card>
                    <CardItem>
                        <Icon active name="ios-heart" style={css.iconst} />
                        <Text>Favorite</Text>
                    </CardItem>
                    <CardItem>
                        <Icon active name="ios-time" style={css.iconst} />
                        <Text>History</Text>
                    </CardItem>
                    <CardItem>
                        <Icon active name="md-notifications" style={css.iconst} />
                        <Text>Notifications</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Icon active name="md-settings" style={css.iconst} />
                        <Text>Setting</Text>
                    </CardItem>
                    <CardItem>
                        <Icon active name="ios-help-circle" style={css.iconst} />
                        <Text>Help Center</Text>
                    </CardItem>
                    <CardItem>
                        <Icon active name="ios-alert" style={css.iconst} />
                        <Text>About me</Text>
                    </CardItem>
                    <CardItem>
                        <Icon active name="md-log-out" style={css.iconst} />
                        <Text>Logout</Text>
                    </CardItem>
                </Card>

            </View>
        );
    }
}