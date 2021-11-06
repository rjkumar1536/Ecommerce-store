import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import {errorReducer} from "./reducers/errorReducers.js";
import { loaderReducer } from './reducers/loaderReducers.js';
import { authReducer } from './reducers/authReducers';
import {cartReducer} from "./reducers/cartReducers";


const rootReducer = combineReducers({productList : productListReducer, productDetails : productDetailsReducer, error : errorReducer, loader: loaderReducer, auth: authReducer, cart: cartReducer});
const initialState = {};

const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );

  export default store;
