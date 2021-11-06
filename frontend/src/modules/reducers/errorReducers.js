import { CLEAR_ERROR, SET_ERROR } from "../constants";

const initialState = {
    isError : false,
    errorMessage: '',
}

export const errorReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case SET_ERROR:
            return {...state, isError : true, errorMessage: payload};
        case CLEAR_ERROR:
            return {...state, isError: false, errorMessage: ''};
        default:
            return state;
    }
}