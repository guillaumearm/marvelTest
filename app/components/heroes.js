import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'

import marvelSelector from '../selectors'
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
      <a href="#" onClick={(e) => {e.preventDefault() ; onClick(hero)}}>
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

export const ListHeroes = connect (marvelSelector) ((props) => {
    const heroes = props.heroes.map((x, i) => {
      return (
        <Hero
          hero={x}
          onClick={() => {
            props.dispatch(push("/hero/" + x.id))
          }}
          key={i}
          entity={ { name: x.name, thumbnail: x.thumbnail } }
        />
      )
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
})

export const DetailsHero = connect (marvelSelector) (({dispatch, heroes, selectedHero}) => {
  const hero = selectedHero
  if (!hero) return <div/>
  const thumbnail = hero.thumbnail
  return (
    <div>
      <h3><a onClick={(e) => {e.preventDefault() ; dispatch(goBack()) }}>Go back</a></h3>
      <h3>{hero.name}</h3>
      <img height="200" width="200" src={getFullImagePath(thumbnail.path + '.' + thumbnail.extension)}/>
      <p>{hero.description}</p>
      <h4>Series</h4> <ListData data={hero.series.items}/>
      <h4>Stories</h4><ListData data={hero.stories.items}/>
      <h4>Comics</h4><ListData data={hero.comics.items}/>
      <h4>Events</h4><ListData data={hero.events.items}/>
    </div>
  )
})
