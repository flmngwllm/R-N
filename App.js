/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput'
import List from './src/components/List'

export default class App extends Component {
  state = {
     places:[]
   }
  



  placeAddedHandler = (placeName) =>{
    

    this.setState(prevState => {
      return{
        places: prevState.places.concat(placeName)
      }
    })
  }
  
    render() {
      
      return (
        <View style={styles.container}>
       <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
         <List places={this.state.places}/>
        </View>
      );
    }
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
