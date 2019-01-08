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
import placeImage from './src/assets/IMG_81411.jpg'
import PlaceDetail from './src/components/PlaceDetail'
import {connect} from 'react-redux'
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'


 class App extends Component {
   

  placeAddedHandler = placeName =>{
    this.props.onAddPlace(placeName)
    
  }

  // placeDeleteHandler = key => {
  //   this.setState(prevState =>{
  //     return{
  //       places: prevState.places.filter(place => {
  //         return place.key !== key
  //       })
  //     }
  //   })
  // }

  //function for deleting
placeDeleteHandler = ()=>{
  this.props.onDeletePlace();
}

//function for closing modal
modalCloseHandler = () => {
this.props.onDeselectPlace()
}


  placeSelectHandler = key => {
   this.props.onSelectPlace(key)
  }
  
    render() {
      
      return (
        <View style={styles.container}>

        <PlaceDetail 
        selectPlace={this.props.selectPlace} 
        onDelete={this.placeDeleteHandler} 
        onModalClose={this.modalCloseHandler}/>

       <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
         <List 
         places={this.props.places} 
        //  onDelete = {this.placeDeleteHandler}/>
        onSelect = {this.placeSelectHandler}/>
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

// receives the state
const mapStateToProps = state => {
  //return object to map keys to access props
  return {
    
    //access slice of state from configureStore then another places call to reach out to places property in our state
    places: state.places.places,
    selectPlace: state.places.selectPlace
  }
}

//
const mapDispatchToProps = dispatch => {
  return {
    //dispatch an action
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())

  }
}

//function to pass app to create connection from app compoent to redux store
export default connect(mapStateToProps, mapDispatchToProps)(App)