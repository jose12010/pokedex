import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState()
    const gotoId = useNavigate()

    useEffect(() => {
        
            axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(error => console.log(error))
        
    }, [])
    
    
    const goToId = () => {
        gotoId(`/pokedex/${pokemon.id}`)
    }

  return (
    <div className='main_card' onClick={goToId}>
        <div className="title_card">
            <h2>Name: {pokemon?.name}</h2>
        </div>
        <div className="image_card">
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        <div className="abilities_card">
            <div className="a_card">
            <h2>Abilities: </h2> {pokemon?.abilities.map(abilities => <div key={abilities.ability.url}><h2>{abilities.ability.name}</h2></div> )}    
            </div>    
        </div>
        <div className="type_card">
           <div className="t_card">
            <h2>Types: </h2> {pokemon?.types.map(types => <div key={types.type.url}><h2>{types.type.name}</h2></div> )}
           </div>
        </div>

    </div>
  )
}

export default PokemonCard