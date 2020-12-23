import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Redux Setup
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// Importing the root reducer
import rootReducer from './reducers';
// Importing Redux Thunk
import thunk from 'redux-thunk';

// Combining Redux Devtools and Thunk
// So they can fit into one parameter for createStore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the Redux store with the root reducer
// "Window" parameter is for the Redux devtools
// Note: createStore only accepts two parameters
const store = createStore(
    rootReducer,
    // applyMiddleware can take more parameters
    composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
