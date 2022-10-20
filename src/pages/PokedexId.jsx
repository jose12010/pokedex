import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const PokedexId = () => {

  const {id} = useParams()
  const [pokemon, setPokemon] = useState()
  const [error, setError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(errorPage =>{
        console.log(errorPage) 
        setError(true)
      })
  }, [])
  
  if(error){
    return(
      <div><h2>Error Pokemon {id} not found</h2></div>)
  }

  return (
    <div className='main_pokeid'>
        <div className="card_pokeid">
            <div className="title_pokeid">
                <h2>Name: {pokemon?.name}</h2>
            </div>
            <div className="image_pokeid">
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </div>
            <div className="stats_pokeid">
              <div className="stats">
                {pokemon?.stats.map(stats => <div key={stats.stat.url}><h2>{stats.stat.name}: {stats.base_stat} effort: {stats.effort}</h2></div> )}
              </div>
            </div>
            <div className="abilities_pokeid">
                <div className="a_card">
                <h2>Abilities: </h2> {pokemon?.abilities.map(abilities => <div key={abilities.ability.url}><h2>{abilities.ability.name}</h2></div> )}
                </div>
            </div>
            <div className="type_pokeid">
                <div className="t_card">
                <h2>Types: </h2> {pokemon?.types.map(types => <div key={types.type.url}><h2>{types.type.name}</h2></div> )}
                </div>
            </div>

        </div>
    </div>
  )
}

export default PokedexId