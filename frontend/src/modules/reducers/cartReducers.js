 import {ADD_CART_ITEM, REMOVE_CART_ITEM, DELETE_CART_ITEM} from "../constants.js";
 const initialState = {
     cartItems : [],
 }
 export const cartReducer = (state = initialState, action) => {
     const {type, payload} = action;
     let itemIndex, newCartItems;
    switch(type) {
        case ADD_CART_ITEM:
            itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === payload.id);
            newCartItems = [...state.cartItems];
            if(itemIndex !== -1) {
                newCartItems[itemIndex].quantity = newCartItems[itemIndex].quantity + payload.quantity;
            } else {
                newCartItems.push(payload);
            }
            return {...state, cartItems : newCartItems};
        case REMOVE_CART_ITEM:
            itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === payload.id);
            newCartItems = [...state.cartItems];
            if(itemIndex !== -1) {
                newCartItems[itemIndex].quantity = newCartItems[itemIndex].quantity - payload.quantity;
            }
            return {...state, cartItems : newCartItems};
        case DELETE_CART_ITEM:
            itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === payload.id);
            newCartItems = [...state.cartItems];
            if(itemIndex !== -1) {
                newCartItems.splice(itemIndex, 1)
            }
            return {...state, cartItems : newCartItems};
        default:
            return state;
    }
 }