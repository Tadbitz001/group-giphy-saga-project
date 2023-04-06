import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {put, takeEvery} from 'redux-saga/effects'
import axios from 'axios';


const giphyList = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIPHY':
            return action.payload;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

function* rootSaga () {
    console.log('Inside rootSaga');
    yield takeEvery()
    // yield takeEvery()
    // yield takeEvery()
  }

const store = createStore(
    combineReducers({ 
        giphyList
    }),
    
    applyMiddleware(sagaMiddleware, logger),
  
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>
);
