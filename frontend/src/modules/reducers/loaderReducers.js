import { CLEAR_LOADING, SET_LOADING } from "../constants";

const initialState = {
    isLoading : false,
    loadingCount: 0,
}
export const loaderReducer = (state = initialState, action) => { 
    const {type, payload} = action;
    switch(type) {
        case SET_LOADING:
            return {...state, loadingCount: state.loadingCount + 1, isLoading: true};
        case CLEAR_LOADING:
            return {...state, loadingCount: state.loadingCount - 1, isLoading: state.loadingCount > 1};
        default:
            return state;
    }
}