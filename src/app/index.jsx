/* eslint "import/imports-first": 0 */
/* eslint no-undef: 0 */
/* eslint import/extensions: 0 */


import 'babel-polyfill'
import 'bootstrap-social'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
// import sagaMonitor from 'redux-saga/sagaMonitor';

import { Router, browserHistory } from 'react-router'
// import ReduxPromise from 'redux-promise'

import reducers from './reducers'
import routes from './routes'
import rootSaga from './sagas'

const logger = createLogger()

// TODO logger only fro DEV environment
// if (process.env.NODE_ENV === 'development') {
//     createStoreWithMiddleware = applyMiddleware(thunk, logger, ReduxPromise)(createStore);
// }else {
//     createStoreWithMiddleware = applyMiddleware(thunk, ReduxPromise)(createStore);
// }

// TODO logger only fro DEV environment
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)


// for bundling your styles
import './bundle.scss'

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
  , document.querySelector('.react-root'))

