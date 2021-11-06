import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./modules/store.js";
import axios from "axios";
import {onSuccess, onError, beforeRequestError, beforeRequestSuccess} from "./interceptors/index.js";

const {auth} = store.getState();

axios.defaults.baseURL = '';
axios.defaults.headers.common['Authorization'] = auth.token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(beforeRequestSuccess, beforeRequestError);
axios.interceptors.response.use(onSuccess, onError);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
