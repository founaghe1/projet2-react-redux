import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers'; // importe le reducers de notre application 
import { getPosts } from "./actions/postAction";
import { getUser } from "./actions/userAction";

// creation du store

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

store.dispatch(getPosts());
store.dispatch(getUser());

ReactDOM.render(
    <Provider store={store}>

        <App />

    </Provider>,

document.getElementById("root"));

// 55mn 
