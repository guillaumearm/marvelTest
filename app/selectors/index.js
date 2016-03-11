import { createSelector } from 'reselect'
import _ from 'lodash'

const getHeroesSelector = state => state.heroes.data && state.heroes.data.results
const getSelecteHeroSelector = state => state.selectedHero

export default createSelector(
  getHeroesSelector,
  getSelecteHeroSelector,
  (heroes, selectedHero) => {
    return {
      heroes,
      selectedHero,
    }
  }
)
