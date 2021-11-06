import { CLEAR_LOADING, SET_LOADING } from "../constants"

export const clearLoading = () => {
    return (dispatch) => {
        dispatch({type : CLEAR_LOADING})
    }
}

export const setLoading = () => {
    return (dispatch) => {
        dispatch({type : SET_LOADING})
    }
}