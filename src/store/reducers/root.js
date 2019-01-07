import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes'

const intialState = {

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
                image: placeImage
              })
        }

        case DELETE_PLACE:
            return {
                ...state,
                places: prevState.places.filter(place => {
                    return place.key !== state.selectPlace.key
                  }),
                  selectPlace: null
            }

            case SELECT_PLACE:
                return {
                    ...state, 
                    selectPlace: state.places.find(place => {
                        return place.key === action.placeKey;
                      })
                }

            case DESELECT_PLACE:
            return {
                ...state,
                selectPlace: null

            }
        default:
        return state;
    }
}

export default reducer