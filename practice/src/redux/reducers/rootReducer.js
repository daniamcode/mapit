import mapReducer from './mapReducers'
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    mapReducer,
})

export default rootReducer;
