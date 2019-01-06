import React from 'react';
import{ StyleSheet, FlatList} from 'react-native'
import ListItem from './ListItem'

const List = props =>{
    return(
        <FlatList 
        style = {styles.listContainer}
        data={props.places}
        renderItem={(info) => (
        <ListItem
        placeName={info.item.value} 
        onItemPressed = {() => props.onDelete(info.item.key)}
        />
    )}
/>
)    
       
    
}

const styles = StyleSheet.create({
    listContainer:{
        width: "100%"
      }
})
export default List;