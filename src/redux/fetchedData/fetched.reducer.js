import {dataTypes} from './fetched.type'
const INITIALIZE_STATE = {
    results: null,
}

const fetchedDataReducer = (state = INITIALIZE_STATE, action) => {
    if(action.type === dataTypes.FETCHED_DATA){
        return{
            ...state,
            results: action.payload
        }
    }
    return state
}

export default fetchedDataReducer;