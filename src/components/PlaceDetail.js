import React from 'react'
import {Button, Modal, View, Image, Text, StyleSheet} from 'react-native'

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
<Modal onRequestClose={props.onModalClose} 
visible={props.selectPlace !== null}
 animationType ="slide">
 
    <View style ={styles.modalContainer}>
        {modalContent}
        <View>
            <Button title="Delete" color="red" onPress={props.onDelete}/>
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