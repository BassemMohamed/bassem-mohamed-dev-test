import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Home from "./containers/home";
import rootReducer from "./reducers/rootReducer"
import {ThemeProvider} from "styled-components";
import './assets/main.css'

const store = createStore(rootReducer, applyMiddleware(thunk));
const theme = {
    Primary: "#fff",
    Secondary: "#00b3b3"
}
render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);