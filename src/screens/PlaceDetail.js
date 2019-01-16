import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import {deletePlace} from '../store/actions/index'

class PlaceDetail extends Component {
    placeDeletedHandler = () => {
        this.props.onDelete(this.props.selectPlace.key)
        // removes current page from the stack
        this.props.navigator.pop()
    }
    render(){
        return (
            <View style ={styles.container}>
        
        <View>
            {/* <Button title="Delete" color="red" onPress={props.onDelete}/> */}
            <Image source ={this.props.selectPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{this.props.selectPlace.name}</Text>
        </View>

        <View>
            <TouchableOpacity onPress={this.placeDeletedHandler}>
                <View style={styles.deleteButton}>
            <Icon size={30} name="ios-trash" color="red"/>
            </View>
            </TouchableOpacity>
        </View>
    </View>
        )
    }
} 

const styles = StyleSheet.create({
    container:{
        margin: 22
    },
    placeImage:{
        width: "100%",
        height: 200
    },

    placeName:{
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton:{
        alignItems: "center",
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (key) => dispatch(deletePlace(key))
    }
}

export default connect(null,mapDispatchToProps)(PlaceDetail)