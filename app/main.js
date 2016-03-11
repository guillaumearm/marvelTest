// Styles
import './css/base.css'

// React
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// App
import App from './containers/app'

// Store
import configureStore from './store'
const store = configureStore()

// Actions
import { loadHeroes } from './actions'

store.dispatch(loadHeroes())

render (
	<Provider store={store}>
		<div>
			<h1>The Marvel test</h1>
			<App />
		</div>
	</Provider>
, document.getElementById('appContent')
)
