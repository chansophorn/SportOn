import React, { Component } from 'react';

import { Container, Header, Tab, Tabs, TabHeading,  Text,Title } from 'native-base';

import Friend from './FriendScreen';
import Group from './GroupScreen';
import TeamHome from './TeamHome';

export default class componentName extends Component {

  render() {
    return (
      <Container>
        <Header >
          <Title style={{alignSelf: 'center'}}>Social</Title>
        </Header>

        <Tabs>
          <Tab heading={<TabHeading><Text>Friend</Text></TabHeading>}>
            <Friend navigation={this.props.navigation}/>
          </Tab>

          <Tab heading={<TabHeading><Text>Other Team</Text></TabHeading>}>
            <Group navigation={this.props.navigation}/>
          </Tab>

          <Tab heading={<TabHeading><Text>Team</Text></TabHeading>}>
            <TeamHome navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
