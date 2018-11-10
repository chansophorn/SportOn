import React, { Component } from 'react';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, StackNavigator } from 'react-navigation';

import { Colors } from '@common'

import HomeScreen from './HomeScreen'
import MatchScreen from './MatchScreen'
import TeamScreen from './TeamScreen'
import ChatScreen from './ChatScreen'
import AccountScreen from './AccountScreen'

import { DetailMatch, 
  SearchMatch,ListVenue,
  ComfirmMatch,
  VenueDtail,
  SignIn,
  SignUp,
  FindMatch,
  DetailGroup,
  ViewAll,
  ViewAllpending,
  Profile,
  ListAddFriend,
  ChatInterface, MyAccount
 } from '@container';



const HomeStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    FindsMatch: {
      screen: FindMatch
    }
    
  }, {
    headerMode: 'none'
  }
);

const MatchStackNavigator = createStackNavigator(
  {
    Match: MatchScreen,
    
  }, {
    headerMode: 'none'
  }
);

const TeamStackNavigator = createStackNavigator(
  {
    Team: TeamScreen,
    DetailsGroup: {
      screen: DetailGroup
    }
  }, {
    headerMode: 'none'
  }
);


const ChatStackNavigator = createStackNavigator(
  {
    Chat: ChatScreen
  }, {
    headerMode: 'none'
  }
);

const AccountStackNavigator = createStackNavigator(
  {
    Me: AccountScreen
  }, {
    headerMode: 'none'
  }
);

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Match: MatchStackNavigator,
    Team: TeamStackNavigator,
    Chat: ChatStackNavigator,
    Me: AccountStackNavigator,
  },
  {

    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Match') {
          iconName = 'soccer-ball-o';
        } else if (routeName === 'Team') {
          iconName = 'group';
        } else if (routeName === 'Chat') {
          iconName = 'wechat';
        } else if (routeName === 'Me') {
          iconName = 'user-circle-o';
        }
        return <IconFontAwesome name={iconName} size={21} color={Colors.iconNavigation} />;
      },
    }),
    initialRouteName: 'Home',
    activeTintColor: Colors.iconNavigation,
    inactiveTintColor: Colors.inactiveTintNavigation,
    barStyle: { backgroundColor: Colors.backgroundNavigation },
  }
  ,
)



const AppRoute = StackNavigator(
  {
    TabMenu: TabNavigator,
    SearchsMatch: {
      screen: SearchMatch
    },
    ListsVenue: {
      screen: ListVenue
    },ComfirmsMatch: {
      screen: ComfirmMatch
    },VenuesDtail: {
      screen: VenueDtail
    },DetailsMatch: {
      screen: DetailMatch
    },SignsIn: {
      screen: SignIn
    },SignsUp: {
      screen: SignUp
    },ViewsAll: {
      screen: ViewAll
    },ViewAllspending: {
      screen: ViewAllpending
    },
    Profiles: {
      screen: Profile
    },
    ListAddFriends: {
      screen: ListAddFriend
    },ChatsInterface: {
      screen: ChatInterface
    }, MyAccounts : {
      screen: MyAccount
    }
    
    
  },
  {
    initialRouteName: 'SignsIn',
    mode: 'modal',
    headerMode: 'none',
  }
)

export default AppRoute;