import { combineReducers } from 'redux';
import courseReducer from './courseReducer';

export default combineReducers({
    course: courseReducer
});