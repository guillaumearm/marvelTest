import { fetchHeroes } from '../lib/utils'

export const loadHeroes = () => dispatch => {
	dispatch({type: 'HEROES_LOADING'})
	fetchHeroes(heroes => {
		dispatch({type: 'HEROES_LOADED', heroes})
	})
}
