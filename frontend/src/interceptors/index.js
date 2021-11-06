import store from "../modules/store.js";
import {clearLoading, setLoading} from "../modules/actions/loaderActions.js";
import {setError, clearError} from "../modules/actions/errorActions.js"

export const onSuccess = (response) => {
    store.dispatch(clearLoading());
    store.dispatch(clearError());
    return response;
}

export const onError = (error) => {
    const payload = error.response && error.response.data.message ? error.response.data.message : error.message
    store.dispatch(clearLoading());
    store.dispatch(setError(payload))
    return Promise.reject(error);

}

export const beforeRequestSuccess = (config) => {
    store.dispatch(setLoading());
    store.dispatch(clearError());
    return config;
}

export const beforeRequestError = (error) => {
    store.dispatch(clearLoading());
    console.log(error);
    return Promise.reject(error);
}



