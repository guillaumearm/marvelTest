import { combineReducers } from 'redux'

const heroes = (state = [], action) => {
  switch (action.type) {
    case 'HEROES_LOADED':
      return action.heroes
    case 'HEROES_LOAD':
    default:
      return state
  }
}

const selectedHero = (state = null, action) => {
  switch (action.type) {
    case 'HERO_DETAILS':
      return action.hero
    default:
      return state
  }
}

export default combineReducers({
	heroes,
  selectedHero,
})
