/** @format */
import {AppRegistry} from 'react-native';
// connect react to redux - connected to store then wraps the app component
import App from './App';
import {name as appName} from './app.json';




AppRegistry.registerComponent(appName, () => App);
