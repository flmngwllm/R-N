import {createStore, combineReducers, compose} from 'redux'
import placesReducer from './reducers/places'

//combines multiple reducers into 1
const rootReducer = combineReducers({
    // map keys
    places: placesReducer
})

let composeEnhancers = compose

if (__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}


const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
}

export default configureStore;