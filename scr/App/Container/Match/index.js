import React, { Component } from 'react';
import {
  Container, Header, Title,
  Content, Button, Left, Right, Body,
  Icon, Text, Item, Input, Card, CardItem, View, Thumbnail
} from 'native-base';
import { searchBar } from '@components'
import { SearchBar } from '../../Components';
import { TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import css from './style'

import { Images } from '@common'
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <Content>

          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('DetailsMatch')}
          >
            <Card style={css.Cardst}>
              <CardItem header>
                <Left>
                  <Text>Toul Tok</Text>
                  <Text note>12/09/2019</Text>
                </Left>   
                <Right>
                  <TouchableOpacity >
                    <Text note>Stop Booking</Text>
                  </TouchableOpacity>
                </Right>

              </CardItem>
              <CardItem style={css.CardItemst}>
                <View style={css.viewclom}>
                  <Thumbnail large style={css.img} square
                    source={{ uri: Images.real }} />
                  <Text>Realmadrid</Text>
                </View>
                <View style={css.viewVs}>
                  <Text style={css.txtVs}>VS</Text>
                  <Text note>08:00 AM</Text>
                </View>
                <View style={css.viewclom}>
                  <Thumbnail large style={css.img} square
                    source={{ uri: Images.manchester }} />
                  <Text>Manchester</Text>
                </View>
              </CardItem>
            </Card>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('DetailsMatch')}
          >
            <Card style={css.Cardst}>
              <CardItem header>
                <Left>
                  <Text>Toul Tok</Text>
                  <Text note>12/09/2019</Text>
                </Left>   
                <Right>
                  <TouchableOpacity >
                    <Text note>Stop Booking</Text>
                  </TouchableOpacity>
                </Right>

              </CardItem>
              <CardItem style={css.CardItemst}>
                <View style={css.viewclom}>
                  <Thumbnail large style={css.img} square
                    source={{ uri: Images.real }} />
                  <Text>Realmadrid</Text>
                </View>
                <View style={css.viewVs}>
                  <Text style={css.txtVs}>VS</Text>
                  <Text note>08:00 AM</Text>
                </View>
                <View style={css.viewclom}>
                  <Thumbnail large style={css.img} square
                    source={{ uri: Images.manchester }} />
                  <Text>Manchester</Text>
                </View>
              </CardItem>
            </Card>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('DetailsMatch')}
          >
            <Card style={css.Cardst}>
              <CardItem header>
                <Left>
                  <Text>Toul Tok</Text>
                  <Text note>12/09/2019</Text>
                </Left>   
                <Right>
                  <TouchableOpacity >
                    <Text note>Stop Booking</Text>
                  </TouchableOpacity>
                </Right>

              </CardItem>
              <CardItem style={css.CardItemst}>
                <View style={css.viewclom}>
                  <Thumbnail large style={css.img} square
                    source={{ uri: Images.real }} />
                  <Text>Realmadrid</Text>
                </View>
                <View style={css.viewVs}>
                  <Text style={css.txtVs}>VS</Text>
                  <Text note>08:00 AM</Text>
                </View>
                <View style={css.viewclom}>
                  <Thumbnail large style={css.img} square
                    source={{ uri: Images.manchester }} />
                  <Text>Manchester</Text>
                </View>
              </CardItem>
            </Card>
          </TouchableWithoutFeedback>


        </Content>

      </Container>
    );
  }
}


