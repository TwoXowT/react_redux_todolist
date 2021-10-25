import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as reducers from './store/reducers';
import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import todos from "./store/reducers/root";

const store = createStore(todos,applyMiddleware(thunk))

ReactDOM.render(

    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,

  document.getElementById('root')
);

