import { SET_LOGIN, SET_LOGOUT } from "../constants";

const initialState = {
    isLoggedIn : false,
    token : '',
    username: '',
    user : {},
}

export const authReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case SET_LOGIN:
            return {...state, user : payload, isLoggedIn: true};
        case SET_LOGOUT:
            return {...state, user : {}, isLoggedIn: false, token : '', username: ''};
        default:
            return state;
    }
}