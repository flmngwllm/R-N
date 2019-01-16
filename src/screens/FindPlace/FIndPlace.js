import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import List from '../../components/List';

class FindPlaceScreen extends Component {
    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        })
        //pushing to a new screen when clicked
        this.props.navigator.push({
            screen: "places.PlaceDetailScreen",
            title: selPlace.name,
            passProps: {
                selectPlace: selPlace
            }
        });
    }
    render(){
        return(
            <View>
                <List places ={this.props.places} onSelect ={this.itemSelectedHandler}/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

export default connect(mapStateToProps)(FindPlaceScreen);