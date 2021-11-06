import {PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILURE} from "../constants.js";
const initialproductListState = {
    products : [],
}

const initialproductDetailsState = {
    product: {reviews: []},
}

export const productListReducer = (state = initialproductListState, action) => {
    const {type, payload} = action;
    switch(type) {
        case PRODUCT_LIST_REQUEST : 
            return {...state, products: []};
        case PRODUCT_LIST_SUCCESS :
            return {...state, products : payload};
        case PRODUCT_LIST_FAILURE : 
            return {...state,products : []}; 
        default :
            return state;
    }
}

export const productDetailsReducer = (state = initialproductDetailsState, action) => {
    const {type, payload} = action;
    switch(type) {
        case PRODUCT_DETAILS_REQUEST : 
            return {...state, product: {reviews: []}};
        case PRODUCT_DETAILS_SUCCESS :
            return {...state,  product : payload};
        case PRODUCT_DETAILS_FAILURE : 
            return {...state, product : { reviews: []}}; 
        default :
            return state;
    }
}