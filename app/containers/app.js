import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory as history } from 'react-router'
import { createStore } from 'redux'
import { connect } from 'react-redux'

import { getFullImagePath } from '../lib/utils'
import marvelSelector from '../selectors'
import { ListHeroes, DetailsHero } from '../components/heroes'

/*
class App extends Component {
  state = {selectedCharacter: null};
  render() {
    if (!this.props.heroes) return <div><p>Loading heroes...</p></div>
    if (this.state.selectedCharacter !== null)
      return (
        <div>
          <h2><a onClick={() => {this.setState({selectedCharacter: null})}} href="#">Back</a></h2>
          <HeroView hero={this.state.selectedCharacter}/>
        </div>
      )
    else
      return (
        <HeroesList
              heroes={this.props.heroes}
              onClickCharacter={
                hero => {
                  this.setState({ selectedCharacter: hero })
                }
              }
        />
      )
  }
}
export default connect (marvelSelector) (App)
*/

export default connect (marvelSelector) ((props) => {
  if (!props.heroes) return (<p>Loading Heroes...</p>)
  return (
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={ListHeroes} />
        <Route path="hero/:id" component={DetailsHero} />
      </Route>
    </Router>
  )
})
