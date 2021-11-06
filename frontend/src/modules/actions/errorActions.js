import { CLEAR_ERROR, SET_ERROR } from "../constants"

export const setError = (payload) => {
    return (dispatch) => {
        dispatch({type : SET_ERROR , payload});
        setTimeout(() => {
            dispatch({type : CLEAR_ERROR });
        }, 5000);
    } 
}

export const clearError = () => {
    return (dispatch) => {
        dispatch({type : CLEAR_ERROR })
    } 
}