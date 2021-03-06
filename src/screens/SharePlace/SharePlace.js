import React, {Component} from 'react'
import {View, Text} from 'react-native'
import PlaceInput from '../../components/PlaceInput'
import {connect} from 'react-redux'
import {addPlace } from '../../store/actions/index'

class SharePlaceScreen extends Component {
    constructor(props) {
        super(props)
        // executes when navigation occurs
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }
//toggle the side drawer
    onNavigatorEvent = event => {
       if(event.type ==="NavBarButtonPress"){
           if (event.id === "sideDrawerToggle"){
               this.props.navigator.toggleDrawer({
                   side: "left"
               })
           }
       }
    }

    placeAddedHandler = placeName =>{
        this.props.onAddPlace(placeName)
    }
    render(){
        return(
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen)