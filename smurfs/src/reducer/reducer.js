import {
    FETCH_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
    POST_DATA
} from "../actions/actions"



const initialState = {
    Smurfs: [{}]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_DATA:
            return {
                ...state
                
            }
        case FETCH_DATA:
            return {
                ...state
            }
            case FETCH_DATA_SUCCESS:
                return {
                    ...state,
                    Smurfs: action.payload
                }
        default: return state
    }
}