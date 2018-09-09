import {combineReducers} from 'redux';
import testReducer from './testReducer';

const rootReducer = combineReducers({
    test: testReducer,
    data:42
})
export default rootReducer;