import { createSelector } from 'reselect'
import _ from 'lodash'

const getHeroesSelector = state => state.heroes.data.results
const getHeroSelector = (state, props) => props && props.params && props.params.id

export default createSelector(
  getHeroesSelector,
  getHeroSelector,
  (heroes, idHero) => {
    return {
      heroes,
      selectedHero: heroes && heroes.find(x => x.id == idHero),
    }
  }
)
