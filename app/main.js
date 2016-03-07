// Styles
import './css/base.css'

// React
import React from 'react'
import { render } from 'react-dom'

import {fetchCharacters} from './lib/utils'

// App
import App from './app'

fetchCharacters(characters => {
	render (
		<App characters={characters.data.results}/>
  , document.getElementById('todoAppContent')
	)
})
