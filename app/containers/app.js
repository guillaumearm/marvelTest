import React, { Component } from 'react'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { getFullImagePath } from '../lib/utils'
import marvelSelector from '../selectors'
import { HeroesList, HeroView } from '../components/heroes'

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
      return (<HeroesList heroes={this.props.heroes} onClickCharacter={hero => {this.setState({selectedCharacter: hero})}}/>)
  }
}

export default connect (marvelSelector) (App)

/*
export default connect (marvelSelector) ((props) => {
  return <p>WIP</p>
})
*/
