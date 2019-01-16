import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes'

const initialState = {
places: []

}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PLACE:
        return {
            //make a copy of old state properties to replace the old state
            ...state,
            places: state.places.concat({
                key: Math.random(), 
                name: action.placeName,
                image: action.placeImage
              })
        }

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey
                  }),
        
            }

            
        default:
        return state;
    }
}

export default reducer