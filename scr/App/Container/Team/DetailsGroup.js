
import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Button,  View,} from "native-base";
import { Image, TouchableOpacity } from 'react-native';
import { Images } from '@common'
import {ListFriend} from '@components'

import css from './style'
export default class CardItemBordered extends Component {
  render() {

    
    return (
      <Container>
        <Content >
          <Card>
            <CardItem style={css.cardItem}>
              <View style={css.Viewfelxone}>
                <Image
                  style={css.imglogo}
                  source={{ uri: Images.real }}
                />
                <Button style={css.btnEdit} small bordered success>
                  <Text >join</Text>
                </Button>
              </View>
              <View style={css.Viewfelxtwo}>
                <View style={{ flex: 1, }}>
                  <Text style={css.txtname}>Barcelona</Text>
                </View>
                <View style={css.viewlist}>
                  <View style={css.viewalgnright} >
                    <Text>Team:</Text>
                    <Text>Member:</Text>
                    <Text>Create Date:</Text>
                    <Text>Win:</Text>          
                  </View>
                  <View style={css.Viewfelxone} >
                    <Text>Football</Text>
                    <Text>25/30</Text>
                    <Text>08/09/2018</Text>
                    <Text>9/15</Text>   
                  </View>
                </View>
              </View>
            </CardItem>
            <ListFriend/>
            <ListFriend/>
          </Card>
        </Content>
      </Container>
    );
  }
}

