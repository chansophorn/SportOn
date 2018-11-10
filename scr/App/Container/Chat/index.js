
import React, { Component } from 'react';
import { Container, Icon, Text,Tab,Tabs, TabHeading ,} from 'native-base';
import Friends from './Friends'
import Group from './Group'
import {SearchBar} from '@components'
export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
         <SearchBar/>
        <Tabs>
          <Tab heading={ <TabHeading>
              <Icon name="md-people" />
              <Text>Friends</Text>
              </TabHeading>}>
            <Friends navigation={this.props.navigation}/>
          </Tab>
          <Tab heading={ <TabHeading>
            <Icon name="ios-people" />
              <Text>Group</Text>
              </TabHeading>}>
            <Group navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}