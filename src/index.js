////Imports
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

import './index.css';
import App from './components/App/App.js';

////saga  
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('EDIT_MOVIE', editMovie);
}

function* getMovies(){
    try {
        const response = yield axios.get('/api/movies');
        yield put({type: 'SET_MOVIES', payload: response.data});
    }
    catch(err) {
        console.log('ERROR IN GET', err)
    }
}

function* editMovie(action){
    try {
        console.log('AP', action.payload)
        yield axios.put('/api/movies/', action.payload );
        yield put({type: 'GET_MOVIES'});
    }
    catch(err) {
        console.log('ERROR IN PUT', err)
    }
}



////Reducers
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genres,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
