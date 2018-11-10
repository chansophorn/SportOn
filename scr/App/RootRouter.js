import React, { Component } from 'react';
import { View, Text } from 'react-native';
import configureStores from './utils/configureStores'
import { Provider } from 'react-redux'
import TabNavigation from "@navigation";
import { apiMiddleware, reducer } from './Redux/actions';
import { createStore, applyMiddleware } from 'redux';
import SplashScreen from 'react-native-splash-screen';
import {Action,Reducers} from '@redux'

// const store = createStore(Reducers, {}, applyMiddleware(Action));
let store = configureStores()

state = {
  isLoggedIn: false
}


class App extends Component {
  componentDidMount() {

    SplashScreen.hide();
  }
  render() {
    
    return (
      <Provider store={store}>
        <TabNavigation />
      </Provider>

    );
  }
}

export default App;
