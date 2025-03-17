/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './Src/screens/Splash/Splash';
import Layout from './Src/components/Layout/Layout';
import Login from './Src/screens/Login';
import Route from './Src/Routes/Route';

AppRegistry.registerComponent(appName, () => Route);
