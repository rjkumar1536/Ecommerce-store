import { SET_LOGIN, SET_LOGOUT } from "../constants"

export const logIn = (user) => {
    return (dispatch, getState) => {
        dispatch({type: SET_LOGIN, payload: user})
    }
}

export const logOut = () => {
    return dispatch => {
        dispatch({type : SET_LOGOUT})
    }
}