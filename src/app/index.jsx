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
// import sagaMonitor from 'redux-saga/sagaMonitor';

import { Router, browserHistory } from 'react-router'
// import ReduxPromise from 'redux-promise'

import reducers from './reducers'
import routes from './routes'
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
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

