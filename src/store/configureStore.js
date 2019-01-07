import {createStore, combineReducers} from 'redux'
import placesReducer from './reducers/root'

//combines multiple reducers into 1
const rootReducer = combineReducers({
    // map keys
    places: placesReducer
})

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;