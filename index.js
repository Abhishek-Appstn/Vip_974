/**
 * @format
 */
import 'react-native-url-polyfill/auto'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Route from './src/Routes/Route';

AppRegistry.registerComponent(appName, () => Route);
