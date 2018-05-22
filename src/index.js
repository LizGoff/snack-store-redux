import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const mainReducer = (state = [], action) => {
    if (action.type === 'ADD_BUTTON') {

        console.log('I am the mainReducer!')
        return [...state, state.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        mainReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
