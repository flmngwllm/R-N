/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
// connect react to redux - connected to store then wraps the app component
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'
import App from './App';
import {name as appName} from './app.json';



const store = configureStore()

//wrap app component with provider
const RNRedux = () => (
    // pass store into provider
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
