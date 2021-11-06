import {ADD_CART_ITEM, DELETE_CART_ITEM, REMOVE_CART_ITEM} from "../constants.js";
import axios from "axios";

export const addCartItem = (id, quantity) => {
    return async (dispatch, getState) => {
        const {data} = await axios.get(`/api/products/${id}`);
        const {_id, name, image, price, countInStock} = data;
        dispatch({type: ADD_CART_ITEM, payload : {id : _id, name, image, price, countInStock , quantity}});
    }
}

export const removeCartItem = (id, quantity) => {
    return async (dispatch, getState) => {
        const {cartItems} = getState().cart;
        const item = cartItems.find(cartItem => cartItem.id === id);
        if(item) {
            if(item.quantity <= quantity) {
                dispatch(deleteCartItem(id));
            } else {
                dispatch({type :REMOVE_CART_ITEM, payload : { id , quantity}});
            }
        }
    }
}

export const deleteCartItem = (id) => {
    return async (dispatch, getState) => {
        dispatch({type: DELETE_CART_ITEM, payload: {id}});
    }   
}