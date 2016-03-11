import React, { Component } from 'react'
import { getFullImagePath } from '../lib/utils'

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

const Hero = ({onClick, hero, entity: {name, uri, thumbnail}}) => {
  return (
    <div style={{alignSelf: "center", width: "200px"}}>
      <h3 style={{alignSelf: "center", marginTop: "20px"}}>{name}</h3>
      <a onClick={() => onClick(hero)} href="#">
        <img height="200" width="200" src={getFullImagePath(thumbnail.path + '.' + thumbnail.extension)}/>
      </a>
      <Links urls={hero.urls}/>
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

export const HeroesList = (props) => {
    const heroes = props.heroes.map(x => {
      return (<Hero hero={x} onClick={props.onClickCharacter} key={x.id} entity={{name: x.name, thumbnail: x.thumbnail}}/>)
    })

    return (
      <div style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}>
        {heroes}
      </div>
    )
}

export const HeroView = ({hero}) => {
  return (
    <div>
      <h3>{hero.name}</h3>
      <h4>Seris</h4> <ListData data={hero.series.items}/>
      <h4>Stories</h4><ListData data={hero.stories.items}/>
      <h4>Comics</h4><ListData data={hero.comics.items}/>
      <h4>Events</h4><ListData data={hero.events.items}/>
    </div>
  )
}
