import {createReducer} from '../../app/common/util/reducerUtil'

const initialState = {
    data: 42
}

const testReducer = (state = initialState, action) => {
    return state;
}

export default testReducer;