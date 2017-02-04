import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import sagaMonitor from 'redux-saga/sagaMonitor';

import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';

import 'bootstrap-social';

import reducers from './reducers';
import routes from './routes';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
const action = type => store.dispatch({ type });


console.log('sagaMiddleware', sagaMiddleware);


// import reducer from './reducers'
//


// for bundling your styles
import './bundle.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


/* function render() {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>
  , document.querySelector('.react-root'));
}


render();
store.subscribe(render);*/

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
  , document.querySelector('.react-root'));
