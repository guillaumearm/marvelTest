import React, {Component} from 'react'
import {fetchCharacters, getFullImagePath} from './lib/utils'

const Links = (props) => {
  const urls = props.urls.map((x, id) => {
    return (
      <a href={x.url} key={id}>{x.type}</a>
    )
  })
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
      {urls}
    </div>
  )
}

const Character = ({onClick, character, entity: {name, uri, thumbnail}}) => {
  return (
    <div style={{alignSelf: "center", width: "200px"}}>
      <h3 style={{alignSelf: "center", marginTop: "20px"}}>{name}</h3>
      <a onClick={() => onClick(character)} href="#">
        <img height="200" width="200" src={getFullImagePath(thumbnail.path + '.' + thumbnail.extension)}/>
      </a>
      <Links urls={character.urls}/>
    </div>
  )
}

const CharacterList = (props) => {
    const characters = props.characters.map(x => {
      return (<Character character={x} onClick={props.onClickCharacter} key={x.id} entity={{name: x.name, thumbnail: x.thumbnail}}/>)
    })

    return (
      <div style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}>
        {characters}
      </div>
    )
  }

const ListData = (props) => {
  const data = props.data.map((x, id) => {
    return (
      <p key={id}>{x.name}</p>
    )
  })

  return (
    <div>
      {data}
    </div>
  )
}

const CharacterView = ({character}) => {
  console.log(character)
  return (
    <div>
      <h3>{character.name}</h3>
      <h4>Seris</h4> <ListData data={character.series.items}/>
      <h4>Stories</h4><ListData data={character.stories.items}/>
      <h4>Comics</h4><ListData data={character.comics.items}/>
      <h4>Events</h4><ListData data={character.events.items}/>
    </div>
  )
}

class App extends Component {
  state = {selectedCharacter: null};
  render() {
    if (this.state.selectedCharacter !== null)
      return (
        <div>
          <h2><a onClick={() => {this.setState({selectedCharacter: null})}} href="#">Back</a></h2>
          <CharacterView character={this.state.selectedCharacter}/>
        </div>
      )
    else
      return (<CharacterList characters={this.props.characters} onClickCharacter={character => {this.setState({selectedCharacter: character})}}/>)
  }
}

export default App
