import {PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILURE} from "../constants.js";
import axios from "axios";

export const listProducts = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({type : PRODUCT_LIST_REQUEST});
            const {data} = await axios.get(`/api/products`);
            dispatch({type : PRODUCT_LIST_SUCCESS, payload: data});
        } catch(error) {
            dispatch({type : PRODUCT_LIST_FAILURE});
        }
    }
}

export const listProductDetails = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch({type : PRODUCT_DETAILS_REQUEST});
            const {data} = await axios.get(`/api/products/${id}`);
            dispatch({type : PRODUCT_DETAILS_SUCCESS, payload: data});
        } catch(error) {
            dispatch({type : PRODUCT_DETAILS_FAILURE});
        }
    }
}