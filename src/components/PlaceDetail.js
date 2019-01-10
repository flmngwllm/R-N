import React from 'react'
import {Button, Modal, View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const placeDetail = props => {
    let modalContent = null;

    if (props.selectPlace) {
        modalContent = (
            <View>
            <Image source ={props.selectPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{props.selectPlace.name}</Text>
        </View>
        )
    }

    return(
        //Request close is specifically for android
<Modal onRequestClose={props.onModalClose} 
visible={props.selectPlace !== null}
 animationType ="slide">

    <View style ={styles.modalContainer}>
        {modalContent}
        <View>
            {/* <Button title="Delete" color="red" onPress={props.onDelete}/> */}
            <TouchableOpacity>
            <Icon size={30} name="ios-trash" color="red"/>
            </TouchableOpacity>
            <Button title="Close" onPress={props.onModalClose}/>
        </View>
    </View>
</Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
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
    }
})

export default placeDetail