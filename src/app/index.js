import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import ReduxPromise from 'redux-promise'

import 'bootstrap-social'

import reducers from './reducers'
import routes from './routes'


// for bundling your styles
import './bundle.scss'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
  , document.querySelector('.react-root'))
