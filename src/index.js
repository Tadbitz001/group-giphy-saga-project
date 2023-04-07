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
            console.log('in reducer looking at our state', state)
            return action.payload;
    
        default:
            return state;
    }
}

//This function will grab the different giphys from our DB
function* fetchGiphy(action){
    console.log('looking at this ish', action.payload)
    try{
        console.log('in the fetchGiphy!', action)
        //yield will pause and wait for a response from our server
        const giphyList = yield axios.get(`/api/search/${action.payload}`)
        
        // the purpose of this put:
        //aka:dispatch = put => this has to go to the reducer
        yield put({type:'SET_GIPHY', payload: giphyList.data })
        console.log('here is the updated giphyList:', giphyList);
    }catch (error) {
            console.log('Could not fetchGiphy:', error)
    }
}

const sagaMiddleware = createSagaMiddleware();

function* rootSaga () {
    console.log('Inside rootSaga');
    //This will get all giphys from the DB
    yield takeEvery('GET_GIPHY', fetchGiphy);
   
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
