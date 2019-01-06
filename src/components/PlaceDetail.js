import React from 'react'
import {Button, Modal, View, Image, Text} from 'react-native'

const placeDetail = () => {
    let modalContent = null;

    if (props.selectPlace {
        modalContent = (
            <View>
            <Image source = {props.selectPlace.placeImage}/>
        <Text>{props.selectPlace.placeName}</Text>
        </View>
        )
    }
    return(
<Modal>
    <View>
        {modalContent}
        <View>
            <Button/>
            <Button/>
        </View>
    </View>
</Modal>
    )
}

export default placeDetail