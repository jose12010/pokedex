import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchPokemon = () => {

    const goToPokemonName = useNavigate()
    const goToPokemon = event => {
        event.preventDefault()
        goToPokemonName(`/pokedex/${event.target.pokemonName.value.trim().toLowerCase()}`)
      }

  return (
    <div className="srch">
          <form className='form_pokedex' onSubmit={goToPokemon}>
            <input id="pokemonName" type="text" className='input_pokedex' placeholder='Busca tu pokemon'/>
            <button className='btn_pokedex'>Vamos!</button>
          </form>
        </div>
  )
}

export default SearchPokemon