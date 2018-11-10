/** @format */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import RootRouter from './scr/App/RootRouter'
AppRegistry.registerComponent(appName, () => RootRouter);
