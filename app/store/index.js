import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { apply, __ } from 'Fjs'
import rootReducer from '../reducers'

const history = routerMiddleware(browserHistory)
export default apply (createStore, rootReducer, __, applyMiddleware(thunk, history))
